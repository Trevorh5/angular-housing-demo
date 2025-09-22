# Angular Housing Demo

A mini project I made to play around with and refresh myself on modern Angular.

I initially built the app by following the **[First App](https://angular.dev/tutorials/first-app)** tutorial from the Angular docs, then I customized and cleaned it up. It lists housing locations, supports client-side filtering by city, shows a details page per location, and includes a simple application form. A lightweight mock API is provided via json-server.

## Features
- Filter housing locations by city
- View location details (units available, wifi, laundry)
- Submit a demo application form
- Mock API backed by `json-server`

## Tech Stack
- Angular v20 (standalone components)
- TypeScript
- json-server for mock API

## Quick Start

### 1) Prerequisites
- Node.js 18+ and npm
- Angular CLI (optional): `npm i -g @angular/cli`

### 2) Install dependencies
```bash
npm install
```

### 3) Start the mock API (port 3000)
```bash
npm run server
```
This serves `db.json` at `http://localhost:3000/locations`.

### 4) Start the Angular dev server (port 4200)
```bash
npm start
```
Then open `http://localhost:4200`.

Tip: Run the API and the Angular app in separate terminals.

## Scripts
- `npm start`: Run the Angular dev server.
- `npm run server`: Start json-server with `db.json`.

## Project Structure
```
src/
  app/
    home/            # Listing + city filter
    details/         # Details page + application form
    housing.service.ts  # Fetches from http://localhost:3000/locations
    housing-location/   # Location item component and type
  assets/
  index.html
```

## Configuration Notes
- The dev server defaults to port 4200 (Angular CLI).
- The mock API runs on port 3000. `HousingService` points to `http://localhost:3000/locations`.
- Builds output to `dist/first-app` per `angular.json`.

## License
MIT (demo/educational purposes).
