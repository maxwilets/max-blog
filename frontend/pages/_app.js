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

export default MyApp;
