import React from 'react'
import { createRoot } from 'react-dom/client'

import O_SearchBar from '../components/O_SearchBar/O_SearchBar.jsx'

// getPostTeasers().then((data) => {
//   const root = createRoot(document.querySelector('.W_Search'))
//   root.render(<O_SearchBar postTeasers={postTeasers} />)
// })

const root = createRoot(document.querySelector('.W_Search'))
root.render(<O_SearchBar />)
