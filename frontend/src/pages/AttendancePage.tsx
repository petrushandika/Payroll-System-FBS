import { useState } from "react";

function AbsensiPage() {
    const [data] = useState([
        {
            id: 1,
            pegawaiId: 101,
            tanggal: "2024-08-01",
            jamMasuk: "08:00",
            jamKeluar: "17:00",
        },
        {
            id: 2,
            pegawaiId: 102,
            tanggal: "2024-08-01",
            jamMasuk: "08:30",
            jamKeluar: "17:30",
        },
        {
            id: 3,
            pegawaiId: 103,
            tanggal: "2024-08-01",
            jamMasuk: "09:00",
            jamKeluar: "18:00",
        },
    ]);

    const handleEdit = (id: number) => {
        console.log(`Edit item with id: ${id}`);
    };

    const handleDelete = (id: number) => {
        console.log(`Delete item with id: ${id}`);
    };

    return (
        <div className="w-full bg-white rounded-lg my-14">
            <h1 className="text-lg font-medium mb-4">Absensi</h1>
            <div className="flex flex-row gap-x-5 mb-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Tambah Data Absensi
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead>
                        <tr className="border-b">
                            <th className="px-4 py-2 text-left text-gray-600">ID</th>
                            <th className="px-4 py-2 text-left text-gray-600">Pegawai ID</th>
                            <th className="px-4 py-2 text-left text-gray-600">Tanggal</th>
                            <th className="px-4 py-2 text-left text-gray-600">Jam Masuk</th>
                            <th className="px-4 py-2 text-left text-gray-600">Jam Keluar</th>
                            <th className="px-4 py-2 text-center text-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id} className="border-b hover:bg-gray-50">
                                <td className="px-4 py-2">{item.id}</td>
                                <td className="px-4 py-2">{item.pegawaiId}</td>
                                <td className="px-4 py-2">{item.tanggal}</td>
                                <td className="px-4 py-2">{item.jamMasuk}</td>
                                <td className="px-4 py-2">{item.jamKeluar}</td>
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

export default AbsensiPage;
