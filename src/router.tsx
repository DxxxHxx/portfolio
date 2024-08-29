import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/common/Layout";
import Home from "./pages/Home";
import ProjectPage from "./pages/project/ProjectPage";
import ProjectDetail from "./pages/project/ProjectDetail";
import { AnimatePresence } from "framer-motion";

const routeList = [
  { id: 1, path: "/", element: Home },
  { id: 2, path: "/projects", element: ProjectPage },
  { id: 3, path: "/projects/:id", element: ProjectDetail },
];
export default function Router() {
  const loc = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={loc} key={loc.key}>
        <Route element={<Layout />}>
          {routeList.map((item) => (
            <Route key={item.id} path={item.path} element={<item.element />} />
          ))}
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
