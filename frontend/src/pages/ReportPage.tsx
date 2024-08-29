import { useState } from "react";

function ReportPage() {
    const [selectedReport, setSelectedReport] = useState("summary");

    const renderReportContent = () => {
        switch (selectedReport) {
            case "summary":
                return (
                    <div className="">
                        <h2 className="text-xl font-bold mb-4">Summary Report</h2>
                        <p>This section includes a summary of the reports. Here, you can present an overview of key metrics and insights.</p>
                        {/* Add summary report content here */}
                    </div>
                );
            case "detailed":
                return (
                    <div className="">
                        <h2 className="text-xl font-bold mb-4">Detailed Report</h2>
                        <p>This section provides detailed data and analytics. You can include tables, charts, and detailed explanations here.</p>
                        {/* Add detailed report content here */}
                    </div>
                );
            case "custom":
                return (
                    <div className="">
                        <h2 className="text-xl font-bold mb-4">Custom Report</h2>
                        <p>This section allows for custom reports based on specific criteria or user input.</p>
                        {/* Add custom report content here */}
                    </div>
                );
            default:
                return <div>Select a report type to view its content.</div>;
        }
    };

    return (
        <div className="w-full bg-white rounded-lg my-14">
            <h1 className="text-lg font-medium mb-4">Report Page</h1>
            <div className="flex flex-row gap-x-5 mb-4">
                <button
                    onClick={() => setSelectedReport("summary")}
                    className={`px-4 py-2 rounded-md ${selectedReport === "summary" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"} hover:bg-blue-600`}
                >
                    Summary Report
                </button>
                <button
                    onClick={() => setSelectedReport("detailed")}
                    className={`px-4 py-2 rounded-md ${selectedReport === "detailed" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"} hover:bg-blue-600`}
                >
                    Detailed Report
                </button>
                <button
                    onClick={() => setSelectedReport("custom")}
                    className={`px-4 py-2 rounded-md ${selectedReport === "custom" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"} hover:bg-blue-600`}
                >
                    Custom Report
                </button>
            </div>
            {renderReportContent()}
        </div>
    );
}

export default ReportPage;
