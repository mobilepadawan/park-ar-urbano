const mapContainer = document.getElementById('map');
const walletDialog = document.getElementById('wallet-dialog');
const profileDialog = document.getElementById('profile-dialog');
const historyDialog = document.getElementById('history-dialog');
const infoDialog = document.getElementById('info-dialog');

let map;

function obtenerUbicacion() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            map.setView([latitude, longitude], 13);
            L.marker([latitude, longitude]).addTo(map)
                .bindPopup('You are here!')
                .openPopup();
        }, () => {
            alert('Geolocation service failed.');
        });
    } else {
        alert('Geolocation is not supported by this browser.');
    }
}

function initMap() {
    map = L.map(mapContainer).setView([0, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        // minZoom: 14,
    }).addTo(map);
    obtenerUbicacion();
}

initMap();

document.getElementById('wallet-button').addEventListener('click', () => {
    walletDialog.showModal();
});

document.getElementById('profile-button').addEventListener('click', () => {
    profileDialog.showModal();
});

document.getElementById('history-button').addEventListener('click', () => {
    historyDialog.showModal();
});

document.getElementById('info-button').addEventListener('click', () => {
    infoDialog.showModal();
});

document.querySelectorAll('.close-dialog').forEach(button => {
    button.addEventListener('click', () => {
        button.closest('dialog').close();
    });
});