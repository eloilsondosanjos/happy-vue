<template>
  <div ref="map" class="map-container"></div>
</template>

<script>
import mapboxgl from 'mapbox-gl';


export default {
  name: 'Mapbox',
  data() {
    return {
      map: null,
      directions: null,
      marker: null,
      token: 'pk.eyJ1IjoiZWxvaWxzb25kb3NhbmpvcyIsImEiOiJjbHA4ajl5NzMwZXlvMmlqemNhZW84aTR0In0.xENAgw6IFeodsjlMFK8csw'
    };
  },
  async mounted() {
    try {
      mapboxgl.accessToken = this.token

      this.map = new mapboxgl.Map({
        container: this.$refs.map,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-37.978384, -4.935428],
        zoom: 15,
      });

      this.marker = new mapboxgl.Marker({
        color: '#FFD666'
      }).setLngLat([-37.978384, -4.935428]).addTo(this.map);

      const apiKey = this.token
      const url = `https://api.mapbox.com/directions/v5/mapbox/driving/-37.978384%2C-4.935428%3B-37.9860609%2C-4.93601?alternatives=true&geometries=geojson&language=en&overview=full&steps=true&access_token=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        this.directions = data;
      } catch (error) {
        console.error('Erro ao obter direções:', error);
      }

      this.map.addLayer({
        id: 'route',
        name:'Eloilson dos Anjos',
        type: 'line',
        source: {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: this.directions.routes[0].geometry.coordinates,
            },
          },
        },
        layout: {
          'line-join': 'round',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#888',
          'line-width': 8,
        },
      })

      if (this.marker) {
        this.marker.remove();
      }    
      
      const markers = this.directions.routes[0].geometry.coordinates

      if (markers.length >= 2) {
      const firstMarker = markers[0];
      const lastMarker = markers[markers.length - 1];

      this.marker = new mapboxgl.Marker({ color: '#FFD666' })
        .setLngLat(firstMarker)
        .addTo(this.map);

      new mapboxgl.Marker()
      .setLngLat(lastMarker)
      .addTo(this.map);
    }

    } catch (error) {
    }    
  },
}
</script>

<style scoped>
.map-container {
  width: 100vw;
  height: 100vh;
  color: black;
}
</style>
