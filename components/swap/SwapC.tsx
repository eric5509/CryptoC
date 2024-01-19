import { BiCoin } from "react-icons/bi";
import { BsChevronDown, BsInfoCircle } from "react-icons/bs";
import SwapC_A from "./SwapC_A";

export default function SwapC() {
  const items = [
    ["Expected Output", "0.282 ETH"],
    ["Price Impact", "0%"],
    ["Exchange Fee", "Free"],
    ["Network Fee", "0.583 ETH"],
  ];
  return (
    <section className="p-4">
      <div className="">
        <div className="flex justify-between items-center">
          <p className="text-15 font-semibold text-white">Swap</p>
          <p className="text-13">
            <BsInfoCircle className="inline" /> How it works
          </p>
        </div>
        <SwapC_A />
        <button className="bg-customBlue py-3 rounded-md w-full mt-5 font-semibold text-white">
          Continue
        </button>
        <div className="flex flex-col gap-1 mt-7">
          {items.map((data, index) => (
            <div className="flex justify-between items-center" key={index}>
              <p>{data[0]}</p>
              <p className="font-semibold">{data[1]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
