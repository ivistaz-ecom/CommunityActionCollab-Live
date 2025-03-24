
import React from 'react'
import Header from '../../../component/Header'
import Banner from './Ourimpact/Banner'
import Footer from '../../../component/Footer'
import Blog from './Ourimpact/Blog'
import Seo from '../../../component/Seo'

const title= 'Supporting last mile to overcome humanitarian crises'
  const description = 'The impact that we have facilitated through our partnerships provided relief and helped vulnerable communities, front line workers and healthcare providers bounce back from humanitarian crises. Read more.'
  const url = 'impact'
  const banner ="/images/Highcompressed_712800817.png"

function Impact() {
  return (
    <>
      <Seo title={title} description={description} path={url} metaImage={banner} />
    <Header/>
    <Banner/>
    <Blog/>
    <Footer/>

    </>
  )
}

export default Impact
