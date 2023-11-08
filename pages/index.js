import Footer from "@/components/footer";
import Nav from "@/components/nav";
import Home from "@/components/home";
import Head from "next/head";
import OpenSource from "@/components/openSource";
import About from "@/components/about";
import Division from "@/components/division";
import JoinUs from "@/components/joinUs";
import Event from "@/components/event";

export default function Root() {
  return (
    <>
      <Head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no" />
        <title>FOSTI UMS</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Forum Open Source Teknik Informatika UMS" />
        <meta name="title" content="FOSTI UMS"/>
        <meta property="og:title" content="FOSTI UMS" />  
        <meta name="description" content="Unit kegiatan mahasiswa Fakultas Komunikasi dan Informatika Universitas Muhammadiyah Surakarta yang mempelajari, memperdalam, dan menyebarkan open source."/>
        <meta property="og:description" content="Unit kegiatan mahasiswa Fakultas Komunikasi dan Informatika Universitas Muhammadiyah Surakarta yang mempelajari, memperdalam, dan menyebarkan open source."/>
        <meta property="og:url" content="https://fostiums.org/" />
        <meta property="og:image" content="/logo-fosti.webp"/>
        <meta property="og:image:alt" content="Logo Fosti UMS"/>
        <meta property="og:type" content="website" />
        <meta property="webcrawlers" content="all"/>
        <meta property="spiders" content="all"/>
        <meta property="robots" content="all"/>
      </Head>
      <div className="snap-y w-full h-screen overflow-y-scroll">
        <Nav/>
        <Home/>
        <OpenSource/>
        <About/>
        <Division/>
        <Event/>
        <JoinUs/>
        <Footer />
      </div>
      </>
  )
}
