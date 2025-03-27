"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const api = new index_1.TRW('');
async function runExample() {
    try {
        const bypassResult = await api.bypass('https://linkvertise.com/106636/XRayUpdate');
        console.log('Bypass Result:', bypassResult);
        const longBypassResult = await api.bypassV2('https://linkvertise.com/106636/XRayUpdate');
        console.log('Long Bypass Result:', longBypassResult);
        const threadCheckResult = await api.threadCheck(longBypassResult.ThreadID);
        console.log('Thread Check Result:', threadCheckResult);
        const apiStatus = await api.status();
        console.log('API Status:', apiStatus);
        const freeBypassResult = await api.freeBypass('https://linkvertise.com/106636/XRayUpdate');
        console.log('Free Bypass Result:', freeBypassResult);
    }
    catch (error) {
        console.error('An error occurred:', error);
    }
}
runExample();
