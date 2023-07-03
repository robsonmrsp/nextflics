import ListUsers from "./ListUsers";
import { dehydrate } from "@tanstack/query-core";
import getQueryClient from "@/contexts/react-query/getQueryClient";
import HydrateClient from "@/contexts/react-query/HydrateClient";

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = (await res.json());
  return users;
}

export default async function Hydation() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["hydrate-users"], getUsers);
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrateClient state={dehydratedState}>
      <ListUsers />
    </HydrateClient>
  );
}
