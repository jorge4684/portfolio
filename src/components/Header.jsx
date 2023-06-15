/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import perfil from "../assets/perfil.jpg";
import {
  AiOutlineMenu,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Header = () => {
  const [open, setOpen] = useState(false);

  const HandleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div
        className="flex flex-col md:grid md:grid-cols-2  md:h-36 lg:grid lg:grid-cols-2 lg:w-full lg:h-44"
        id="0"
      >
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
          <h3 className="lg:hidden">welcome</h3>
          <AiOutlineMenu
            className="hidden m-5 text-3xl relative md:hidden lg:flex"
            onClick={HandleOpen}
          />
        </section>

        {open ? (
          <div className=" flex-col absolute bg-red-500 w-[200px] h-auto ml-[12.5rem] mt-[1.5rem] md:mt-[-7.5rem] md:static md:ml-[41rem] lg:mt-[-7.5rem] lg:ml-[180%] lg:static lg:flex ">
            <AiOutlineMenu
              className=" flex absolute text-3xl ml-36 mt-5 lg:text-3xl lg:hidden md:relative md:flex md:m-5 md:text-3xl  lg:ml[20rem]"
              onClick={HandleOpen}
            />
            <img
              src={perfil}
              alt="perfil"
              className="hidden md:flex md:w-14 md:h-14 md:rounded-full md:m-3 lg:flex lg:w-14 lg:h-14 lg:m-5 lg:rounded-full lg:items-center lg:justify-center "
            />

            <a className="flex m-4" href="#1">
              About me
            </a>
            <a className="flex m-4" src="#">
              Training
            </a>
            <a className="flex m-4" src="#">
              Projects
            </a>
            <a className=" flex m-4" href="#2">
              Skill
            </a>
            <a className="flex m-4" src="#">
              Contacts
            </a>
          </div>
        ) : (
          <></>
        )}
      </div>
      <section
        className="flex-col bg-blue-200 items-center justify-between "
        id="1"
      >
        <h4 className="flex m-5 items-center justify-center">About Me</h4>
        <div className="flex items-center justify-between ">
          <ul className="m-5">
            <li>First Name:</li>
            <li>Last Name:</li>
            <li>Profession:</li>
          </ul>
          <ul className="m-5">
            <li>Jorge Alberto</li>
            <li>Sánchez Hernández</li>
            <li>Full Stack Developer</li>
          </ul>
        </div>
        <h4 className="flex items-center justify-center">Description</h4>
        <p className="flex m-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum cum
          at cumque ipsam sit nobis harum. Quis, excepturi. Neque molestiae hic
          sint incidunt eveniet amet cupiditate libero tenetur iure! Illum! Odit
          rem aliquid fugit nobis reprehenderit soluta repellat, officiis
          voluptatum id beatae natus minima iste animi modi molestiae mollitia
          dolorem, tempora maiores cupiditate. Quaerat adipisci omnis asperiores
          aut suscipit numquam!
        </p>
        <a className="flex items-center ml-[12rem] text-3xl" href="#1">
          <AiOutlineArrowUp />
        </a>
      </section>

      <section
        className="flex-col bg-orange-500 items-center justify-between"
        id="2"
      >
        <h4 className="flex m-5 items-center justify-center">Skill</h4>
        <div className="flex items-center justify-between ">
          <ul className="m-5">
            <li>Html-5:</li>
            <li>Css 3:</li>
            <li>Reactjs:</li>
            <li>Sass:</li>
            <li>Javascript:</li>
            <li>Typescript:</li>
            <li>Nextjs:</li>
            <li>Express:</li>
            <li>MongoDb:</li>
            <li>Mysql:</li>
            <li>Firebase:</li>
            <li>Jest:</li>
          </ul>
          <ul className="m-5">
            <li>Html-5:</li>
            <li>Css 3:</li>
            <li>Reactjs:</li>
            <li>Sass:</li>
            <li>Javascript:</li>
            <li>Typescript:</li>
            <li>Nextjs:</li>
            <li>Express:</li>
            <li>MongoDb:</li>
            <li>Mysql:</li>
            <li>Firebase:</li>
            <li>Jest:</li>
          </ul>
        </div>
        <a className="flex items-center ml-[12rem] text-3xl" href="#0">
          <AiOutlineArrowUp />
        </a>
      </section>
    </>
  );
};

export default Header;
