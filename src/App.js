import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  AllFilms,
  Home,
  People,
  Planets,
  ViewSingleFilm,
  ViewSinglePerson,
  ViewSinglePlanet,
} from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/people",
      element: <People />,
    },
    {
      path: "/people/:id",
      element: <ViewSinglePerson />,
    },
    {
      path: "/films",
      element: <AllFilms />,
    },
    {
      path: "/singlefilm/:id",
      element: <ViewSingleFilm />,
    },
    {
      path: "/planets",
      element: <Planets />,
    },
    {
      path: "/planet/:id",
      element: <ViewSinglePlanet />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
