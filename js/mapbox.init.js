mapboxgl.accessToken = 'pb=!1m18!1m12!1m3!1d3956.704379841988!2d108.5555863142807!3d-7.38698697476677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6589bdf2a9a021%3A0x963729f09f0b4562!2sJasa%20Digital%20Marketing%20-%20Panduan%20Code!5e0!3m2!1sid!2sid!4v1641814367167!5m2!1sid!2sid';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
	center: [-73.9751,40.7289], // starting position
    zoom: 13 // starting zoom
});
		
// create the popup
var popup = new mapboxgl.Popup({ offset: 40 }).setText(
    '756 Livingston Street, Brooklyn, NY 11201'
);

// create DOM element for the marker
var el = document.createElement('div');
el.id = 'marker';
 
// create the marker
new mapboxgl.Marker(el)
    .setLngLat([-73.9751,40.7289])
    .setPopup(popup) // sets a popup on this marker
    .addTo(map);

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

// disable map zoom when using scroll
map.scrollZoom.disable();
