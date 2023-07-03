import React, { useState } from "react";
import {
  AiOutlineSortDescending,
  AiOutlineSortAscending,
} from "react-icons/ai";
import {
  FcNumericalSorting12,
  FcNumericalSorting21,
  FcAlphabeticalSortingAz,
  FcAlphabeticalSortingZa,
} from "react-icons/fc";

function SortedLabel({
  children,
  columnDefinitionItem,
  order,
  orderBy,
  onchangeOrder,
}) {
  const [direction, setDirection] = useState(order);
  const toggle = () => {
    if (!direction) {
      setDirection("asc");
      onchangeOrder({ order: "asc", orderBy: columnDefinitionItem.name });
    } else if (direction === "asc") {
      setDirection("desc");
      onchangeOrder({ order: "desc", orderBy: columnDefinitionItem.name });
    } else if (direction === "desc") {
      setDirection("");
      onchangeOrder({ order: "", orderBy: "" });
    }
  };
  return (
    <div>
      <span className="flex flex-1">
        <span
          className="justify-items-start px-1 cursor-pointer"
          onClick={() => toggle()}
        >
          {columnDefinitionItem.label || columnDefinitionItem.name}
        </span>

        {orderBy === columnDefinitionItem.name && (
          <div className="justify-items-stretch relative pt-0.5 pl-1 text-coolGray-400 cursor-pointer">
            {direction === "asc" ? (
              columnDefinitionItem.type === "number" ? (
                <FcNumericalSorting12 size={18} />
              ) : (
                <FcAlphabeticalSortingAz size={18} />
              )
            ) : columnDefinitionItem.type === "number" ? (
              <FcNumericalSorting21 size={18} />
            ) : (
              <FcAlphabeticalSortingZa size={18} />
            )}
          </div>
        )}
      </span>
    </div>
  );
}

export default SortedLabel;
