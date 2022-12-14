import tailwindcss from '!raw-loader!../styles/tailwind.min.css';
import outputcss from  '!raw-loader!../styles/output.css';

import { Html, Head, Main, NextScript } from 'next/document'

const cssFile = process.env.NODE_ENV === 'production' ? outputcss : tailwindcss;


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)


    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            dangerouslySetInnerHTML={{
              __html: cssFile
            }}
          />
        </>
      )
    };
  }

  render() {
    return (
      <Html lang="en">
       <Head>
        <meta name="description" content="Blendibox" />
        <link rel="icon" href="/favicon.ico" />
        <link href="../styles/tailwind.min.css" rel="stylesheet"/>
      </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

