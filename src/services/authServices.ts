import apiClient from "./apiClient";

async function login(email: string, password: string) {
  return await apiClient("/auth/login", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
  });
}

async function register(name: string, email: string, password: string) {
  return await apiClient("/auth/register", {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
  });
}

async function forgetPassword(email: string) {
  return await apiClient("/auth/forget-password", {
    method: "POST",
    body: JSON.stringify({ email }),
  });
}

async function resetPassword(
  email: string,
  token: string,
  newPass: string,
  confPass: string,
) {
  return await apiClient("auth/reset-password", {
    method: "PUT",
    body: JSON.stringify({
      email,
      newPass,
      confPass,
    }),
    headers: {
      "password-reset-token": token,
    },
  });
}

export { login, register, forgetPassword, resetPassword };
