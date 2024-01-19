import { BiChevronDown } from "react-icons/bi";
import { BsCoin } from "react-icons/bs";

export default function SwapC_A() {
  return (
    <section>
      <div className="mt-7 border p-3 rounded-md">
        <div className="flex justify-between items-center">
          <p>Get</p>
          <p>Balance: 10,345.44 ETH</p>
        </div>
        <div className="grid grid-cols-[1fr_1.25fr] justify-between gap-5 mt-4">
          <div className="w-full border h-9 rounded relative cursor-pointer">
            <BsCoin className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none"/>
            <select name="" className="w-full h-full appearance-none cursor-pointer pl-7 border-none outline-none bg-transparent">
              <option value="">BTC</option>
              <option value="">ETH</option>
            </select>
            <BiChevronDown className="absolute text-lg right-2 top-1/2 -translate-y-1/2 pointer-events-none"/>
          </div>
          <div className="w-full border h-9 rounded flex">
            <input type="text" className="bg-transparent w-full outline-none px-2" placeholder="Price..."/>
          </div>
        </div>
      </div>
      
    </section>
  );
}
