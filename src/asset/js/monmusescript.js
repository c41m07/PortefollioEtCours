// Note : La bibliothèque PhotoSphereViewer est chargée via jsDelivr.
// Pour plus d’informations, consultez : https://www.jsdelivr.com/documentation

window.addEventListener('load', function () {
    const viewer = new PhotoSphereViewer({
        panorama: '../asset/img/360.jpg',
        container: document.querySelector('#viewer'),
        caption: 'Musée Virtuel - Salle 1',
        loadingImg: '../asset/img/360.jpg',
        defaultLat: 0.3,
        defaultLong: 0.1,
        touchmoveTwoFingers: true,
        navbar: ['fullscreen', 'autorotate', 'zoom']
    });

    viewer.once('ready', () => {
        viewer.addMarker({
            id: 'tableau1',
            longitude: 0.2,
            latitude: 0.1,
            image: 'https://img.icons8.com/ios-filled/50/000000/info.png',
            width: 32,
            height: 32,
            anchor: 'bottom center',
            tooltip: {
                content: 'Voir le tableau',
                position: 'top center',
            },
            data: {
                title: 'Mona Lisa',
                description: 'Une œuvre célèbre de Léonard de Vinci.'
            }
        });
    });

    viewer.on('click', (event, marker) => {
        if (marker) {
            alert(`Titre : ${marker.data.title}\nDescription : ${marker.data.description}`);
        }
    });
});
