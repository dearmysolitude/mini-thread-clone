import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import Root from "./page/Root";
import NotFound from "./page/NotFound";
import Contents from "./page/Contents";
import Profile from "./page/Profile";
import Login from "./page/Login";
import NewThread from "./page/NewThread";
import { mockFeed, mockPost, mockProfile } from "./mockData";
import { useUserStore } from "./store";

const authLoader = () => {
  const isAuthenticated = useUserStore.getState().isAuthenticated();

  if (!isAuthenticated) {
    return redirect("/login");
  }
  return null;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Contents />, loader: () => mockFeed },
      {
        path: ":userId/:contentId",
        element: <Contents />,
        loader: ({ params }) => mockPost(params.userId, params.contentId),
      },
      {
        path: "write",
        element: <NewThread />,
        // loader: authLoader,
      },
      {
        path: "profile/:userId",
        element: <Profile />,
        // loader: authLoader, //({ params }) => mockProfile(params.userId) 로 변경
      },
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
