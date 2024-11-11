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
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ3d3cuZXN0YWRhby5jb20iLCJhdWQiOiJUZXN0ZSBFc3RhZMOjbyBEZXNlbnZvbHZlZG9yZXMiLCJzdWIiOiJqb2huLmRvZUB0ZXN0ZS5jb20iLCJFbWFpbCI6ImpvaG4uZG9lQHRlc3RlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG4iLCJTdXJuYW1lIjoiRG9lIiwidXNlcm5hbWUiOiJqb2huLmRvZUB0ZXN0ZS5jb20iLCJpYXQiOjE3MzEzNDA0MDMsImV4cCI6MTczMTM0NDAwM30.3NNGLypkhZAb2bVFaUgsu-WFMOkvuxXYiqnAtTooFFs",
    };
  }

  return {
    token: "Error",
  };
};
