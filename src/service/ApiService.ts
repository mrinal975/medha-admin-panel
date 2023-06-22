import axios, { AxiosResponse } from "axios";

interface ApiResponse<T> {
  data: T;
}

class ApiService {
  private apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  public async get<T>(url: string): Promise<T> {
    const response: AxiosResponse<ApiResponse<T>> = await axios.get<
      ApiResponse<T>
    >(`${this.apiUrl}${url}`);
    return response.data.data;
  }

  public async post<T, U>(url: string, data: T): Promise<U> {
    const response: AxiosResponse<ApiResponse<U>> = await axios.post<
      ApiResponse<U>
    >(`${this.apiUrl}${url}`, data);
    return response.data.data;
  }

  // Add other HTTP methods as needed (e.g., put, delete, etc.)
}

export default ApiService;
