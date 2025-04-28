import "@/styles"

import { Head } from "minista"
import Header from "@/layouts/Header"
import Content from "@/layouts/Content"
import Footer from "@/layouts/Footer"
import Banner from "./sections/Banner"

export default function (props) {
  const { children, title, url, isHeaderFixed } = props
  return (
    <>
      <Head htmlAttributes={{ lang: "en" }}>
        <title>Stream Vibe | {title}</title>
        <script src="/src/main.js" type="module"></script>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="/site.webmanifest"></link>{" "}
      </Head>
      <Header url={url} isFixed={isHeaderFixed} />
      <Content isResetPaddingTop={isHeaderFixed}>
        {children}
        <Banner />
      </Content>

      <Footer />
    </>
  )
}
