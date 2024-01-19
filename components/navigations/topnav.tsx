"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BiMessageAltMinus } from "react-icons/bi";
import { BsBell, BsSearch } from "react-icons/bs";

export default function Topnav() {

  const router = useRouter();
  const [search, setSearch] = useState("");
  
  useEffect(() => {
    if (search.trim().length > 0) {
      router.push("/search");
    } else {
      router.push("/");
    }
  }, [search]);
  return (
    <main>
      <div className=" border-b text-gray-300 border-gray-500 px-4 py-2 flex justify-between items-center">
        <div className="h-10 w-72 rounded-md border relative bg-transparent">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-full w-full bg-transparent outline-none pl-9"
            placeholder="Search.."
          />
          <BsSearch className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
        <div className="flex h-full items-center gap-7 text-lg">
          <Link href="/messages" className="">
            <BiMessageAltMinus />
          </Link>
          <Link href="/notification" className="">
            <BsBell />
          </Link>
          <Link
            href="/profile"
            className="h-8 w-8 rounded-full bg-green-500"
          ></Link>
        </div>
      </div>
    </main>
  );
}
