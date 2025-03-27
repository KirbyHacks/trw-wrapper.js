"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TRW = void 0;
const axios_1 = __importDefault(require("axios"));
class TRW {
    constructor(apiKey) {
        this.client = axios_1.default.create({
            baseURL: 'https://iwoozie.baby',
            headers: apiKey ? { 'x-api-key': apiKey } : {}
        });
    }
    /**
     * Quick bypass route
     * @param url The URL to bypass
     */
    async bypass(url) {
        const response = await this.client.get('/api/bypass', {
            params: { url }
        });
        return response.data;
    }
    /**
     * Long-lived bypass route
     * @param url The URL to bypass
     */
    async bypassV2(url) {
        const response = await this.client.get('/api/v2/bypass', {
            params: { url }
        });
        return response.data;
    }
    /**
     * Check the status of a long-lived bypass
     * @param id The thread ID to check
     */
    async threadCheck(id) {
        const response = await this.client.get('/api/v2/threadcheck', {
            params: { id }
        });
        return response.data;
    }
    /**
     * Check API status
     */
    async status() {
        const response = await this.client.get('/api/status');
        return response.data;
    }
    /**
     * Free bypass route (no API key required)
     * @param url The URL to bypass
     */
    async freeBypass(url) {
        const response = await this.client.get('/api/free/bypass', {
            params: { url }
        });
        return response.data;
    }
}
exports.TRW = TRW;
exports.default = TRW;
