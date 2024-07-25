import React from 'react'
import Header from '../../../component/Investment/Header'
import Footer from '../../../component/Investment/Footer'
import HomeBanner from '../../../component/Investment/HomeBanner'
import AboutUs from '../../../component/Investment/AboutUs'
import Circle from '../../../component/Investment/Circle'
import Carousel from '../../../component/Investment/Carousel'
import Contact from '../../../component/Investment/Contact'
import Partners from '../../../component/Investment/Partners'
const title = "Invest in Resilience by Empowering Vulnerable Communities";
const description = "Discover the impact your investment transform the lives of 10M vulnerable individuals.";

function page() {
  return (
    <>
      <head>
        <title>Invest in Resilience by Empowering Vulnerable Communities</title>
        <meta name="description" content="Discover the impact your investment transform the lives of 10M vulnerable individuals." />
        <meta name="keywords" content="investment for social development" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://communityactioncollab.org/cac-investment-2024" />
        <meta property="og:title" content="Invest in Resilience by Empowering Vulnerable Communities" />
        <meta property="og:site_name" content="Community Action Collab" />
        <meta property="og:url" content="https://communityactioncollab.org/cac-investment-2024" />
        <meta property="og:description" content="Discover the impact your investment transform the lives of 10M vulnerable individuals." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://communityactioncollab.org/investment/component.png" />
        <meta property="og:image" content="https://communityactioncollab.org/investment/component2.png" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
          {
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "Community Action Collab - investment 2024",
            "url": "https://www.communityactioncollab.org/cac-investment-2024",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "{search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        ` }} />

      </head>
      <Header />
      <HomeBanner />
      <Partners />
      <AboutUs />
      <Carousel />
      <Circle />
      <Contact />
      <Footer />
    </>
  )
}

export default page
