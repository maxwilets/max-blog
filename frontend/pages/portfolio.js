import { Head } from 'next/document';
import Portfolio from '../components/Portfolio';

export default function portfolio() {
  return (
    <>
      {/* <Head>
        <title>Max Wilets | Web Developer Portfolio</title>
        <meta
          name="description"
          content="Max Wilets's portfolio check out my resume and skills as well as recent coursework"
          key="desc"
        />
      </Head> */}
      <Portfolio />;
    </>
  );
}
