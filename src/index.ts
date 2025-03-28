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

class TRW {
  private client: AxiosInstance;

  constructor(apiKey?: string) {
    this.client = axios.create({
      baseURL: 'https://iwoozie.baby',
      headers: apiKey ? { 'x-api-key': apiKey } : {}
    });
  }

  async bypass(url: string): Promise<BypassResponse> {
    const response = await this.client.get('/api/bypass', {
      params: { url }
    });
    return response.data;
  }

  async bypassV2(url: string): Promise<LongBypassResponse> {
    const response = await this.client.get('/api/v2/bypass', {
      params: { url }
    });
    return response.data;
  }

  async threadCheck(id: string): Promise<ThreadCheckResponse> {
    const response = await this.client.get('/api/v2/threadcheck', {
      params: { id }
    });
    return response.data;
  }

  async status(): Promise<ApiStatusResponse> {
    const response = await this.client.get('/api/status');
    return response.data;
  }

  async freeBypass(url: string): Promise<BypassResponse> {
    const response = await this.client.get('/api/free/bypass', {
      params: { url }
    });
    return response.data;
  }
}

module.exports = TRW;