import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PageLayout } from "@widgets/page-layout";
import { WorkInProgressPage } from "@pages/work-in-progress";

const router = createBrowserRouter([
  { path: "/", Component: PageLayout },
  { path: "/nohello", Component: PageLayout },
  { path: "/mirror-app/:widgetId", Component: PageLayout },
  { path: "/projects", Component: PageLayout },
  { path: "/contacts", Component: PageLayout },
  { path: "/memories", Component: PageLayout },
  { path: "*", Component: WorkInProgressPage },
]);

export const AppRouter = () => <RouterProvider router={router} />;
