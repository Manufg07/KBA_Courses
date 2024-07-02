import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from "react-router-dom"
import HomePage from "./pages/HomePage"
import NotFoundPage from "./pages/NotFoundPage"
import CoursesPage from "./pages/CoursesPage"
import MainLayout from "./Layout/MainLayout"
import Contact from "./components/Contact"
import AddCourse from "./components/AddCourse"
import EditCourse from "./components/EditCourse"
import CoursePage from "./components/CoursePage"


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<MainLayout/>}>
          <Route path="/" element={<HomePage/>} />
          <Route path="/Course" element={<CoursesPage/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Add" element={<AddCourse/>} />
          <Route path="/Edit" element={<EditCourse/>} />
          <Route path="/CoursePage/:id" element={<CoursePage/>} />
          <Route path="/*" element={<NotFoundPage/>} />
      </Route>
      </>
    )
  )

  return (
    <>

        <RouterProvider router={router}/>

    </>
  )
}

export default App
