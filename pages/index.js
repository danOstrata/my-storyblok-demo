import { useStoryblokState, getStoryblokApi, StoryblokComponent } from "@storyblok/react";
import Head from "next/head";
import Layout from "../components/Layout";

export default function Home({ story }) {
  story = useStoryblokState(story);

  return (
    <>
      <Head>
        <title>Test Space</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <StoryblokComponent blok={story.content} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  let slug = "home";

  // load the draft version
  let sbParams = {
    version: "draft", // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      slug,
    },
    revalidate: 3600, // revalidate every hour
  };
}
