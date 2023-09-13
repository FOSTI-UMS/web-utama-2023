import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no" />
        <meta name="author" content="Forum Open Source Teknik Informatika UMS" />
        <meta name="title" content="FOSTI UMS"/>
        <meta property="og:title" content="FOSTI UMS" />  
        <meta name="description" content="Unit kegiatan mahasiswa Fakultas Komunikasi dan Informatika Universitas Muhammadiyah Surakarta yang mempelajari, memperdalam, dan menyebarkan open source."/>
        <meta property="og:description" content="Unit kegiatan mahasiswa Fakultas Komunikasi dan Informatika Universitas Muhammadiyah Surakarta yang mempelajari, memperdalam, dan menyebarkan open source."/>
        <meta property="og:url" content="https://fostiums.org/" />
        <meta property="og:image" content="./source/images/logo-fosti.webp"/>
        <meta property="og:image:alt" content="Logo Fosti UMS"/>
        <meta property="og:type" content="website" />
        <meta property="webcrawlers" content="all"/>
        <meta property="spiders" content="all"/>
        <meta property="robots" content="all"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
