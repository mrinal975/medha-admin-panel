import { defineStore } from "pinia";

interface User {
  id: number;
  phone: string;
  email: string;
  name: string;
  token: string;
}

interface AuthState {
  id: User | null;
  phone: User | null;
  email: User | null;
  name: User | null;
  token: User | null;
  isAuthenticated: boolean;
}

export const useAuthStore = defineStore("auth", {
  state: (): AuthState => ({
    id: null,
    phone: null,
    email: null,
    name: null,
    token: null,
    isAuthenticated: false,
  }),
  getters: {
    isLoggedIn: (state) => !!state.id,
    getName: (state) => state.name,
    getEmail: (state) => state.email,
    getPhone: (state) => state.phone,
    currentUser: (state) => state.id,
    getToken: (state) => state.token,
  },
  actions: {
    setUser(payload: any) {
      this.id = payload.id;
      this.phone = payload.phone;
      this.name = payload.name;
      this.email = payload.email;
      this.token = payload.access_token;
    },
    setAuthenticated(value: boolean) {
      console.log("set auth", value);
      this.isAuthenticated = value;
      console.log("set auth after", this.isAuthenticated);
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
      this.id = null;
      this.phone = null;
      this.name = null;
      this.email = null;
      this.token = null;
    },
  },
});
