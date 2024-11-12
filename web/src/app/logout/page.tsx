"use client";

import { useCallback, useEffect } from "react";

export default function LogoutPage() {
  const handleLogout = useCallback(() => {
    document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    window.location.href = "/login";
  }, []);

  useEffect(() => {
    handleLogout();
  }, [handleLogout]);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 rounded-lg shadow-lg bg-white">
        <div className="text-center">
          <h2 className="mb-6 text-lg text-gray-600">Você saiu da sua conta</h2>
          <button
            onClick={handleLogout}
            className="w-full py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-600 focus:outline-none"
          >
            Ir para a página de Login
          </button>
        </div>
      </div>
    </div>
  );
}
