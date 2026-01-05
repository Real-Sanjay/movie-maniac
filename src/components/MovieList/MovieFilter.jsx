import React from 'react'

const MovieFilter = ({handleFilter, filterRate, ratingRange}) => {
   function handleFilterClick(rating) {
        handleFilter(rating);
    }
  return (
          <ul className=" align_items movie_list_sorting">
            {
                ratingRange.map((rate) => {
                    return <li key={rate} className={filterRate === rate ? 'movie_list_sort_item active' : 'movie_list_sort_item' } onClick={() => handleFilterClick(rate)}>{`${rate} + star`}</li>
                })
            }
          </ul>
         
  )
}

export default MovieFilter