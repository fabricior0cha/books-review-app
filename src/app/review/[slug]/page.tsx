import data from "@/data/reviews.json";
import Review from "./components/review";

export async function generateStaticParams() {
  return data?.reviews?.map((rev) => ({
    slug: rev.url,
  }));
}

export default function Page({ params }: { params: any }) {
  const { slug } = params;
  return <Review slug={slug} />;
}
