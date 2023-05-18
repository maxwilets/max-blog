/* global __DEV__ */
import { getDataFromTree } from "@apollo/client/react/ssr";
import Document from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // console.log(`hereis itall ${ctx.renderPage}`);
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      await getDataFromTree(<ctx.AppTree {...ctx.appProps} />);
      const initialProps = await Document.getServerSideProps(ctx);
      console.log(`this is inii ${initialProps.styles}`);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
