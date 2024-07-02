function initMap() {
    // Coordenadas de Blumenau
    var blumenau = { lat: -26.9194, lng: -49.0661 };
    // Locais dos eventos
    var locaisEventos = [
        { lat: -26.91537107713005, lng: -49.08464031656164, titulo: 'Evento 1', descricao: 'FestItália' },
        { lat: -26.91537107713005, lng: -49.08464031656164, titulo: 'Evento 2', descricao: 'Oktoberfest' },
        { lat: -26.91537107713005, lng: -49.08464031656164, titulo: 'Evento 3', descricao: 'Páscoa' },
        { lat: -26.89941854491706, lng: -49.0755755030696, titulo: 'Evento 4', descricao: '2º Medieval in Norden' },
        { lat: -26.91840211537836, lng: -49.068090489576576, titulo: 'Evento 5', descricao: '26º FENATIB' },
        { lat: -26.898074046466924, lng: -49.07774343190549, titulo: 'Evento 6', descricao: 'Especial dia do Motociclista' },
    ];
    // Criação do mapa
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: blumenau
    });
    // Adicionando marcadores no mapa
    locaisEventos.forEach(function (evento) {
        var marker = new google.maps.Marker({
            position: { lat: evento.lat, lng: evento.lng },
            map: map,
            title: evento.titulo
        });
        var infowindow = new google.maps.InfoWindow({
            content: '<h5>' + evento.titulo + '</h5><p>' + evento.descricao + '</p>'
        });
        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
    });
}
