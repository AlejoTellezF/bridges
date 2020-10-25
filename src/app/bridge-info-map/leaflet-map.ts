import * as L from 'leaflet';

const ontario = {
    coords: new L.LatLng(51.2538, -85.3232),
    zoom: 5
};

const defaultZoom = 14;

export class LeafletMap {
    
    map: L.Map;
    popup: L.Popup;

    constructor(id: string) {
        this.map = L.map(id);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
        .addTo(this.map);

        this.map.setView(ontario.coords, ontario.zoom);
    }

    update(lat: number, lng: number, name: string): void {
        // convert lat/lng to a Leaflet LatLng Object
        const coords = new L.LatLng(lat, lng);

        //Reposition the map to this tocation
        this.map.setView(coords, defaultZoom);

        if(this.popup) {
            this.popup.setLatLng(coords);
            this.popup.setContent(name);
        }else{
            this.popup = L.popup({
                closeButton: false,
                closeOnEscapeKey: false,
                closeOnClick: false
            })
            .setLatLng(coords)
            .setContent(name)
            .openOn(this.map);
        }
    }
}