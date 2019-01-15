# sol-cycle-mobile

A React Native mobile app version of my SOL-Cycle web app.

SOL-Cycle is a place to quickly find up-to-the-minute UV Index information for a user's current location, or any location in the United States

## APIs

SOL_Cycle uses a double API call because DarkSky only uses coordinates (and no one really knows their coordinates off hand).
After a user has registered an account (which includes their home city and state) this application makes an API call to the Google GeoCoding API.
Google GeoCoding takes their city/state and returns latitude/longitude coordinates.
These coordinates are then sent to DarkSky, which returns the UV Index.

## Locations and Forecast
