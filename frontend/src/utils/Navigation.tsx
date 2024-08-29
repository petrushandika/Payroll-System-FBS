import { useState } from "react";
import { Link } from "react-router-dom";

function Navigation() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="flex flex-col gap-2 w-full h-full m-2 p-4 bg-white border-r">
            <Link
                to="/"
                className="block p-2 text-lg font-semibold text-gray-700 hover:bg-gray-200 rounded-md"
            >
                Dashboard
            </Link>

            <Link
                to="/attendance"
                className="block p-2 text-lg font-semibold text-gray-700 hover:bg-gray-200 rounded-md"
            >
                Absensi
            </Link>

            <div>
                <button
                    onClick={toggleDropdown}
                    className="block w-full text-left p-2 text-lg font-semibold text-gray-700 hover:bg-gray-200 rounded-md"
                >
                    Master Data
                </button>
                {isDropdownOpen && (
                    <div className="flex flex-col gap-1 mt-2 pl-4">
                        <Link
                            to="/employee"
                            className="block p-2 text-lg font-semibold text-gray-700 hover:bg-gray-200 rounded-md"
                        >
                            Pegawai
                        </Link>
                        <Link
                            to="/salary"
                            className="block p-2 text-lg font-semibold text-gray-700 hover:bg-gray-200 rounded-md"
                        >
                            Gaji Pegawai
                        </Link>
                        <Link
                            to="/working-day"
                            className="block p-2 text-lg font-semibold text-gray-700 hover:bg-gray-200 rounded-md"
                        >
                            Kalkulasi Kerja
                        </Link>
                    </div>
                )}
            </div>

            <Link
                to="/report"
                className="block p-2 text-lg font-semibold text-gray-700 hover:bg-gray-200 rounded-md"
            >
                Report
            </Link>

            <Link
                to="/logout"
                className="block p-2 text-lg font-semibold text-gray-700 hover:bg-gray-200 rounded-md"
            >
                Logout
            </Link>
        </div>
    );
}

export default Navigation;
