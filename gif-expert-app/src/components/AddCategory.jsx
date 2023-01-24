import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] =  useState('')

  const handleChange = ({ target }) => {
    setInputValue(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim().length <= 1) return;
    // setCategories(categories => [inputValue, ...categories])
    // setInputValue('');
    setInputValue('');
    onNewCategory(inputValue.trim());
  }

  return(
    <form onSubmit={onSubmit}>
      <input 
        type="text"
        placeholder="Search for gifs"
        value= { inputValue }
        onChange= { handleChange }
      />
    </form>
  )
}