/**
 * Because of transition in the Layout, you have to pass a ref through the sidebar component
 * to be displayed, using forwardref function
 * @returns 
 */
import { forwardRef } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import { SideBarMenus } from "../../../data/SideBarMenu"


const Sidebar = forwardRef(({showNav}, ref) =>{
    const router = useRouter
   return (
    <div ref={ref} className="w-56 fixed h-full bg-white shadow-sm">
       <div className="flex justify-center mt-6 mb-14">
            {/* <Image src={Logo} alt="Logo" className="w-32 h-auto" /> */}
            <Link href="/">
                <picture>
                    <img
                        className="w-32 h-auto"
                        src="/assets/images/logos/logo1.png"
                        alt="company logo"
                    />
                </picture>
            </Link>
       </div>
       <div className="flex flex-col">
            {
                SideBarMenus.map( (menu) =>(
                    <Link href={menu.url} key={menu.id}>
                        <div className={`pl-6 py-2 mx-5 rounded text-center cursor-pointer mb-2 flex items-center transition-colors 
                            ${router.pathname == menu.url
                            ? "bg-tertiary text-primary"
                            : "text-primary hover:bg-tertiary hover:text-white"}`} >
                        <div className="mr-2">
                            {menu.menuIcon}
                        </div>
                        <div>
                            <p>{menu.name}</p>
                        </div>
                        </div>
                    </Link>
                ))
            }
            
            
            
       </div>
    </div>
   )
})

Sidebar.displayName = "Sidebar"

export default Sidebar