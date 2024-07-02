import React, { useEffect, useState } from 'react'
import Cards from './Cards'
// import courses from '../courses.json'

// const CourseCards = ({num}) => {
//   const course = courses.slice(0, num) //use this method also

  const CourseCards = ({isHome = false}) => {

  const [courses, setCourses] =useState([])
  const [loading, setLoading] =useState(true)

  useEffect(() => {
    const fetchCourses = async(res,req) =>{
      try{
        const res = await fetch('/api/courses')
        const data = await res.json();
        
        console.log('course', data)
        setCourses(data);
      
      }catch(error){
        console.log('error',error)
      }finally{
        setLoading(false)
      }
    };
    fetchCourses()
  }, [])
 
  const courseList = isHome ? courses.slice(0, 3):courses;
 
  console.log(courses)
  
  return (
    <>
    <div className='text-center'>
    <h2 className='font-medium text-lg md:text-xl text-purple-800 mt-4'>{isHome ? 'Top Courses' :'All Course'}</h2>
    </div>
    {loading ? <h1>loading</h1> : <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-10'>
    {
      courseList.map((course) =>  //use the keyword course 
           <Cards key={course.courseId} course ={course}/>
    )
    }
    </div>}
    </>
  )
}

export default CourseCards