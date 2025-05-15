const map = L.map('map').setView([48, 10], 3);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 18
}).addTo(map);

const cityData = [
  ["New York City (United States)", 40.7128, -74.0060, 81],
  ["Paris (France)", 48.8566, 2.3522, 32],
  ["Vienna (Austria)", 48.2082, 16.3738, 32],
  ["Rome (Italy)", 41.9028, 12.4964, 20],
  ["London (United Kingdom)", 51.5074, -0.1278, 17],
  ["Munich (Germany)", 48.1351, 11.5820, 16],
  ["Berlin (Germany)", 52.5200, 13.4050, 12],
  ["Dresden (Germany)", 51.0504, 13.7373, 9],
  ["Barcelona (Spain)", 41.3851, 2.1734, 8],
  ["Chicago (United States)", 41.8781, -87.6298, 7],
  ["Italy (nation)", 42.8333, 12.8333, 7],
  ["Stuttgart (Germany)", 48.7758, 9.1829, 6],
  ["Hague (Netherlands)", 52.0705, 4.3007, 6],
  ["Los Angeles (United States)", 34.0522, -118.2437, 5],
  ["Dusseldorf (Germany)", 51.2277, 6.7735, 5],
  ["Helsinki (Finland)", 60.1695, 24.9354, 4],
  ["Madrid (Spain)", 40.4168, -3.7038, 4],
  ["Copenhagen (Denmark)", 55.6761, 12.5683, 4],
  ["Bogotá (Colombia)", 4.7110, -74.0721, 4]
];

cityData.forEach(([name, lat, lon, count]) => {
  L.circleMarker([lat, lon], {
    radius: Math.sqrt(count) * 2.2,
    color: '#1d4e4e',
    fillColor: '#8fd5e8',
    fillOpacity: 0.6,
    weight: 1
  }).bindPopup(`<strong>${name}</strong><br/>Artists: ${count}`).addTo(map);
});