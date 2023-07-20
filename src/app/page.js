import { redirect } from "next/navigation";

// we can control de access in this page
export default async function Home({ params }) {
  redirect("/adm/movie/list");
}
