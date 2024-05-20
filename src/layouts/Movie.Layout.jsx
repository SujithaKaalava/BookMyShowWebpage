//rafce  -->install react before

import React from 'react'
import MovieNavbarComponent from '../Components/Navbar/MovieNavbar.Component';

const MovieLayoutHoc = (Component) =>({...props})=>{
  return (
    <div>
    <MovieNavbarComponent/>
      <Component {...props}/>
      <div>Footer</div>
    </div>
  )
}

export default MovieLayoutHoc;
