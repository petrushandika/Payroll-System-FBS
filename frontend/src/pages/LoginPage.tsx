import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../networks/api';
import LOCAL_STORAGE from '../networks/storage';
import { loginDto } from '../dtos/AuthDto';
import { User } from '../types/UserType';

function LoginPage() {
    const [role, setRole] = useState('admin');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [_, setLoggedUser] = useState<User | null>(null);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!username || !password) {
            alert('Username dan Password harus diisi.');
            return;
        }

        const data: loginDto = { role, username, password };

        setIsLoading(true);

        try {
            const response = await API.AUTH.LOGIN(data);
            const token = response.token;

            if (!token) {
                alert('Login Tidak Berhasil! Periksa kembali username dan kata sandi Anda.');
                return;
            }

            LOCAL_STORAGE.SET(token);

            const loggedUser: User = await API.USER.GET_LOGGED_USER();
            setLoggedUser(loggedUser);

            alert('Login Berhasil! Selamat datang kembali di aplikasi kami.');
            navigate('/');
        } catch (error) {
            console.error('Login error:', error);
            alert('Login Gagal! Terjadi kesalahan saat mencoba masuk. Silakan coba lagi nanti.');
        }
    };

    return (
        <div className="h-screen mx-auto mt-10 flex flex-col items-center justify-center">
            <form onSubmit={handleSubmit} className="bg-white p-8 shadow rounded-lg max-w-96 w-full">
                <h1 className="text-2xl font-bold mb-6 text-center">Login Admin</h1>
                <div className="mb-6">
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
                    <select
                        id="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="p-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm outline-none"
                        required
                    >
                        <option value="admin">Admin</option>
                        <option value="pegawai">Pegawai</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="p-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm outline-none"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="p-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm outline-none"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className={`w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={isLoading}
                >
                    {isLoading ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </div>
    );
}

export default LoginPage;
