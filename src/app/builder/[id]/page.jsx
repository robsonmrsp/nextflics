
import React from 'react'
import Grid from '@/components/grid/grid';

import { dehydrate } from "@tanstack/query-core";
import getQueryClient from "@/contexts/react-query/getQueryClient";
import HydrateClient from "@/contexts/react-query/HydrateClient";


const getApplication = async (id) => {
    const headers = { 'Authorization': 'Basic anNldHVwOjEyMzQ1Ng==' };
    const res = await fetch("http://localhost:8081/rs/crud/movies" + id, { headers });
    const application = (await res.json());
    return application;
}

export default async function Builder({ params }) {
    const { id } = params

    const queryClient = getQueryClient();
    await queryClient.prefetchQuery(["hydrate-application-id"], async () => getApplication(id));
    const dehydratedState = dehydrate(queryClient);

    return (
        <HydrateClient state={dehydratedState}>
            <div style={{ height: '100%' }}><Grid idApplication={id} /></div>
        </HydrateClient>
    )
}

// para o context menu
//https://www.youtube.com/watch?v=ANsUXb9zepk