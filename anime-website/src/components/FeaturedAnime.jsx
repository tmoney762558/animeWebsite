import React from 'react'

const FeaturedAnime = ({titleEnglish, titleJapanese, image}) => {
  return (
    <div className='flex justify-center w-full'>
        <img className='w-full' src={image}></img>
    </div>
  )
}

export default FeaturedAnime