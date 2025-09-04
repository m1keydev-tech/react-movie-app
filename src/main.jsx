import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import MovieDetail from "./pages/MovieDetail.jsx";
import RootLayout from "./pages/RootLayout.jsx";
import ModalProvider from "./context/ModalProvider";
import SearchPage from "./pages/SearchPage";
// import Homepage from "./pages/Homepage";
// import TVShowDetail from "./pages/TVShowDetail";
// import PeoplePage from "./pages/PeoplePage";
const TMDB_TOKEN = import.meta.env.VITE_TMDB_BEARER_TOKEN;
const Homepage = lazy(() => import("./pages/Homepage.jsx"));
const MovieDetail = lazy(() => import("./pages/MovieDetail.jsx"));
const TVShowDetail = lazy(() => import("./pages/TVShowDetail.jsx"));
const PeoplePage = lazy(() => import("./pages/PeoplePage.jsx"));

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetail />,
      },
      {
        path: "/tv/:id",
        element: <TVShowDetail />,
      },
      {
        path: "/people/:id",
        element: <PeoplePage />,
        loader: async ({ params }) => {
          const res = await fetch(
            `
          https://api.themoviedb.org/3/person/${params.id}?append_to_response=combined_credits`,
            {
              headers: {
                accept: "application/json",
                Authorization: `Bearer ${TMDB_TOKEN}`,
              },
            },
          );
          return res;
        },
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModalProvider>
      <RouterProvider router={router}></RouterProvider>
    </ModalProvider>
  </StrictMode>,
);
