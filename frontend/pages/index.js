import { Head } from 'next/document';
import RoateWords from '../components/RoateWords';
import Services from '../components/Services';

export default function IndexPage() {
  return (
    <>
      {/* <Head>
        <title>Max Wilets | Web Developer</title>
        <meta
          name="description"
          content="Max Wilets's portfolio home check out marketing and web services available"
          key="desc"
        />
      </Head> */}
      <h1>
        <RoateWords />
      </h1>
      <p>
        Welcome to my portfolio website! I am a [Your Profession] with a passion
        for [Your Passion or Specialization]. Throughout my career, I have had
        the opportunity to work on a diverse range of projects and collaborate
        with some amazing people. This website showcases some of my best work
        and highlights my skills and experience. Whether you're an employer, a
        potential client, or just curious about my work, I invite you to take a
        look around and learn more about me and what I have to offer.
      </p>
      <Services />
    </>
  );
}
