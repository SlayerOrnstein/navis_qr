import { type PageProps } from "$fresh/server.ts";
import TopBar from "../components/TopBar.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Cephalon Navis QR Generator</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="bg-color-surface h-screen">
        <TopBar></TopBar>
        <Component />
      </body>
    </html>
  );
}
