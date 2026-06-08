import { useMutation } from "@tanstack/react-query";
import { login } from "../services/authServices";
import { useAuthStore } from "../store/authStore";

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  user: {
    id: string;
    name: string;
    email: string;
  };
  message?: string;
}

export const useLoginMutation = () => {
  const authStore = useAuthStore();

  return useMutation<LoginResponse, Error, LoginCredentials>({
    mutationFn: async (credentials: LoginCredentials) => {
      const response = await login(credentials.email, credentials.password);

      if (!response) {
        throw new Error("Invalid response from server");
      }

      return response as LoginResponse;
    },

    onSuccess: (data) => {
      // Store user data in auth store
      authStore.setUser(data.user);

      // Store auth token if available (if your API returns one)
      // localStorage.setItem("authToken", data.token);
    },

    onError: (error: Error) => {
      console.error("Login failed:", error.message);
      // Error handling is delegated to the component
    },
  });
};
