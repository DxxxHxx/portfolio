import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import MoveTop from "./MoveTop";

export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <MoveTop />
    </div>
  );
}
