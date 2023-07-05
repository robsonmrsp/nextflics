"use client";
import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import BasicPanel from "@/components/panels/basic/BasicPanel";
import DataTable from "@/components/table/DataTable";

// TODO separar isso e levar para um serviçõ a parte
// TODO podemos iniciar com tipos nesses componentes e ver no que dá, mas antes temos que fazer funcionar sem o typescripto!
const getPagerMovies = async (pagerRequest) => {
  const { page = 1, pageSize = 5, order, orderBy } = pagerRequest;
  let url = "http://localhost:8081/rs/crud/movies";
  if (page) {
    url = url + `/?page=${page}`;
  }
  if (pageSize) {
    url = url + `&pageSize=${pageSize}`;
  }
  if (order) {
    url = url + `&direction=${order}`; //TODO corrigir os nomes de campos de sort
  }
  if (orderBy) {
    url = url + `&orderBy=${orderBy}`;
  }
  const headers = { Authorization: "Basic anNldHVwOjEyMzQ1Ng==" };
  const res = await fetch(url, { headers });
  const pager = await res.json();
  return pager;
};

const ListMovies = () => {
  const [pagerRequest, setPagerRequest] = useState({});

  const {
    data: pager,
    isLoading,
    isFetching,
    error,
  } = useQuery({
    queryKey: ["movies", pagerRequest],
    queryFn: () => getPagerMovies(pagerRequest),
    keepPreviousData: true,
    staleTime: 5000,
  });

  const columns = [
    { name: "id", type: "number" },
    { name: "title", label: "Título", type: "string" },
    {
      name: "budget",
      label: "Orçamento",
      type: "number",
      formatter: (number) => `R$ ${number},00`,
    },
    // { name: "homepage", type: "string" },
    { name: "overview", label: "Sinópse", type: "string" },
    // { name: "popularity", label: "Popularidade", type: "number" },
    { name: "releaseDate", label: "Lançamento", type: "string" },
    {
      name: "revenue",
      label: "Receita",
      type: "number",
      formatter: (number) => `R$ ${number},00`,
    },
  ];

  return (
    <BasicPanel panelName={"List of Movies"}>
      <DataTable
        onChangePager={(newPagerRequest) => setPagerRequest(newPagerRequest)}
        pager={pager}
        pagerRequest={pagerRequest}
        fetching={isFetching}
        columns={columns}
      />
    </BasicPanel>
  );
};

export default ListMovies;
