import React from 'react';
import { FilterWrap } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'Redux/filter';

const Filter = () => {
  const dispatch = useDispatch();
  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
  }
  const changeFilterValue =(e) =>{
    handleFilterChange(e.currentTarget.value)
  }

  return (
    <FilterWrap>
    Find contacts by name
    <input type="text" onChange={changeFilterValue} size="20" />
  </FilterWrap>
  )

  };
  export default Filter;
