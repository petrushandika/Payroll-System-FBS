import { useState } from "react";

function EmployeePage() {
    const [data] = useState([
        {
            id: 1,
            nama: "John Doe",
            alamat: "123 Main St",
            email: "john.doe@example.com",
            telp: "123-456-7890",
            jabatan: "Manager",
            status: "Active",
        },
        {
            id: 2,
            nama: "Jane Smith",
            alamat: "456 Oak Ave",
            email: "jane.smith@example.com",
            telp: "987-654-3210",
            jabatan: "Developer",
            status: "Inactive",
        },
        {
            id: 3,
            nama: "Emily Johnson",
            alamat: "789 Pine Rd",
            email: "emily.johnson@example.com",
            telp: "555-555-5555",
            jabatan: "Designer",
            status: "Active",
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
            <h1 className="text-lg font-medium mb-4">Attendance</h1>
            <div className="flex flex-row gap-x-5 mb-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Tambah Data Pegawai
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead>
                        <tr className="border-b">
                            <th className="px-4 py-2 text-left text-gray-600">ID</th>
                            <th className="px-4 py-2 text-left text-gray-600">Nama</th>
                            <th className="px-4 py-2 text-left text-gray-600">Alamat</th>
                            <th className="px-4 py-2 text-left text-gray-600">Email</th>
                            <th className="px-4 py-2 text-left text-gray-600">Telepon</th>
                            <th className="px-4 py-2 text-left text-gray-600">Jabatan</th>
                            <th className="px-4 py-2 text-left text-gray-600">Status</th>
                            <th className="px-4 py-2 text-center text-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id} className="border-b hover:bg-gray-50">
                                <td className="px-4 py-2">{item.id}</td>
                                <td className="px-4 py-2">{item.nama}</td>
                                <td className="px-4 py-2">{item.alamat}</td>
                                <td className="px-4 py-2">{item.email}</td>
                                <td className="px-4 py-2">{item.telp}</td>
                                <td className="px-4 py-2">{item.jabatan}</td>
                                <td className="px-4 py-2">{item.status}</td>
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

export default EmployeePage;
