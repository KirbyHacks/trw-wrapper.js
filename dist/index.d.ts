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
export declare class TRW {
    private client;
    constructor(apiKey?: string);
    /**
     * Quick bypass route
     * @param url The URL to bypass
     */
    bypass(url: string): Promise<BypassResponse>;
    /**
     * Long-lived bypass route
     * @param url The URL to bypass
     */
    bypassV2(url: string): Promise<LongBypassResponse>;
    /**
     * Check the status of a long-lived bypass
     * @param id The thread ID to check
     */
    threadCheck(id: string): Promise<ThreadCheckResponse>;
    /**
     * Check API status
     */
    status(): Promise<ApiStatusResponse>;
    /**
     * Free bypass route (no API key required)
     * @param url The URL to bypass
     */
    freeBypass(url: string): Promise<BypassResponse>;
}
export default TRW;
