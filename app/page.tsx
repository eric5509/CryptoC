import SwapA from "@/components/swap/SwapA";
import SwapB from "@/components/swap/SwapB";
import SwapC from "@/components/swap/SwapC";

export default function Home() {
  return (
    <main className="h-full">
      <div className="swap grid gap-3">
        <div className="aa bg-rose-500 rounded-md">
          <SwapA />
        </div>
        <div className="bb bg-black rounded-md">
          <SwapC />
        </div>
        <div className="cc bg-black rounded-md">
          <SwapB />
        </div>
        <div className="dd bg-customCTA2 rounded-md"></div>
        <div className="ee bg-yellow-500 rounded-md"></div>
      </div>
    </main>
  );
}
