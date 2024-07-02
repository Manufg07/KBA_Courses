import React, { useEffect, useState } from 'react'
import banner from '../assets/banner-kba.png'
import { useParams } from 'react-router-dom'

const CoursePage = () => {

  const [course, setCourse] =useState([null])
  const [loading, setLoading] =useState(true)
  const {id} =useParams()

  useEffect(() => {
    const fetchCourse = async(res,req) =>{
      try{
        const res = await fetch(`http://localhost:5000/courses/${id}`)
        const data = await res.json();
        
        console.log('course', data)
        setCourse(data);
      
      }catch(error){
        console.log('error',error)
      }finally{
        setLoading(false)
      }
    };
    fetchCourse()
  }, [])
 


  return (
    <>
  {loading ? <h1>Loading.....</h1>: <div class="bg-white text-gray-900 mb-10 pb-10">   
          <div class="max-w-4xl mx-auto p-5 ">
            
            <section>
            <a  class="flex items-center my-5 gap-1 font-medium  " href = '/'>  Back to Courses</a>
            </section>

            <div class="bg-purple-100 shadow-lg rounded-lg overflow-hidden">
              <img
                src={banner}
                alt="Course Thumbnail"
                class="w-full h-64 object-cover"
              />
              <div class="p-6">
                <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                  <h1 class="text-3xl font-bold text-purple-800">
                    {course.title}
                  </h1>
                  <div class="flex items-center mt-2 sm:mt-0">
                    <span class="text-2xl text-red-500 font-semibold mr-4">
                      {course.price}
                    </span>
                    <button class="bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600">
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div class="mb-6">
                  <h2 class="text-2xl font-semibold text-purple-800 mb-2">
                    Description
                  </h2>
                  <p>{course.description}</p>
                </div>

                <div class="mb-6">
                  <h2 class="text-2xl font-semibold text-purple-800 mb-2">
                    Prerequisites
                  </h2>
                  <ul class="list-disc list-inside">
                    <li>Basic understanding of blockchain technology</li>
                    <li>Familiarity with programming languages</li>
                    <li>Internet access</li>
                  </ul>
                </div>

                <div>
                  <h2 class="text-2xl font-semibold text-purple-800 mb-2">
                    Features
                  </h2>
                  <ul class="list-disc list-inside">
                    <li>40 hours of content</li>
                    <li>Certificate of completion</li>
                    <li>Access to community forums</li>
                    <li>Downloadable resources</li>
                    <li>24/7 support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-row justify-end gap-4 mr-[205px] ">
            <a href='/Edit'  class="flex bg-blue-500 hover:bg-blue-600 text-white font-bold  rounded-full h-10 w-32 focus:outline-none focus:shadow-outline justify-center items-center">Edit Course</a>
            <a  class="flex bg-red-500 hover:bg-red-600 text-white font-bold  rounded-full h-10 w-32 focus:outline-none focus:shadow-outline  justify-center items-center">Remove Course</a>
          
            </div>
        </div>
}
      
    </>
  )
}

export default CoursePage