"use client";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { BsChevronBarLeft } from "react-icons/bs";

export default function Sidenav() {
  const [active, setActive] = useState(0);
  const router = useRouter();
  const pathname = usePathname();
  const links = [
    ["", <BsChevronBarLeft />],
    ["spot", <BsChevronBarLeft />],
    ["margin", <BsChevronBarLeft />],
    ["traditional", <BsChevronBarLeft />],
    ["club", <BsChevronBarLeft />],
    ["execution", <BsChevronBarLeft />],
    ["earn", <BsChevronBarLeft />],
    ["invest", <BsChevronBarLeft />],
    ["loan", <BsChevronBarLeft />],
  ];
  
  return (
    <main>
      <div className="w-full border-r border-gray-500 h-screen flex flex-col justify-between p-2 text-white">
        <p className="text-xl font-bold px-3 mt-2 text-gray-300">
          Crypto <span className="text-red-500">C</span>
        </p>
        <div className="w-full p-1 space-y-1">
          {links.map((data, index) => (
            <div
              className={`flex gap-1 p-2 duration-300 capitalize text-13 rounded-md cursor-pointer items-center ${
                `/${data[0]}` === pathname
                  ? "bg-customBlue text-white"
                  : "bg-transparent hover:bg-customBlack"
              }`}
              key={index}
              onClick={() => {
                router.push(`/${data[0]}`);
              }}
            >
              <p className="stroke-1">{data[1]}</p>
              <p>{index === 0 ? "Swap" : data[0]}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col text-center justify-center mt-5 rounded-md items-center pt-5 w-full border p-3">
          <p className="text-sm font-bold">New Version </p>
          <p className="text-sm font-bold">Available</p>
          <p className="mt-1">Version 3.14.2</p>
          <p className="w-full py-2 rounded-md bg-blue-500 mt-5 cursor-pointer text-white">
            Update Now
          </p>
        </div>
      </div>
    </main>
  );
}
