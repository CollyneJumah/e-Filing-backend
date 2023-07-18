import { UserCircleIcon } from "@heroicons/react/24/outline";
import { CurrencyDollarIcon, FolderIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <>
      <p className="text-gray-700 text-3xl mb-16 font-bold">Dashboard</p> 
      <div className="grid lg:grid-cols-3 gap-5 mb-5">
        <div className="rounded bg-white px-4 h-40 shadow-sm flex gap-3 items-center justify-start">
          <span className="p-3 bg-primary/50 rounded-full">
            <UserCircleIcon className="h-10 w-10 text-white" />
          </span>
          <div className="text-primary">
            <h4 className="font-semibold">Users</h4>
            <p className="text-3xl">1234</p>
          </div>
        </div>
        <div className="rounded bg-white px-4 h-40 shadow-sm flex gap-3 items-center justify-start">
          <span className="p-3 bg-secondary rounded-full">
            <FolderIcon className="h-10 w-10 text-white" />
          </span>
          <div className="text-secondary">
            <h4 className="font-semibold">Catalogues</h4>
            <p className="text-3xl">30</p>
          </div>
        </div>
        <div className="rounded bg-white px-4 h-40 shadow-sm flex gap-3 items-center justify-start">
          <span className="p-3 bg-sky-500 rounded-full">
            <CurrencyDollarIcon className="h-10 w-10 text-white" />
          </span>
          <div className="text-sky-500">
            <h4 className="font-semibold">Billing</h4>
            <p className="text-3xl">1234</p>
          </div>
        </div>
        <div className="grid col-1 col-span-3 bg-white h-52 shadow-sm"></div>
      
      </div>
      <div className="grid col-1 bg-white h-96 shadow-sm"></div>
     
    </>
  )
}
