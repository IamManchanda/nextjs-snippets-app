import Head from "next/head";
import SnippetForm from "../components/SnippetForm";

export default function PageNew() {
  return (
    <div>
      <Head>
        <title>Create Snippet | Next.js Snippets App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-lg mx-auto">
        <h1 className="text-red-100 text-2xl mb-4">New Snippet</h1>
        <SnippetForm />
      </main>
    </div>
  );
}
