# Project Title - WeatherToday
A weather web app built with React.

This project is a weather web app that uses the OpenWeather API to fetch weather data. You can search for locations around the world, or click the My Location button to search for your current location automatically.

## Code Showcase
- This project displays time according to the user's local time zone. This is achieved using JavaScript's built-in `Date` object and the `.getTimezoneOffset()` method, among other features. This ensures that the displayed time is always relevant to the user, no matter where they are located.
- You can search for a city followed by a country code to ensure you get the right forecast. Input will be validated and throw an error if a location and/or a country code are invalid.
- You can switch between metric/imperial unit system (°C/°F). The component with the forecast will be updated using useEffect react hook.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
You need to have the latest version of Node.js and npm installed. If not, you can download them from [here](https://nodejs.org/en/download).

### Dependencies
This project uses the following dependencies which will be installed automatically when you run `npm install`:
- Axios
- React-Bootstrap
- React Spinners
- Weather Icons React
- And others (refer to `package.json` for the full list)

### Installing
Follow these steps to get a development environment running:
1. Clone the repo: `git clone https://github.com/Lia-O1/weather-react.git`
2. Install NPM packages: `npm install`
3. Start the server: `npm start` (this will start the development server and open the app in a web browser)

## Live Version
A live version of the project is hosted on Netlify and can be accessed [here](https://jovial-bienenstitch-a81bd9.netlify.app/)
