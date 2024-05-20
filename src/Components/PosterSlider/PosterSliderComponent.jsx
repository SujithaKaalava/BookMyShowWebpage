import React from 'react'
import Slider from 'react-slick'
import PosterComponent from '../Poster/PosterComponent'
const PosterSliderComponent = (props) => {
  const {title,subtitle,posters,isDark}=props
  const settings=[]

  return (
    <>
    <div className='flex flex-col items-start sm:ml-3 my-2'>
      <h3 className={`text-2xl font-bold ${isDark ? 'text-white':'text-black'}` }>
      {title}
      </h3>
      <p className={`text-sm font-bold ${isDark ? 'text-white':'text-gray-800'}` }>{subtitle}</p>
    </div>
    <Slider {...settings}>
        {posters.map((each) =>
            <PosterComponent {...each} isDark={isDark}/>
        )}
    </Slider>
    </>
  )
}

export default PosterSliderComponent
