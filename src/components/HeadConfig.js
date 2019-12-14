import React, { Fragment } from 'react';
import { Head } from 'react-static'

const HeadConfig = () => (
  <Fragment>
    <Head>
      <title>Asociación Guardianes</title>
      <meta name="description" content="Eventos culturales de ocio alternativo" />
      <link rel='icon' type='image/png' href='/images/escudo-fullcolor.png'/>
      <link href="https://fonts.googleapis.com/css?family=Bree+Serif|Lato&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
    </Head>
    <style jsx global>{`
      body {
        margin: 0;
        color: #333;
        font-family: 'Lato', -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
      }
      html, body {
        scroll-behavior: smooth;
      }
      .display-font {
        font-family: 'Bree Serif', serif;
      }
      * {
        box-sizing: border-box;
      }
      img {
        max-width: 100%;
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      .html-content {
        line-height: 1.5;
      }
    `}</style>
  </Fragment>
)

export default HeadConfig
