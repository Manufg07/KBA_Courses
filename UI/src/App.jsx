import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CourseCards from './components/CourseCards'
import AllCourse from './components/AllCourse'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar />
        <Hero/>
        <CourseCards />
        <AllCourse />

    </>
  )
}

export default App
