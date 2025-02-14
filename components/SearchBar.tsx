"use client"

import React, { useState } from 'react'
import SearchManufacturer from './SearchManufacturer'
import { manufacturers } from '@/constants'

const SearchBar = () => {

  const [manufacturer, setManufacturer] = useState('');

  const handleSearch =() =>{}
  return (
     <form className='searchbar' onSubmit={handleSearch}>
      <div className="seachbar__item">
        <SearchManufacturer
        manufacturer={manufacturer}
        setManufacturer={setManufacturer}
        />
      </div>
     </form>
  )
}

export default SearchBar