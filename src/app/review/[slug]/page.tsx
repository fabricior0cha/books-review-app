import data from "@/data/reviews.json";
import Review from "./components/review";

export async function generateStaticParams() {
  return data?.reviews?.map((rev) => ({
    slug: rev.slug,
  }));
}

export default function Page({ params }: { params: any }) {
  const { slug } = params;
  return <Review slug={slug} />;
}
