'use client'

import React from 'react'
import Blogs from "../../../component/Blogs/Blogs"
import Seo from "../../../component/Seo"
const page = () => {
  const seoField = {
    title: "",
    description: "",
    path: "blogs",
    metaImage: "/images/action_banner.jpeg",
    pageType: "WebSite",
  };
  return (
    <div>
      <Seo {...seoField}/>
        <Blogs/>
    </div>
  )
}

export default page