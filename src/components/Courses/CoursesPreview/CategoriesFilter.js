import React,{useState} from "react";
import {
  FilterCategories,
  FilterCategoriesContainer,
  FilterBtn,
} from "./CoursesPreviewElements";

const CategoriesFilter = ({ categories, filterCategories }) => {
  const [value, setValue] = useState("all")
  return (
    <FilterCategories>
      <FilterCategoriesContainer>
        {categories.map((data, index) => {
          return (
            <FilterBtn className={`${data===value && 'active-btn'}`}
              key={index}
              onClick={() => {
                filterCategories(data);
                setValue(data)
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
