# trw-wrapper

A Node.js wrapper for the TheRealWoozie API.

## Installation

```bash
npm install trw-wrapper
```

## Usage

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

## API Methods

- `bypass(url: string)`: Quick bypass route
- `bypassV2(url: string)`: Long-lived bypass route
- `threadCheck(id: string)`: Check status of long-lived bypass
- `status()`: Check API status
- `freeBypass(url: string)`: Free bypass route

## License

MIT