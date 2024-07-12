import type { Collection } from "tinacms";

const Page: Collection = {
  label: "Pages",
  name: "page",
  path: "content/pages",
  ui: {
    router: ({ document }) => {
      if (document._sys.filename === "home") {
        return `/`;
      }
      if (document._sys.filename === "about") {
        return `/about`;
      }
      return undefined;
    },
  },
  fields: [
    {
      type: "string",
      label: "categories",
      name: "categories",
      description:
        "xxx",
    },  
    {
      type: "string",
      label: "author",
      name: "author",
      description:
        "xxx",
    },
    {
      type: "string",
      label: "date",
      name: "date",
      description:
        "xxx",
    },
    {
      type: "string",
      label: "Title",
      name: "title",
      description:
        "The title of the page. This is used to display the title in the CMS",
      isTitle: true,
      required: true,
    }
  ],
};

export default Page;
