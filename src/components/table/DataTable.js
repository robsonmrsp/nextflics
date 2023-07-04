import React, { useState } from "react";
import TablePagination from "@/components/table/components/Pagination";
import TableCounter from "@/components/table/components/Counter";
import SortedLabel from "@/components/table/components/SortedLabel";

const DataTable = ({
  pager = {},
  onChangePager,
  pagerRequest,
  fetching,
  columnDefinition,
}) => {
  const [pagerState, setPagerState] = useState(pagerRequest);

  const { items } = pager;
  return (
    <div>
      <div className="container w-full p-4 my-4 bg-white rounded">
        <div className="overflow-x-auto ">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg grid grid-cols-1 divide-y ">
            <div className="grid grid-cols-2  bg-white p-1 rounded pb-2 text-gray-900">
              <div className="justify-items-start">
                <TableCounter
                  initialPageSize={pager.pageSize}
                  onChangeCounter={(newPageSize) =>
                    onChangePager({ ...pagerRequest, pageSize: newPageSize })
                  }
                />
              </div>
              <div className="grid justify-items-end">
                <div className=" maxw-fit">
                  <label className=" text-sm">
                    Pesquisa:
                    <input
                      type="text"
                      placeholder="Digite aqui sua pesquisa"
                      className="input sm:w-64 md:w-80 lg:w-96 input-sm input-bordered input- mx-w-fit"
                    />
                  </label>
                </div>
              </div>
            </div>

            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700   uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-800 ">
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm  text-left text-gray-800 uppercase bg-white border-b border-gray-200 "
                  >
                    <SortedLabel
                      columnDefinitionItem={{
                        name: "id",
                        label: "ID",
                        type: "number",
                      }}
                      order={pagerRequest.order}
                      orderBy={pagerRequest.orderBy}
                      onchangeOrder={({ order, orderBy }) =>
                        onChangePager({ ...pagerRequest, order, orderBy })
                      }
                    />
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm  text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    <SortedLabel
                      columnDefinitionItem={{
                        name: "title",
                        label: "Título",
                        type: "String",
                      }}
                      order={pagerRequest.order}
                      orderBy={pagerRequest.orderBy}
                      onchangeOrder={({ order, orderBy }) =>
                        onChangePager({ ...pagerRequest, order, orderBy })
                      }
                    />
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm  text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    <span className="flex flex-1">
                      <span className="justify-items-start">status </span>
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {items?.map((item) => (
                  <tr key={item.id}>
                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <div className="flex items-center">
                        <div className="flex-shrink-0"></div>
                        <div className="">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {item.id}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {item.title}
                      </p>
                    </td>
                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 bg-green-200 rounded-full opacity-50"
                        ></span>
                        <span className="relative"> fancy cmponent here</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="grid grid-cols-2 gap-4 bg-white p-1 rounded pb-2 text-gray-900">
              <div className="justify-items-start top-10 ">
                <div className="pt-2">
                  {fetching
                    ? "Consultando..."
                    : `Mostrando Registros ${
                        (pager.actualPage - 1) * pager.pageSize + 1
                      } ao ${pager.actualPage * pager.pageSize} de ${
                        pager.totalRecords
                      }`}
                </div>
              </div>
              <div className="grid justify-items-end">
                <TablePagination
                  actualPage={pager.actualPage}
                  pageSize={pager.pageSize}
                  totalRecords={pager.totalRecords}
                  totalPages={pager.totalRecords}
                  onChangePageNumber={(newPage) =>
                    onChangePager({ ...pagerRequest, page: newPage })
                  }
                />
              </div>
            </div>

            <div className="flex items-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DataTable;
