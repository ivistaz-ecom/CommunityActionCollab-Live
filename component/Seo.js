import React from "react";
import Head from "next/head";
import Script from "next/script";
import ConfigData from "../config.json";
function Seo({ title, description, path, metaImage }) {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title dangerouslySetInnerHTML={{ __html: title }}></title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <link rel="icon" href="/images/cac_favicon-150x150.png" />
        <link rel="canonical" href={`${ConfigData.mainWebUrl}/${path}`} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${ConfigData.mainWebUrl}/${path}`} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={metaImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "WebSite",
              name: "Communtiy Action Collab",
              url: `${ConfigData.mainWebUrl}`,
              potentialAction: {
                "@type": "SearchAction",
                target: `${ConfigData.mainWebUrl}/${path}/{search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossorigin="anonymous"
        ></Script>
      </head>
    </>
  );
}

export default Seo;
