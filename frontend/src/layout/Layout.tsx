import { Outlet } from "react-router-dom"
import Navigation from "../utils/Navigation"

function Layout() {
    return (
        <div>
            <div className="h-screen bg-transparent">
                <div className="flex items-center py-4 px-8 w-full h-16 border border-gray-100 bg-white z-100 fixed">
                    <h1 className="text-3xl font-extrabold text-cyan">
                        Payroll
                        <span className="text-black text-sm font-light ml-1">System</span>
                    </h1>
                </div>
                <div className="wrapper flex flex-row w-full h-full fixed z-10">
                    <div className="w-1/5 h-full mt-14">
                        <Navigation />
                    </div>
                </div>

                <div className="flex flex-row w-full h-full">
                    <div className="w-1/5 h-full mt-14" />
                    <div className="w-4/5 mt-14 z-20">
                        <div className="w-full h-full bg-transparent p-8">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout