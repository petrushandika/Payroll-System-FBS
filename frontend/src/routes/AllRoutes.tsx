import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import AttendancePage from "../pages/AttendancePage";
import EmployeePage from "../pages/EmployeePage";
import SalaryPage from "../pages/SalaryPage";
import WorkingDayPage from "../pages/WorkingDayPage";
import ReportPage from "../pages/ReportPage";
import Layout from "../layout/Layout";

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route path="/auth/login" element={<LoginPage />} />
                <Route path="/attendance" element={<AttendancePage />} />
                <Route path="/employee" element={<EmployeePage />} />
                <Route path="/salary" element={<SalaryPage />} />
                <Route path="/working-day" element={<WorkingDayPage />} />
                <Route path="/report" element={<ReportPage />} />
            </Route>
        </Routes>
    );
}

export default AllRoutes;
