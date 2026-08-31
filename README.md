# NetAPI Studio — Networking Apps & APIs

A browser-based developer/admin portal for networking applications and APIs.

## Features

- Networking API dashboard
- OAuth-style application/client management
- API endpoint CRUD
- API key generation, enable/disable and revoke
- Webhook CRUD and test delivery simulation
- API playground
- Request logs
- API documentation page
- API analytics
- Gateway settings and rate limits
- Search, edit, delete and export
- LocalStorage persistence
- Responsive UI
- Modular service units (OAuth, gateway, webhooks, domain APIs, …)
- Reference catalogs for apps, APIs, keys, webhooks

## Install

```bash
cd netapi-studio
npm install   # optional, for tests
```

No runtime npm packages required.

## Build

```bash
npm run build
```

Static frontend — no compile step.

## Run

### Option A — Open file

Open `index.html` in a browser.

### Option B — Local server

```bash
python3 -m http.server 8000
# or
npm start
```

Open http://localhost:8000

### Option C — Docker

```bash
docker build -t netapi-studio .
docker run -p 8080:80 netapi-studio
```

## Tests

```bash
npm install
npm test
```

## Security note

This is a frontend demonstration. API calls, API keys, OAuth, webhooks, networking operations and credentials are simulated. **Do not use demo-generated secrets as real credentials.**

Production deployment requires a secure backend, authentication, authorization, encrypted secret storage, TLS, audit logging and server-side validation.

## License

Proprietary — All rights reserved. UNLICENSED.
