// import { UserLogin } from "@/types/user.types";
// import axios from "axios";

// const apiClient = axios.create({
//   baseURL: "https://api3.estadao.com.br/c3RvcmUK/api/v1",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

export const login = async (
  username: string,
  password: string
): Promise<{ token: string }> => {
  // const response = await apiClient.post<UserLogin>(`/auth`, {
  //   username,
  //   password,
  // });


  Promise.resolve(setTimeout(() => {}, 1000));
  if (username === "john.doe@teste.com" && password === "siTe$_Deve!0pers@10") {
    return {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.",
    };
  }

  return {
    token: "Error",
  };
};
