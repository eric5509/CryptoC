export default function InvestPage() {
  return (
    <main className="h-full w-full">
      <div className="flex-1 w-full h-full">
        <div className="grid h-full gap-3 grid-rows-[100px_250px_300px]">
          <div className="bg-red-500 rounded-md"></div>
          <div className="grid gap-3 grid-cols-2">
            <div className="bg-blue-500 rounded-md"></div>
            <div className="bg-yellow-500 rounded-md"></div>
          </div>
          <div className="bg-purple-500 rounded-md"></div>
        </div>
      </div>
    </main>
  );
}
