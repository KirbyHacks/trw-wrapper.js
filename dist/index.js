"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class TRW {
    client;
    constructor(apiKey) {
        this.client = axios_1.default.create({
            baseURL: 'https://iwoozie.baby',
            headers: apiKey ? { 'x-api-key': apiKey } : {}
        });
    }
    async bypass(url) {
        const response = await this.client.get('/api/bypass', {
            params: { url }
        });
        return response.data;
    }
    async bypassV2(url) {
        const response = await this.client.get('/api/v2/bypass', {
            params: { url }
        });
        return response.data;
    }
    async threadCheck(id) {
        const response = await this.client.get('/api/v2/threadcheck', {
            params: { id }
        });
        return response.data;
    }
    async status() {
        const response = await this.client.get('/api/status');
        return response.data;
    }
    async freeBypass(url) {
        const response = await this.client.get('/api/free/bypass', {
            params: { url }
        });
        return response.data;
    }
}
module.exports = TRW;
