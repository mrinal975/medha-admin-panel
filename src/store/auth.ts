import { defineStore } from "pinia";

interface User {
  id: number;
  phone: string;
  email: string;
  name: string;
  token: string;
}
interface AuthState {
  user: User | null;
  token: User | null;
  isAuthenticated: boolean;
}

export const useAuthStore = defineStore("auth", {
  state: (): AuthState => ({
    user: null,
    token: null,
    isAuthenticated: false
  }),
  getters: {
    isAuthenticated: (state) => !!state.isAuthenticated,
    getUser: (state) => state.user,
    getToken: (state) => state.token,
  },
  actions: {
    setUser(payload: any) {
      this.token = payload.access_token;
      this.user = payload;
    },
    setAuthenticated(value: boolean) {
      // console.log("set auth", value);
      this.isAuthenticated = value;
    },

    login(payload: any) {
      this.setUser(payload);
      this.setAuthenticated(true);
    },
    logout() {
      this.setAuthenticated(false);
      this.clearAuth();
    },
    clearAuth() {
      this.user = null;
      this.token = null;
      this.isAuthenticated = false;
    },
  },
});
