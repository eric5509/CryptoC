export default function MarginPage() {
  return (
    <main className="h-full">
      <div className="grid h-full gap-3 grid-rows-[200px_1fr]">
        <div className="bg-purple-500 rounded-md"></div>
        <div className="flex gap-3">
          <div className="bg-green-500 flex-1 rounded-md"></div>
          <div className="bg-blue-500 flex-1 rounded-md"></div>
        </div>
      </div>
    </main>
  );
}
