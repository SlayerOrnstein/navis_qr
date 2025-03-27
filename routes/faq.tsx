import { CSS, render } from "@deno/gfm";

export default function FAQ() {
  const faq = Deno.readTextFileSync("./static/faq.md");
  const document = render(faq);

  return (
    <>
      <head>
        <style>
          {`a {color: rgb(228 225 233)} a:hover {color: rgb(195 197 221)} ${CSS}`}
        </style>
      </head>
      <div
        class="pt-16 px-96 markdown-body"
        data-color-mode="dark"
        data-dark-theme="dark"
        // deno-lint-ignore react-no-danger
        dangerouslySetInnerHTML={{ __html: document }}
      />
    </>
  );
}
