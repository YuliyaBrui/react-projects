import React from 'react'
import '../../assets/styles/not-found.css'

export const NotFound = () => (
  <div className="page-404">
    <div className="container-error">
      <h2>Ooops...</h2>
      <p>Sorry, we can`t find that page</p>
    </div>
    <img src="../../assets/images/404.png" alt="404" />
  </div>
)
