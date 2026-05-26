import {Outlet} from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";

function MainLayout() {
  return (
    <main className="bg-zinc-950 max-w-svw">
      <NavBar />
      <Outlet />
    </main>
  );
}

export default MainLayout;
