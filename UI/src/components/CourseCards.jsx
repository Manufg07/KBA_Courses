import React from 'react'
import Cards from './Cards'
import courses from '../courses.json'

const CourseCards = () => {
  console.log(courses)
  return (
    <>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-10'>
    {
      courses.map((course) =>
           <Cards key={course.id} course ={course}/>
    )
    }
    </div>
    </>
  )
}

export default CourseCards