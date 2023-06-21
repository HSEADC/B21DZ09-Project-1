import React from 'react'
import { createRoot } from 'react-dom/client'
import { getSearchRequest } from './utilities.js'

import O_SearchBar from '../components/O_SearchBar/O_SearchBar.jsx'

const white = document.querySelector('.W_Search').classList.contains('white')

const searchbars = document.querySelectorAll('.W_Search')

for (var i = 0; i < searchbars.length; i++) {
  const root = createRoot(searchbars[i])
  root.render(<O_SearchBar white={white} />)
}
