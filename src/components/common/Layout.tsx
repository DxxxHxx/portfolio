import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import MoveTop from "./MoveTop";
import ProgressBar from "./ProgressBar";

export default function Layout() {
  return (
    <div>
      <ProgressBar />
      <Header />
      <Outlet />
      <MoveTop />
    </div>
  );
}
