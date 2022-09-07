import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
     <Head>
        <title>Create Next App</title>
        <meta name="description" content="Blendibox" />
        <link rel="icon" href="/favicon.ico" />
        <link href="./output.css" rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}