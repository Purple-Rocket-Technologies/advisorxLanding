import { buildConfig } from "payload/config";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import path from "path";

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000",
  admin: {
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || "mongodb://localhost/advisorx",
  }),
  collections: [
    // Blog Posts collection
    {
      slug: "posts",
      admin: {
        defaultColumns: [
          "title",
          "author",
          "category",
          "publishedDate",
          "status",
        ],
        useAsTitle: "title",
      },
      access: {
        read: () => true,
      },
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "author",
          type: "relationship",
          relationTo: "users",
          required: true,
        },
        {
          name: "publishedDate",
          type: "date",
          required: true,
        },
        {
          name: "category",
          type: "select",
          options: [
            { label: "Marketing", value: "marketing" },
            { label: "Technology", value: "technology" },
            { label: "Business Growth", value: "business-growth" },
            { label: "Client Relations", value: "client-relations" },
          ],
          required: true,
        },
        {
          name: "status",
          type: "select",
          options: [
            { label: "Draft", value: "draft" },
            { label: "Published", value: "published" },
          ],
          defaultValue: "draft",
          required: true,
        },
        {
          name: "excerpt",
          type: "textarea",
          required: true,
        },
        {
          name: "coverImage",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "content",
          type: "richText",
          required: true,
        },
        {
          name: "slug",
          type: "text",
          required: true,
          unique: true,
          admin: {
            position: "sidebar",
          },
        },
      ],
    },
    // Media collection for images
    {
      slug: "media",
      upload: {
        staticURL: "/media",
        staticDir: "public/media",
        imageSizes: [
          {
            name: "thumbnail",
            width: 400,
            height: 300,
            position: "centre",
          },
          {
            name: "card",
            width: 768,
            height: 1024,
            position: "centre",
          },
          {
            name: "hero",
            width: 1920,
            height: 1080,
            position: "centre",
          },
        ],
        mimeTypes: ["image/*"],
      },
    },
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
});
