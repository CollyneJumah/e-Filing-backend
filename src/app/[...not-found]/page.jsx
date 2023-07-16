import { InboxIcon } from "@heroicons/react/24/outline";

const NotFoundPage = () => {
    return (
       <div className=" h-screen flex-col text-gray-500 flex justify-center items-center">
            <span><InboxIcon className="h-10 w-10"/> </span>
          <h1 className="">No page found</h1>
       </div>
    );
 };
 
 export default NotFoundPage;