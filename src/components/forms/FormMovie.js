"use client";
import React from "react";
import { Formik, Form, Field } from "formik";

import BasicPanel from "@/components/panels/basic/BasicPanel";

export default function FormMovie() {
  return (
    <>
      <BasicPanel panelName={"Cadastro de Movie"}>
        Hello worlds
        {/*        <Formik
          initialValues={{
            id: "",
            title: "",
            budget: "",
            homepage: "",
            overview: "",
            popularity: "",
            releaseDate: "",
            revenue: "",
          }}
          onSubmit={(values, actions) => {
            // actions.setSubmitting
            // actions.resetForm
            console.log(actions);
          }}
        >
          {({ values, errors, isSubmitting }) => (
            <Form>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                General Information
              </h6>
              <div>
                <label
                  htmlFor="hs-validation-name-error"
                  className="block text-sm font-medium mb-2 dark:text-white"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="hs-validation-name-error"
                    name="hs-validation-name-error"
                    className="py-3 px-4 block w-full border-red-500 rounded-md text-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                    required
                    aria-describedby="hs-validation-name-error-helper"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                    <svg
                      className="h-5 w-5 text-red-500"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg>
                  </div>
                </div>
                <p
                  className="text-sm text-red-600 mt-2"
                  id="hs-validation-name-error-helper"
                >
                  Please enter a valid email address.
                </p>
              </div>

              <div>
                <label
                  htmlFor="hs-validation-name-success"
                  className="block text-sm font-medium mb-2 dark:text-white"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="hs-validation-name-success"
                    name="hs-validation-name-success"
                    className="py-3 px-4 block w-full border-green-500 rounded-md text-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                    required
                    aria-describedby="hs-validation-name-success-helper"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                    <svg
                      className="h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                    </svg>
                  </div>
                </div>
                <p
                  className="text-sm text-green-600 mt-2"
                  id="hs-validation-name-success-helper"
                >
                  Looks good!
                </p>
              </div>
              <div>
                <label
                  htmlFor="hs-validation-name-error"
                  className="block text-sm font-medium mb-2 dark:text-white"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="hs-validation-name-error"
                    name="hs-validation-name-error"
                    className="py-3 px-4 block w-full border-red-500 rounded-md text-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                    required
                    aria-describedby="hs-validation-name-error-helper"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                    <svg
                      className="h-5 w-5 text-red-500"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg>
                  </div>
                </div>
                <p
                  className="text-sm text-red-600 mt-2"
                  id="hs-validation-name-error-helper"
                >
                  Please enter a valid email address.
                </p>
              </div>

              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="title"
                    >
                      Título
                    </label>
                    <Field
                      id="title"
                      name="title"
                      placeholder="Movie title"
                      className="input input-bordered input-secondary w-full max-w-xs"
                    />
                  </div>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />
              <div className="flex space justify-start py-8 col-span-6">
                <div className="pr-2">
                  <button className="btn btn-outline btn-primary">Save</button>
                </div>
                <div className="pl-2">
                  <button className="btn btn-outline btn-secondary">
                    Save and go back to list
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik> */}
      </BasicPanel>
    </>
  );
}
