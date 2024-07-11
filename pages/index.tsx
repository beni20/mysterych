import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";


export default function Index({ allPosts: { edges }, preview }) {


  return (
    <Layout preview={preview}>
      <Head>
        <title>{`Next.js Blog Example with xx`}</title>
      </Head>
      <Container>
        <Intro />
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};
