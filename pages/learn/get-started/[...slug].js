/**
 * Copyright (c) 2022, WSO2 LLC. (http://www.wso2.com) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import fs from "fs";
import matter from "gray-matter";
import React from "react";
import { Container, Col, Button, Offcanvas } from "react-bootstrap";
import Image from "next-image-export-optimizer";
import Head from "next/head";
import { Liquid } from "liquidjs";

import Layout from "../../../layouts/LayoutDocs";
import LeftNav from "../../../components/common/left-nav/LeftNav";
import MainContent from "../../../components/common/main-content/mainContent";
import { prefix } from "../../../utils/prefix";
import Toc from "../../../components/common/pg-toc/Toc";
import LearnToc from "../../../utils/learn-lm.json";
import SwanLake from "../../../_data/swanlake-latest/metadata.json";

var traverseFolder = function (dir) {
  var results = [];
  var list = fs.readdirSync(dir);
  list.forEach(function (file) {
    var filex = dir + "/" + file;
    var stat = fs.statSync(filex);
    if (stat && stat.isDirectory()) {
      /* Recurse into a subdirectory */
      results = results.concat(traverseFolder(filex));
    } else {
      /* Is a file */
      filex = filex.replace(/swan-lake\/get-started\//g, "");
      results.push(filex);
    }
  });
  return results;
};

export async function getStaticPaths() {
  // Retrieve all our slugs
  const files = traverseFolder("swan-lake/get-started");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", "").split("/"),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const id = slug[slug.length - 1];
  let sub = "";
  let third = "";
  if (slug.length == 2) {
    sub = slug[slug.length - 2];
  }
  if (slug.length == 3) {
    sub = slug[slug.length - 3];
    third = slug[slug.length - 2];
  }

  slug = slug.join("/");
  const fileName = fs.readFileSync(`swan-lake/get-started/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);

  return {
    props: {
      frontmatter,
      content,
      id,
      sub,
      third,
      slug,
    },
  };
}

export default function PostPage({
  frontmatter,
  content,
  id,
  sub,
  third,
  slug,
}) {

  // Update values in markdown files
  const engine = new Liquid();
  const AddLiquid = (content) => {
    const [newContent, setNewContent] = React.useState("");
    const md = engine.parse(content);
    engine
      .render(md, {
        v: "Liquid",
        "windows-installer-size": SwanLake["windows-installer-size"],
        dist_server: process.env.distServer,
        version: SwanLake.version,
        "windows-installer": SwanLake["windows-installer"],
        "linux-installer": SwanLake["linux-installer"],
        "linux-installer-size": SwanLake["linux-installer-size"],
        "rpm-installer": SwanLake["rpm-installer"],
        "rpm-installer-size": SwanLake["rpm-installer-size"],
        "macos-installer": SwanLake["macos-installer"],
        "macos-installer-size": SwanLake["macos-installer-size"],
        "other-artefacts": SwanLake["other-artefacts"],
      })
      .then((md) => {
        setNewContent(md);
      });
    return newContent;
  };

  // Show mobile left nav
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Show page toc
  const [showToc, setShowToc] = React.useState(false);

  const handleToc = (data) => {
    setShowToc(data)
  }

  return (
    <>
      <Head>
        <meta name="description" content={frontmatter.description} />
        <meta name="keywords" content={frontmatter.keywords} />

        <title>{frontmatter.title}</title>

        {/* <!--FB--> */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={`Ballerina - ${frontmatter.title}`}
        />
        <meta
          property="og:description"
          content={frontmatter.description}
        ></meta>

        {/* <!--LINKED IN  --> */}
        <meta property="og:description" content={frontmatter.description} />

        {/* <!--TWITTER--> */}
        <meta
          property="twitter:description"
          content={frontmatter.description}
        />
        <meta
          property="twitter:text:description"
          content={frontmatter.description}
        />
      </Head>
      <Layout>
        <Col sm={3} xxl={2} className="leftNav d-none d-sm-block">
          <LeftNav
            launcher="learn"
            id={id}
            mainDir="get-started"
            sub={sub}
            third={third}
            Toc={LearnToc}
          />
        </Col>
        <Col xs={12} className="d-block d-sm-none">
          <Button className="learnMob" onClick={handleShow}>
            Learn
          </Button>
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <LeftNav
                launcher="learn"
                id={id}
                mainDir="get-started"
                sub={sub}
                third={third}
                Toc={LearnToc}
              />
            </Offcanvas.Body>
          </Offcanvas>
        </Col>
        <Col xs={12} sm={7} xxl={7} className="mdContent">
          <Container>
            <div className="topRow">
              <Col xs={11}>
                <h1>{frontmatter.title}</h1>
              </Col>
              <Col xs={1} className="gitIcon">
                <a
                  href={`${process.env.gitHubPath}swan-lake/get-started/${slug}.md`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={`${prefix}/images/github.svg`}
                    height={20}
                    width={20}
                    alt="Edit in github"
                  />
                </a>
              </Col>
            </div>

            <p className="intro">{frontmatter.intro}</p>

            <MainContent
              content={AddLiquid(content)}
              handleToc={handleToc}/>

          </Container>
        </Col>
        <Col sm={2} xxl={3} className="pageToc d-none d-sm-block">
          {showToc ? (
            <>
              <h6>On this page</h6>
              <Toc source={content} />
            </>
          ) : null}
        </Col>
      </Layout>
    </>
  );
}