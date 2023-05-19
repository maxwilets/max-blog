/* global __DEV__ */
import { ApolloProvider } from "@apollo/client";
import NProgress from "nprogress";
import Router, { useRouter } from "next/router";
import Page from "../components/Page";
import "../components/styles/nprogress.css";
import apolloClient from "../lib/withData";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <ApolloProvider client={apolloClient}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  console.log(pageProps);
  if (Component.getInitialProps) {
    console.log(`Paging all props ${pageProps}`);
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

export default MyApp;
