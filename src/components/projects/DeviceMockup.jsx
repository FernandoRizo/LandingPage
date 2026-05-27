export default function DeviceMockup({ type }) {
  if (type === "phone") {
    return (
      <div className="mx-auto flex h-48 w-28 rounded-[2rem] bg-slate-800 p-2 shadow-xl">
        <div className="flex flex-1 flex-col rounded-[1.5rem] bg-slate-50 p-3">
          <div className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-slate-300" />
          <div className="h-8 rounded-2xl bg-emerald-100" />
          <div className="mt-3 grid gap-2">
            <div className="h-4 rounded-full bg-slate-200" />
            <div className="h-4 rounded-full bg-slate-200" />
            <div className="h-16 rounded-2xl bg-emerald-50" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-xs">
      <div className="rounded-2xl bg-slate-800 p-2 shadow-xl">
        <div className="rounded-xl bg-slate-50 p-4">
          <div className="h-8 rounded-xl bg-emerald-100" />
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="h-20 rounded-xl bg-slate-200" />
            <div className="col-span-2 h-20 rounded-xl bg-emerald-50" />
          </div>
          <div className="mt-3 h-4 rounded-full bg-slate-200" />
          <div className="mt-2 h-4 w-2/3 rounded-full bg-slate-200" />
        </div>
      </div>
      <div className="mx-auto h-3 w-24 rounded-b-xl bg-slate-300" />
    </div>
  );
}
