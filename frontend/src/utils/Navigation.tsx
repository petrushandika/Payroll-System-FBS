import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div className="flex flex-col gap-2 w-full h-full m-2 px-4 bg-white border-r">
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

            <Link
                to="/employee"
                className="block p-2 text-lg font-semibold text-gray-700 hover:bg-gray-200 rounded-md"
            >
                Master Pegawai
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
                Master Kalkulasi Kerja
            </Link>

            <Link
                to="/report"
                className="block p-2 text-lg font-semibold text-gray-700 hover:bg-gray-200 rounded-md"
            >
                Report
            </Link>
        </div >
    );
}

export default Navigation;
