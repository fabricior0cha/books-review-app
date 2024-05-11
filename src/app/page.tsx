"use client";
import { Card, CardContent } from "@/components/ui/card";
import data from "@/data/reviews.json";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <section className="w-full  py-6 md:py-12 lg:py-24 bg-gray-100 dark:bg-gray-800">
        <div className="container grid gap-6 px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Reviews
          </h1>
          <p className="text-md text-gray-700 tracking-tighter ">
            Gosto de ler e avaliar o que pude aprender, segue minhas anotações e
            insights em cada livro que li.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data?.reviews?.map((review) => (
              <Card
                className="h-full hover:border-gray-400 hover:cursor-pointer"
                key={review?.title}
                onClick={() => {
                  if (review?.url) router.push(review.url ?? "");
                }}
              >
                <img
                  alt="Book Cover"
                  className="aspect-[2/3] ovec:\Users\Fabricio\Downloads\book.icorflow-hidden rounded-t-xl object-cover w-full h-[450px] "
                  src={review?.imgUrl}
                />
                <CardContent className="space-y-2 p-4">
                  <h3 className="text-lg font-semibold">{review?.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {review?.author}
                  </p>
                  <p className="line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                    {review?.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
