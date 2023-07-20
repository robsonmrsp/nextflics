"use client";
import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { DateField } from "./DateField";
import { Switch } from "./Switch";

import { useQuery } from "@tanstack/react-query";
import BasicPanel from "@/components/panels/basic/BasicPanel";

const movieSchema = Yup.object().shape({
  title: Yup.string().required("Deve ser informado um título"),
  budget: Yup.string().required("Deve ser informado um orçamento"),
  overview: Yup.string().required("Required").min(3, "Too Short!"),
});

const getMovie = async (id) => {
  const headers = { Authorization: "Basic anNldHVwOjEyMzQ1Ng==" };
  const res = await fetch("http://localhost:8081/rs/crud/movies/" + id, {
    headers,
  });
  const movie = await res.json();
  return movie;
};
export default function FormMovie({ movieId }) {
  const {
    data: movie = {},
    isLoading,
    isFetching,
    error,
  } = useQuery({
    enabled: !!movieId,
    queryKey: ["hydrate-movie-id"],
    queryFn: () => getMovie(movieId),
  });

  return (
    <>
      <BasicPanel panelName={"Cadastro de Movie"}>
        <Formik
          enableReinitialize={true}
          initialValues={{
            id: movie.id,
            title: movie.title,
            budget: movie.budget,
            revenue: movie.revenue,
            overview: movie.overview,
            releaseDate: movie.releaseDate,
            rated: movie.rated,
          }}
          validationSchema={movieSchema}
          onSubmit={(values, actions) => {
            // actions.setSubmitting
            // actions.resetForm
            console.log(values);
            console.log(actions);
          }}
        >
          {({ values, errors, isSubmitting }) => (
            <Form>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                General Information
              </h6>

              <div className="py-2">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium mb-2 dark:text-white"
                >
                  Title
                </label>
                <Field
                  id="title"
                  name="title"
                  type="text"
                  placeholder="Movie title"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                />
                <ErrorMessage
                  component="p"
                  className="text-sm text-red-600 mt-2"
                  name="title"
                />
              </div>
              <div className="py-2">
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium mb-2 dark:text-white"
                >
                  Budget
                </label>
                <Field
                  id="budget"
                  name="budget"
                  type="text"
                  placeholder="Orçamento"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                />
                <ErrorMessage
                  component="p"
                  className="text-sm text-red-600 mt-2"
                  name="budget"
                />
              </div>
              <div className="py-2">
                <label
                  htmlFor="overview"
                  className="block text-sm font-medium mb-2 dark:text-white"
                >
                  Overview
                </label>
                <Field
                  id="overview"
                  name="overview"
                  as={"textarea"}
                  placeholder="Sinopse"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                />
                <ErrorMessage
                  component="p"
                  className="text-sm text-red-600 mt-2"
                  name="overview"
                />
              </div>
              <div className="py-2">
                <label
                  htmlFor="rated"
                  className="block text-sm font-medium mb-2 dark:text-white"
                >
                  Rated
                </label>
                <div className="flex items-center">
                  <label className="text-sm text-gray-500 mr-3 dark:text-gray-400">
                    Sim
                  </label>
                  <Switch
                    name="rated"
                    id="rated"
                    className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800   before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"
                  />
                  <label className="text-sm text-gray-500 ml-3 dark:text-gray-400">
                    Não
                  </label>
                </div>
              </div>
              <div className="py-2">
                <label
                  htmlFor="releaseDate"
                  className="block text-sm font-medium mb-2 dark:text-white"
                >
                  Release Date
                </label>
                <DateField
                  id="releaseDate"
                  name="releaseDate"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                />
                <ErrorMessage
                  component="p"
                  className="text-sm text-red-600 mt-2"
                  name="releaseDate"
                />
              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />
              <div className="flex space justify-start py-8 col-span-6">
                <div className="pr-2">
                  <button className="btn btn-outline btn-primary" type="submit">
                    Save
                  </button>
                </div>
                <div className="pl-2">
                  <button className="btn btn-outline btn-secondary">
                    Save and go back to list
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </BasicPanel>
    </>
  );
}
