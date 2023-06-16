import React from 'react'
import { createRoot } from 'react-dom/client'
// import { getSearchRequest } from './utilities.js'

import O_RecomendationsBlock from '../components/O_RecomendationsBlock/O_RecomendationsBlock.jsx'

document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.querySelector('.S_RecomendationsBlock'))
  root.render(<O_RecomendationsBlock />)
})
