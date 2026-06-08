import { useMutation } from "@tanstack/react-query";
import { register } from "../services/authServices";
import { useAuthStore } from "../store/authStore";
import { ApiError } from "../services/apiClient";

interface RegisterCredential {
  name: string;
  email: string;
  password: string;
}

interface RegisterResponse {
  status: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
  message: string;
}

export function useRegisterMutation() {
  const authStore = useAuthStore();

  return useMutation<RegisterResponse, Error, RegisterCredential>({
    mutationFn: async (credentials: RegisterCredential) => {
      const response = await register(
        credentials.name,
        credentials.email,
        credentials.password,
      );
      if (!response) {
        throw new ApiError("Inviled response from server", 500);
      }

      return response as RegisterResponse;
    },

    onSuccess: (data) => {
      authStore.setUser(data.user);
    },

    onError: (error: Error) => {
      throw new ApiError(error.message, 500);
    },
  });
}
