import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export function InicioP({ id }) {
  let inicioP = document.getElementById("inicio").addEventListener("click");
  console.log(inicioP);
}
const Footer = () => {
  return (
    <div className="flex bg-blue-300 w-full h-20 items-center justify-between mt-0">
      Footer
      <BsFillArrowUpCircleFill
        className="flex m-5 text-xl cursor-pointer"
        onClick={InicioP}
      />
    </div>
  );
};

export default Footer;
