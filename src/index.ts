import axios, { AxiosInstance } from 'axios';

interface BypassResponse {
  result: string;
  success: boolean;
}

interface LongBypassResponse {
  status: string;
  ThreadID: string;
  next: string;
}

interface ThreadCheckResponse {
  status: string;
  result: string;
  success: boolean;
}

interface ApiStatusResponse {
  status: string;
}

export class TRW {
  private client: AxiosInstance;

  constructor(apiKey?: string) {
    this.client = axios.create({
      baseURL: 'https://iwoozie.baby',
      headers: apiKey ? { 'x-api-key': apiKey } : {}
    });
  }

  /**
   * Quick bypass route
   * @param url The URL to bypass
   */
  async bypass(url: string): Promise<BypassResponse> {
    const response = await this.client.get('/api/bypass', {
      params: { url }
    });
    return response.data;
  }

  /**
   * Long-lived bypass route
   * @param url The URL to bypass
   */
  async bypassV2(url: string): Promise<LongBypassResponse> {
    const response = await this.client.get('/api/v2/bypass', {
      params: { url }
    });
    return response.data;
  }

  /**
   * Check the status of a long-lived bypass
   * @param id The thread ID to check
   */
  async threadCheck(id: string): Promise<ThreadCheckResponse> {
    const response = await this.client.get('/api/v2/threadcheck', {
      params: { id }
    });
    return response.data;
  }

  /**
   * Check API status
   */
  async status(): Promise<ApiStatusResponse> {
    const response = await this.client.get('/api/status');
    return response.data;
  }

  /**
   * Free bypass route (no API key required)
   * @param url The URL to bypass
   */
  async freeBypass(url: string): Promise<BypassResponse> {
    const response = await this.client.get('/api/free/bypass', {
      params: { url }
    });
    return response.data;
  }
}

export default TRW; 