import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Pages from "../Pages/Pages";
import WorkInProgress from "../Pages/WorkInProgress/WorkInProgress";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Pages,
    },
    {
      path: "/nohello",
      Component: Pages,
    },
    {
      path: "*",
      Component: WorkInProgress,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
