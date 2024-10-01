import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./page/Root";
import NotFound from "./page/NotFound";
import Contents from "./page/Contents";
import Profile from "./page/Profile";
import Login from "./page/Login";
import { mockFeed, mockPost } from "./mockData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Contents />, loader: () => mockFeed },
      {
        path: "content/:contentId",
        element: <Contents />,
        loader: ({ params }) => mockPost(params.contentId),
      },
      { path: "profile", element: <Profile /> },
    ],
  },
  { path: "login", element: <Login /> },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
