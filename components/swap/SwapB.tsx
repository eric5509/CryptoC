import { BsChevronUp } from "react-icons/bs";

export default function SwapB() {
  return (
    <section className="p-4">
      <div className="flex justify-between ">
        <div className="">
          <p className="text-13">Low spillage</p>
          <p className="text-lg font-semibold ">$23,584.64</p>
        </div>
        <div className="flex gap-2 items-center rounded border px-5 py-1">
            <BsChevronUp className="inline"/>
            <p>+4.56%</p>
        </div>
      </div>
    </section>
  );
}
