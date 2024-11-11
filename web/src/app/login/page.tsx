"use client";

import { useState } from "react";
import { LockIcon, EyeIcon, MailIcon } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserLogin } from "@/types/user.types";
import { login } from "@/http/auth";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm<UserLogin>();
  const [loginError, setLoginError] = useState(false);

  const onSubmit: SubmitHandler<UserLogin> = async (data) => {
    const { email, password } = data;
    const response = await login(email, password);
    if (response.token === "Error") {
      setLoginError(true);
    } else {
      setLoginError(false);
      document.cookie = `token=${response.token}; path=/; max-age=3600`;
      window.location.href = "/feed";
    }
  };

  return (
    <div className="flex mt-50 items-top justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 rounded-lg shadow-lg bg-white">
        <div className="">
          <h2 className="mb-6 text-lg text-gray-600">Login</h2>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="relative">
              <MailIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="email"
                placeholder="E-mail"
                {...register("email")}
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>

            <div className="relative">
              <LockIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Senha"
                {...register("password")}
                className="w-full pl-10 pr-12 py-2 border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
              <EyeIcon
                className="absolute right-3 top-3 h-5 w-5 text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>

            {loginError && (
              <div className="text-red-500">E-mail ou senha inválidos</div>
            )}
            <button
              type="submit"
              className="w-full py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-600 focus:outline-none"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
