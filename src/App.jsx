// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Register from "./components/Register";
// import Login from "./components/Login";
// import Navbar from "./components/Navbar";

// function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/register",
//       element: <Register />,
//     },
//     {
//       path: "/login",
//       element: <Login />,
//     },
//     {
//       path: "/",
//       element: <div>Home</div>,
//     },
//     {
//       path: "/competition",
//       element: <div>Competition</div>,

//     },
//     {
//       path: "/sample-questions",
//       element: <div>Sample Questions</div>,
//     }
//   ]);
//   return (
//     <div>
//       <Navbar />
//       <RouterProvider router={router} />
//     </div>
//   );
// }

// export default App;

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

// Root layout component to include Navbar and Outlet
const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet /> {/* This renders the matched route */}
    </div>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />, // Use RootLayout for all routes
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/competition",
          element: <div>Competition</div>,
        },
        {
          path: "/sample-questions",
          element: <div>Sample Questions</div>,
        },
      ],
      errorElement: <div>404 - Page Not Found</div>, // Fallback for invalid routes
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;