# Vanta CDN

## Overview

A lightweight client-side analytics and session tracking library served via CDN for StephensCode LLC projects. Vanta CDN provides a drop-in JavaScript snippet that captures user sessions, interaction events, and page metadata, then beacons the data to the Vanta API for analysis.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Language** | Vanilla JavaScript (ES5 IIFE) |
| **Transport** | Navigator.sendBeacon API |
| **API Target** | https://api.stephenscode.ai |
| **Distribution** | CDN-hosted static scripts |

## Features

- **Zero-Dependency Tracking** — Pure vanilla JavaScript with no external libraries required
- **Session Management** — Generates unique session IDs with timestamp and random hash
- **Event Capture** — Tracks click, scroll, and mousemove events with coordinates and timestamps
- **Page Metadata** — Collects URL, referrer, user agent, and viewport dimensions
- **Beacon Transport** — Uses Navigator.sendBeacon for reliable data delivery, even on page unload
- **Lazy Loading** — Init script dynamically loads the main tracker only when an API key is present
- **Configurable API Endpoint** — Override the default API URL via data attributes or query parameters
- **Minimal Footprint** — Two tiny scripts that add negligible overhead to any page

## Getting Started

### Integration

Add the init script to any HTML page with your Vanta API key:

```html
<script src="https://cdn.stephenscode.dev/init.js" data-vanta-key="YOUR_API_KEY"></script>
```

The init script automatically loads `vanta.js` with the provided key. No additional configuration is needed.

### Custom API Endpoint

To point to a different API server:

```html
<script src="https://cdn.stephenscode.dev/init.js" data-vanta-key="YOUR_API_KEY" data-api="https://your-api.example.com"></script>
```

## How It Works

1. `init.js` reads the `data-vanta-key` attribute from its script tag
2. It dynamically injects `vanta.js` into the page head with the API key as a query parameter
3. `vanta.js` initializes a session, begins capturing interaction events, and stores them in memory
4. On `beforeunload`/`unload`, the collected session data is sent to the Vanta API via `navigator.sendBeacon`

## Project Structure

```
vanta-cdn/
  init.js      # Bootstrap loader that injects the tracker
  vanta.js     # Core session tracking and event capture
```

## Data Collected

| Field | Description |
|-------|-------------|
| `key` | Your Vanta API key |
| `sessionId` | Unique session identifier |
| `url` | Current page URL |
| `referrer` | Referring page URL |
| `userAgent` | Browser user agent string |
| `width`/`height` | Viewport dimensions |
| `events` | Array of interaction events (type, coordinates, timestamp) |

## License

Proprietary — StephensCode LLC. All rights reserved.

---

**Built by StephensCode LLC**
