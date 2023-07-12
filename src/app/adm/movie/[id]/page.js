import React from "react";
import FormMovie from "@/components/forms/FormMovie";
import { dehydrate } from "@tanstack/query-core";
import getQueryClient from "@/contexts/react-query/getQueryClient";
import HydrateClient from "@/contexts/react-query/HydrateClient";

const getMovie = async (id) => {
  const headers = { Authorization: "Basic anNldHVwOjEyMzQ1Ng==" };
  const res = await fetch("http://localhost:8081/rs/crud/movies/" + id, {
    headers,
  });
  const movie = await res.json();
  return movie;
};

const MoviePage = async ({ params }) => {
  const { id } = params;

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["hydrate-movie-id"], async () =>
    getMovie(id)
  );
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrateClient state={dehydratedState}>
      <FormMovie movieId={id} />;
    </HydrateClient>
  );
};

export default MoviePage;



