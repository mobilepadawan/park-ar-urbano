# Leaflet Geolocation App

This project is a web application that utilizes Leaflet to display a map based on the user's geolocation. The application features a modern floating toolbar with rounded edges, styled to resemble the recent iOS design language. Each button in the toolbar opens a full-screen dialog for user interaction.

## Features

- Full-screen map displaying the user's current location.
- Floating toolbar with transparent buttons for easy access to different sections:
  - **Billetera** (Wallet)
  - **Perfil** (Profile)
  - **Historial** (History)
  - **Información** (Information)
- Each section opens in a full-screen dialog with a close button.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Leaflet.js for map rendering
- Geolocation API for user location

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/leaflet-geolocation-app.git
   ```

2. Navigate to the project directory:
   ```
   cd leaflet-geolocation-app
   ```

3. Open `src/index.html` in your web browser to view the application.

## File Structure

```
leaflet-geolocation-app
├── src
│   ├── index.html        # Main HTML document
│   ├── styles
│   │   └── main.css      # Styles for the application
│   ├── js
│   │   └── app.js        # JavaScript code for functionality
│   └── assets
│       └── icons
│           ├── wallet.svg # Icon for Wallet button
│           ├── profile.svg # Icon for Profile button
│           ├── history.svg # Icon for History button
│           └── info.svg    # Icon for Information button
├── README.md             # Project documentation
└── package.json          # NPM configuration file
```

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the project.