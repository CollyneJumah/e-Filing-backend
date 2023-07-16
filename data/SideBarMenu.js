import { CloudArrowUpIcon,FolderIcon, DocumentDuplicateIcon, Squares2X2Icon } from "@heroicons/react/24/solid"

export const SideBarMenus = [
    {
        id:1,
        name:"Dashboard",
        menuIcon: <Squares2X2Icon className="h-5 w-5" />,
        url: "/"
    },
    {
        id:2,
        name:"Catalogue",
        menuIcon: <FolderIcon className="h-5 w-5" />,
        url: "/catalogue"
    },
    {
        id:3,
        name:"Assets",
        menuIcon: <DocumentDuplicateIcon className="h-5 w-5" />,
        url: "/assets"
    },
    {
        id:4,
        name:"Backup",
        menuIcon: <CloudArrowUpIcon className="h-5 w-5" />,
        url: "/backup"
    },
   
]