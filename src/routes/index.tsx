import About from "../pages/about/About"
import Home from "../pages/home/Home"
import {Routes, Route, useRoutes} from "react-router-dom"

const Routers = () => {
  return (
    <div>
      {
        useRoutes([
          {
            path: "/",
            element: <Home/>
          },
          {
            path: "about",
            element: <About/>
          }
        ])
      }
    </div>
  )
}

export default Routers