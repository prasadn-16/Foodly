import React, { Suspense, lazy, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header'
import Body from './components/Body'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import Menu from './components/Menu'
import UserContext from "./utils/UserContext";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

const Grocery = lazy(() => import("./components/Grocery"))
const AppLayout = () => {
  const [userName, setUserName] = useState()
  useEffect(() => {
    const data = {
      name: "Prasad"
    };
    setUserName(data.name)
  }, [])
  return (
    <UserContext.Provider value={{ loggedInUser: userName }}>
      <div className="app">
        <UserContext.Provider value={{ loggedInUser: "Logged In User: Elon Musk" }}>

          <Header></Header>
        </UserContext.Provider>
        <div className="container mx-auto">
          <Outlet />
        </div>
      </div>
    </UserContext.Provider>
  )
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <Menu />,
      },
      {
        path: "/grocery",
        element: (<Suspense fallback={<h1>Loading...</h1>}>
          <Grocery />
        </Suspense>
        ),
      },
    ],
    errorElement: <Error />
  },

])
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<RouterProvider router={appRouter} />)