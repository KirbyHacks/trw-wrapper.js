# trw-wrapper

A Node.js wrapper for the TheRealWoozie API.

## Installation

```bash
npm install trw-wrapper
```

## Usage

### TypeScript Example

```typescript
import TRW from 'trw-wrapper';

// Initialize with API key for premium features
const api = new TRW('your-api-key');

// Or initialize without API key for free features only
const freeApi = new TRW();

// Quick bypass
const result = await api.bypass('https://linkvertise.com/106636/XRayUpdate');

// Long-lived bypass
const longBypass = await api.bypassV2('https://linkvertise.com/106636/XRayUpdate');
const status = await api.threadCheck(longBypass.ThreadID);

// Check API status
const apiStatus = await api.status();

// Free bypass (no API key required)
const freeResult = await api.freeBypass('https://linkvertise.com/106636/XRayUpdate');
```

### JavaScript Example

```javascript
// Import the TRW class from the package
const TRW = require('trw-wrapper');

// Initialize the API client with your API key
const api = new TRW('your-api-key-here');

// Example function to demonstrate usage
async function runExample() {
  try {
    // Quick bypass example
    const bypassResult = await api.bypass('https://linkvertise.com/106636/XRayUpdate');
    console.log('Bypass Result:', bypassResult);

    // Long-lived bypass example
    const longBypassResult = await api.bypassV2('https://linkvertise.com/106636/XRayUpdate');
    console.log('Long Bypass Result:', longBypassResult);

    // Check the status of a long-lived bypass
    const threadCheckResult = await api.threadCheck(longBypassResult.ThreadID);
    console.log('Thread Check Result:', threadCheckResult);

    // Check API status
    const apiStatus = await api.status();
    console.log('API Status:', apiStatus);

    // Free bypass example (no API key required)
    const freeBypassResult = await api.freeBypass('https://linkvertise.com/106636/XRayUpdate');
    console.log('Free Bypass Result:', freeBypassResult);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Run the example
runExample();
```

## API Methods

- `bypass(url: string)`: Quick bypass route
- `bypassV2(url: string)`: Long-lived bypass route
- `threadCheck(id: string)`: Check status of long-lived bypass
- `status()`: Check API status
- `freeBypass(url: string)`: Free bypass route

## License

MIT
