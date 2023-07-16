import { UserCircleIcon } from "@heroicons/react/24/solid"

const Account = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <span className="p-5 shadow rounded-full bg-white"><UserCircleIcon className="h-8 w-8" /> </span>
           <h2 className="text-gray-700 font-semibold"> Account page</h2>
        </div>
    )
}

export default Account