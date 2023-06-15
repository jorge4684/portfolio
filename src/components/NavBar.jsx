import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className=" flex flex-col w-20 absolute h-auto bg-slate-500 items-center justify-center rounded-e-xl ">
      <Link to="/">
        <p className="m-3">Home</p>
      </Link>
      <Link to="about">
        <p className="m-3">About</p>
      </Link>
      <Link to="contacto">
        <p className="m-3">Contacto</p>
      </Link>
      <Link to="skill">
        <p className="m-3">Skill</p>
      </Link>
    </div>
  );
};

export default NavBar;
