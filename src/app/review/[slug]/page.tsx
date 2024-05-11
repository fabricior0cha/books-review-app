"use client";
import AboutActor from "@/components/about_actor";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
type Data = {
  title: string;
  author: string;
  created_at: Date;
  review: {
    paragraphs: string[];
  };
};

export default function Page() {
  const path = usePathname();

  const [data, setData] = useState<Data>({} as Data);

  useEffect(() => {
    if (path) {
      const slug = path.split("/").pop();
      fetch(`/data/${slug}.json`)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        });
    }
  }, [path]);

  return (
    <main className="flex flex-col items-center justify-center py-12 md:py-24 lg:py-32">
      <div className="container max-w-3xl px-4 md:px-6">
        <header className="mb-8 space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {data?.title ?? ""}
          </h1>
          <p className="text-md text-gray-700 tracking-tighter ">
            {data?.author ?? ""}
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Publicado em{" "}
            {new Date(data?.created_at ?? "").toLocaleDateString("pt-BR")}
          </p>
        </header>
        <div className="prose prose-gray max-w-none dark:prose-invert">
          {data?.review?.paragraphs?.map((paragraph, index) => (
            <p className="mb-4" key={index}>
              {paragraph}
            </p>
          ))}
          <AboutActor />
        </div>
      </div>
    </main>
  );
}
