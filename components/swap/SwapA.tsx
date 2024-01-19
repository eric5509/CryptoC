import { BsCheck, BsCheckCircleFill } from "react-icons/bs";

export default function SwapA() {
  const links = ["Low spillage", "No trading fee", "One-click swap"];
  return (
    <section className="h-full w-full bg-black rounded-md grid grid-cols-2 gap-7">
      <div className="h-full w-full rounded-md flex flex-col justify-center gap-3 p-7">
        <p className="font-bold text-base">Swap From as Low as $5</p>
        <div className=" flex gap-5 text-11 flex-wrap">
          {links.map((data, index) => (
            <div className="flex items-center gap-2" key={index}>
              <div className="h-4 w-4 bg-blue-500 rounded-full center">
                <BsCheck className="text-base" />
              </div>
              <p>{data}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="h-full w-full bg rounded-r-md"></div>
    </section>
  );
}
