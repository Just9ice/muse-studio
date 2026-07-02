import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Muse Studio | Finishes & Design Partner",
  description: "Muse Studio | Finishes & Design Partner",
  icons: {
    icon: "/muse-favicon.png",
    shortcut: "/muse-favicon.png",
    apple: "/muse-favicon.png",
  },
};

// In Next.js 15, searchParams is a Promise and must be awaited.
export default async function DocumentPreviewPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const file = typeof params.file === "string" ? params.file : null;

  if (!file) {
    return notFound();
  }

  return (
    <iframe
      src={file}
      className="fixed inset-0 w-full h-full border-none bg-stone-900"
      title="Muse Studio Document"
    />
  );
}
