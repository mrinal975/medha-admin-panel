import axios, { AxiosResponse } from "axios";

interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

class ApiService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = "http://127.0.0.1:8002/api/";
  }

  public async get<T>(url: string): Promise<T> {
    const response: AxiosResponse<ApiResponse<T>> = await axios.get<
      ApiResponse<T>
    >(`${this.baseUrl}${url}`);
    return response.data.data;
  }

  public async post<T, U>(url: string, data: T): Promise<U> {
    const response: AxiosResponse<ApiResponse<U>> = await axios.post<
      ApiResponse<U>
    >(`${this.baseUrl}${url}`, data);
    return response.data.data;
  }

  // Add other HTTP methods as needed (e.g., put, delete, etc.)
}

export default ApiService;
