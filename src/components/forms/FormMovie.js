"use client";
import React from "react";
import { Formik, Form, Field } from "formik";

import BasicPanel from "@/components/panels/basic/BasicPanel";

export default function FormMovie() {
  return (
    <>
      <BasicPanel panelName={"Cadastro de Movie"}>
        <Formik
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
              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />

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
        </Formik>
      </BasicPanel>
    </>
  );
}
