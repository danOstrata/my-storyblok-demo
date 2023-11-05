import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Hero from "../components/Hero";
import ImageTextCard from "../components/ImageTextCard";
import Form from "../components/Form/Form";
import FormInputs from "../components/Form/FormInputs";
import Email from "../components/Form/validators/Email";
import Required from "../components/Form/validators/Required";
import MaxLength from "../components/Form/validators/MaxLength";
import MinLength from "../components/Form/validators/MinLength";
import Numeric from "../components/Form/validators/Numeric";
import ImageGrid from "../components/ImageGrid/ImageGrid";
import ImageGridColumn from "../components/ImageGrid/ImageGridColumn";
import ImageGridColumnReverse from "../components/ImageGrid/ImageGridColumnReverse";
import ColumnImage from "../components/ImageGrid/ColumnImage";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  hero: Hero,
  imageTextCard: ImageTextCard,
  Form: Form,
  "Form Inputs": FormInputs,
  Email: Email,
  Required: Required,
  "Maximum Length": MaxLength,
  "Minimum Length": MinLength,
  Numeric: Numeric,
  imageGrid: ImageGrid,
  imageGridColumn: ImageGridColumn,
  imageGridColumnReverse: ImageGridColumnReverse,
  image: ColumnImage,
};

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
  components,
  apiOptions: {
    region: "us",
  },
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
