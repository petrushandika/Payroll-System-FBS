import { useState } from "react";

function SalaryPage() {
    // Dummy data for Gaji
    const [data] = useState([
        {
            id: 1,
            pegawaiId: 101,
            gajiPokok: 5000000,
            tunjangan: 1000000,
            potongan: 500000,
            totalGaji: 5500000,
        },
        {
            id: 2,
            pegawaiId: 102,
            gajiPokok: 6000000,
            tunjangan: 1200000,
            potongan: 600000,
            totalGaji: 6600000,
        },
        {
            id: 3,
            pegawaiId: 103,
            gajiPokok: 5500000,
            tunjangan: 1100000,
            potongan: 550000,
            totalGaji: 6050000,
        },
    ]);

    const handleEdit = (id: number) => {
        console.log(`Edit item with id: ${id}`);
    };

    const handleDelete = (id: number) => {
        console.log(`Delete item with id: ${id}`);
    };

    return (
        <div className="w-full bg-white rounded-lg my-8">
            <h1 className="text-lg font-medium mb-4">Salary Data</h1>
            <div className="flex flex-row gap-x-5 mb-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Tambah Data Gaji
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead>
                        <tr className="border-b">
                            <th className="px-4 py-2 text-left text-gray-600">ID</th>
                            <th className="px-4 py-2 text-left text-gray-600">Pegawai ID</th>
                            <th className="px-4 py-2 text-left text-gray-600">Gaji Pokok</th>
                            <th className="px-4 py-2 text-left text-gray-600">Tunjangan</th>
                            <th className="px-4 py-2 text-left text-gray-600">Potongan</th>
                            <th className="px-4 py-2 text-left text-gray-600">Total Gaji</th>
                            <th className="px-4 py-2 text-center text-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id} className="border-b hover:bg-gray-50">
                                <td className="px-4 py-2">{item.id}</td>
                                <td className="px-4 py-2">{item.pegawaiId}</td>
                                <td className="px-4 py-2">{item.gajiPokok.toLocaleString()}</td>
                                <td className="px-4 py-2">{item.tunjangan.toLocaleString()}</td>
                                <td className="px-4 py-2">{item.potongan.toLocaleString()}</td>
                                <td className="px-4 py-2">{item.totalGaji.toLocaleString()}</td>
                                <td className="px-4 py-2 text-center">
                                    <button
                                        onClick={() => handleEdit(item.id)}
                                        className="w-20 px-2 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 mr-2"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="w-20 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SalaryPage;
