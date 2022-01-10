mapboxgl.accessToken = 'pk.eyJ1IjoicGFuZHVhbmNvZGUiLCJhIjoiY2s4ZmJqbnBiMDJtZDNmcW9hNm10enE1cCJ9.cYE_V-eWCZFMtdiq9VN5FQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
	center: [-7.385764778867543, 108.55949859458516], // starting position
    zoom: 13 // starting zoom
});
		
// create the popup
var popup = new mapboxgl.Popup({ offset: 40 }).setText(
    'Panduan Code RT 04 RW 19 Dusun Pangadegan, Desa, Hegarsari, Pataruman, Banjar City, West Java 46322'
);

// create DOM element for the marker
var el = document.createElement('div');
el.id = 'marker';
 
// create the marker
new mapboxgl.Marker(el)
    .setLngLat([-7.385764778867543, 108.55949859458516])
    .setPopup(popup) // sets a popup on this marker
    .addTo(map);

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

// disable map zoom when using scroll
map.scrollZoom.disable();
