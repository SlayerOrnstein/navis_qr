import { CSS, render } from "@deno/gfm";

export default async function FAQ() {
  const faq = import.meta.dirname + "/static/faq.md";
  const file = await Deno.readTextFile(faq.replace("/routes", ""));
  const document = render(file);

  return (
    <>
      <head>
        <style>
          {CSS}
        </style>
        <link rel="stylesheet" href="/markdown.css" />
      </head>
      <div class="bg-color-surface min-h-screen">
        <div
          class="py-8 px-96 markdown-body "
          data-color-mode="dark"
          data-dark-theme="dark"
          // deno-lint-ignore react-no-danger
          dangerouslySetInnerHTML={{ __html: document }}
        />
      </div>
    </>
  );
}
