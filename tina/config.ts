import { defineConfig } from "tinacms";

import Post from "./collection/post";
import Author from "./collection/author";
import Page from "./collection/page";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || 'f922fcca-f1c4-42a7-93d5-dcaabdeaf740',
  // Get this from tina.io
  token: process.env.TINA_TOKEN || 'b37e49eaaa2bb97fe7e49a43b1c9bfc52910f386',

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [Post, Author, Page],
  },
});
