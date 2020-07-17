import React, { useState } from "react"
import TeckStack from "../components/landing/TechStack"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/landing/hero"
import Chapters from "../components/chapters/Chapters"
import { FrameworkContext } from "../frameworkContext"

const IndexPage = () => {
  const [framework, setFramework] = useState("vue")

  const toggleFramework = () => {
    setFramework(framework === "vue" ? "react" : "react")
  }
  return (
    <FrameworkContext.Provider value={framework}>
      <Layout>
        <SEO title="Home" />
        <Hero />
        <TeckStack />
        <Chapters />
      </Layout>
    </FrameworkContext.Provider>
  )
}

export default IndexPage
