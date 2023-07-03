"use client";
import React from 'react'
import { useQuery } from "@tanstack/react-query";
import TableApplication from '@/components/PageSessions/TableApplication';
import BasicPanel from '@/components/panels/basic/BasicPanel'

const getApplications = async () => {
  const headers = { 'Authorization': 'Basic anNldHVwOjEyMzQ1Ng==' };
  const res = await fetch("http://localhost:8081/rs/crud/movies", { headers });
  const applications = (await res.json());
  return applications;
}

const ListApplications = () => {
  const { data: applications, isLoading, isFetching, error } = useQuery({
    queryKey: ["applications"],
    queryFn: () => getApplications(),
  });

  return (
    <BasicPanel panelName={'List de aplicações'}>
      <TableApplication applications={applications}></TableApplication>
    </BasicPanel>
  )
}

export default ListApplications