import React, { useState } from "react";
import perfil from "../assets/perfil.jpg";
import { AiOutlineMenu, AiOutlineArrowDown } from "react-icons/ai";

const Header = () => {
  const [open, setOpen] = useState(false);

  const HandleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="flex flex-col md:grid md:grid-cols-2  md:h-36 lg:grid lg:grid-cols-2 lg:w-full lg:h-44">
      <section className=" flex items-center justify-between bg-blue-400">
        <h3 className="flex m-5 font-bold text-3xl">J</h3>
        <img
          src={perfil}
          alt="perfil"
          className="flex w-14 h-14 m-5 rounded-full md:hidden lg:hidden"
        />
        <AiOutlineMenu
          className="flex m-5 text-3xl relative md:hidden lg:hidden"
          onClick={HandleOpen}
        />
        <AiOutlineArrowDown className="hidden md:flex md:absolute md:text-3xl md:mt-[10rem] md:ml-[25.1rem] md:cursor-pointer lg:flex lg:mt-[13rem] lg:text-5xl lg:ml-[58.5rem] lg:cursor-pointer" />
      </section>
      <section className="bg-green-400 md:flex md:items-center md:justify-end md:w-full md:h-36 lg:flex lg:items-center justify-end  lg:w-full lg:h-44 ">
        <AiOutlineMenu
          className=" hidden lg:text-3xl lg:relative md:relative md:flex md:m-5 md:text-3xl lg:flex lg:ml[20rem]"
          onClick={HandleOpen}
        />
      </section>

      {open ? (
        <div className=" flex-col static bg-red-500 w-[200px] h-auto ml-[12.5rem] mt-[-4.5rem] md:mt-[-7.5rem] md:static md:ml-[41rem] lg:mt-[-7.5rem] lg:ml-[180%] lg:static lg:flex ">
          <img
            src={perfil}
            alt="perfil"
            className="hidden md:flex md:w-14 md:h-14 md:rounded-full md:m-3 lg:flex lg:w-14 lg:h-14 lg:m-5 lg:rounded-full lg:items-center lg:justify-center "
          />

          <p className="flex m-4">hola</p>
          <p className="flex m-4">hola</p>
          <p className="flex m-4">hola</p>
          <p className="flex m-4">hola</p>
          <p className="flex m-4">hola</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
