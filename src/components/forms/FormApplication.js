"use client"
import React from 'react'
import { Formik, Form, Field } from 'formik';

import BasicPanel from '@/components/panels/basic/BasicPanel'

export default function FormApplication() {
  return (
    <>
      <BasicPanel panelName={"Cadastro de aplicação"}>
        <Formik
          initialValues={{
            "name": "vendemais",
            "view": "REACT16",
            "skin": "mui",
            "description": "teste",
            "rootPackage": "br.com.vendemais",
            "corePackage": "br.com.vendemais.core",
            "useAudit": true,
            "useDocRestApi": false,
            "multitenancy": true,
            "generateTest": true,
            "asModule": false,
            "criteriaType": "JPA",
            "configurationType": "JAVA",
            "applicationType": "MVC",
          }}
          onSubmit={(values, actions) => {
            // actions.setSubmitting
            // actions.resetForm
            console.log(values)
            console.log(actions)
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
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <Field id="name" name="name" placeholder="app name" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="description"
                    >
                      Description
                    </label>
                    <Field id="description" as={"textarea"} name="description" placeholder="app name" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>

                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="corePackage"
                    >
                      Core Package
                    </label>
                    <Field id="corePackage" name="corePackage" placeholder="app name" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />

                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Root Package
                    </label>
                    <Field id="rootPackage" name="rootPackage" placeholder="com.c3pgen" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />

              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Generation Options
              </h6>
              <div className="flex w-full  px-4">
                <div className="relative w-full mb-3">
                  <label className="inline-flex items-center cursor-pointer">
                    <Field type="checkbox" name="multitenancy" value={false} className="form-checkbox border-0 rounded text-blueGray-700 mr-2 w-5 h-5 ease-linear transition-all duration-150" />
                    <span className="block uppercase text-blueGray-600 text-xs font-bold mb-0">
                      Multitenancy
                    </span>
                  </label>
                </div>
                <div className="relative w-full mb-3">
                  <label className="inline-flex items-center cursor-pointer">
                    <Field type="checkbox" name="useDocRestApi" className="form-checkbox border-0 rounded text-blueGray-700 mr-2 w-5 h-5 ease-linear transition-all duration-150" />
                    <span className="block uppercase text-blueGray-600 text-xs font-bold mb-0">
                      Generate Docs
                    </span>
                  </label>
                </div>
                <div className="relative w-full mb-3">
                  <label className="inline-flex items-center cursor-pointer">
                    <Field type="checkbox" name="generateTest" className="form-checkbox border-0 rounded text-blueGray-700 mr-2 w-5 h-5 ease-linear transition-all duration-150" />
                    <span className="block uppercase text-blueGray-600 text-xs font-bold mb-0">
                      Generate Tests
                    </span>
                  </label>
                </div>
                <div className="relative w-full mb-3">
                  <label className="inline-flex items-center cursor-pointer">
                    <Field type="checkbox" name="useAudit" className="form-checkbox border-0 rounded text-blueGray-700 mr-2 w-5 h-5 ease-linear transition-all duration-150" />
                    <span className="block uppercase text-blueGray-600 text-xs font-bold mb-0">
                      Use Audit
                    </span>
                  </label>
                </div>
              </div>
              <hr className="mt-6 border-b-1 border-blueGray-300" />
              <div className="flex space justify-start py-8 col-span-6">
                <div className="pr-2">
                  <button
                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Salvar
                  </button>
                </div>
                <div className="pl-2">
                  <button
                    className="bg-blueGray-300 text-black active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Save and build
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
