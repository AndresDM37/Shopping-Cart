import { useState, useId } from "react";
import { useFilters } from "../hooks/useFilters";
import "./Filters.css";
 
export function Filters() {
  const { filters, setFilters } = useFilters()
   
  const minPriceFilterId = useId()
  const caregoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
        ...prevState,
        minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
        ...prevState,
        category: event.target.value
    }))
  }
   

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Price starting at: </label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="2499"
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
          />
          <span>${filters. minPrice}</span>
      </div>

      <div>
        <label htmlFor={caregoryFilterId}>Category</label>
        <select id={caregoryFilterId} onChange={handleChangeCategory}>
          <option value="all">All</option>
          <option value="furniture">Furniture</option>
          <option value="groceries">Groceries</option>
          <option value="beauty">Beauty</option>
        </select>
      </div>
    </section>
  );
}
