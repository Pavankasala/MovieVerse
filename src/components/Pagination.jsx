import React from "react";

function Pagination({handleprev ,pageno ,handlenext}) {
  return (
    <div className="bg-gray-400 flex justify-center p-4 mt-4 text-black rounded-lg">
      <div onClick={handleprev} className="px-8 hover:cursor-pointer "><i className="fa-solid fa-arrow-left"></i></div>
      <div className="font-bold">{pageno}</div>
      <div onClick={handlenext} className="px-8 hover:cursor-pointer"><i className="fa-solid fa-arrow-right"></i></div>
    </div>
  );
}

export default Pagination;
