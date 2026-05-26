import {NavLink} from "react-router-dom";
function NavBar() {
  return (
    <nav className="bg-zinc-900 flex relative items-center justify-between h-16 text-zinc-100 px-8">
      <div className="flex gap-2 items-center">
        <img className="size-12" src="/logo2.png" />
        <span className="text-2xl font-semibold">GearScout</span>
      </div>

      <ul className="flex absolute left-1/2 gap-8 -translate-x-1/2 [&_a]:cursor-pointer [&_a:hover]:text-pink-500">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Services</a>
        </li>
        <li>
          <a>Gear</a>
        </li>
        <li>
          <a>Reviews</a>
        </li>
      </ul>

      <div className="flex gap-8 [&_a]:cursor-pointer items-center">
        <NavLink to="/signup" className="bg-pink-500 font-bold p-2 hover:bg-pink-500/80">
          Sign Up
        </NavLink>
        <a>Login</a>
      </div>
    </nav>
  );
}

export default NavBar;
