function LoginPage() {
    return (
        <div className="h-screen mx-auto mt-10 flex flex-col items-center justify-center">
            <form className="bg-white p-8 shadow rounded-lg max-w-96 w-full">
                <h1 className="text-2xl font-bold mb-6 text-center">Login Admin</h1>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                    <input
                        id="username"
                        type="text"
                        className="p-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm outline-none"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        id="password"
                        type="password"
                        className="p-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm outline-none"
                        required
                    />
                </div>
                <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;
