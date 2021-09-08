import React from "react";
import {
  FilterCategories,
  FilterCategoriesContainer,
  FilterBtn,
} from "./CoursesPreviewElements";

const CategoriesFilter = ({ categories, filterCategories }) => {
  return (
    <FilterCategories>
      <FilterCategoriesContainer>
        {categories.map((data, index) => {
          return (
            <FilterBtn
              key={index}
              onClick={() => {
                filterCategories(data);
              }}
            >
              {data}
            </FilterBtn>
          );
        })}
      </FilterCategoriesContainer>
    </FilterCategories>
  );
};

export default CategoriesFilter;
