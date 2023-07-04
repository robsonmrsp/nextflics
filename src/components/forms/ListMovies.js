"use client";
import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import TableApplication from "@/components/PageSessions/TableApplication";
import BasicPanel from "@/components/panels/basic/BasicPanel";

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
  console.log("pagerRequest: ", pagerRequest);
  console.log("url: ", url);
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

  return (
    <BasicPanel panelName={"List de aplicações"}>
      <TableApplication
        onChangePager={(newPagerRequest) => setPagerRequest(newPagerRequest)}
        pager={pager}
        pagerRequest={pagerRequest}
        fetching={isFetching}
      ></TableApplication>
    </BasicPanel>
  );
};

export default ListMovies;
