export default function EarnPage() {
  return (
    <main className="h-full">
      <div className="grid h-full earn gap-3">
        <div className="aa bg-red-500 rounded-md"></div>
        <div className="bb bg-emerald-500 rounded-md"></div>
        <div className="cc overflow-y-auto space-y-3 scrollNone rounded-md">
          <div className="bg-red-500 h-96 rounded-md"></div>
          <div className="bg-purple-500 h-96 rounded-md"></div>
        </div>
        <div className="dd bg-blue-500 flex flex-col gap-3 rounded-md"></div>
      </div>
    </main>
  );
}
