// stackbit.config.ts (overwrite entirely, no leading stray characters)
import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        {
          name: "Page",
          type: "page",
          filePath: "content/{slug}.md",
          urlPath: "/{slug}",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "content", type: "markdown" }
          ]
        },
        {
          name: "BlogPost",
          type: "blog.post",
          filePath: "content/blog/{slug}.md",
          urlPath: "/blog/{slug}",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "date", type: "datetime", required: true },
            { name: "content", type: "markdown" }
          ]
        },
        {
          name: "Rental",
          type: "rentals.rental",
          filePath: "content/rentals.md",
          urlPath: "/rentals",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "content", type: "markdown" }
          ]
        },
        {
          name: "Event",
          type: "events.event",
          filePath: "content/events.md",
          urlPath: "/events",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "content", type: "markdown" }
          ]
        }
      ]
    })
  ]
});


