import React from 'react'
import { createRoot } from 'react-dom/client'

import O_SearchBar from '../components/O_SearchBar/O_SearchBar.jsx'

const root = createRoot(document.querySelector('.W_Search'))
root.render(<O_SearchBar />)
