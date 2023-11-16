<template>
  <div id="page-map">
    <aside>
      <header>
        <img src="../assets/map-marker.svg" alt="logo happy" class="map-marker" />
        <h2>Escolha um orfanato no mapa</h2>
        <p>Muitas crianças estãoesperando a sua visita :)</p>
      </header>

      <footer>
        <strong>Russas</strong>
        <span>Ceará</span>
      </footer>
    </aside>
    <Mapbox />
    <router-link to="/orphanage" class="create-orphanage">
      <fa icon="plus" class="icon" />
    </router-link>
  </div>
</template>

<script>
import Mapbox from '../components/Mapbox.vue';

export default {
  components: {
    Mapbox,
  },
};
</script>

<style scoped>
#page-map {
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
}

#page-map aside {
  width: 440px;
  background: var(--gradiente-blue, linear-gradient(330deg, #29B6D1 0%, #00C7C7 100%));
  padding: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#page-map aside h2 {
  font-size: 40px;
  font-weight: 800;
  line-height: 42px;
  margin-top: 64px;
}

#page-map aside p {
  line-height: 28px;
  margin-top: 24px;
}

#page-map aside footer {
  display: flex;
  flex-direction: column;
  line-height: 24px;
}

#page-map aside footer strong {
  font-weight: 800;
}

#page-map .create-orphanage {
  position: absolute;
  right: 40px;
  bottom: 40px;

  width: 64px;
  height: 64px;
  background: #15C3D6;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s;
  color: #FFF;
}

#page-map .create-orphanage:hover {
  background: #17D6EB;
}

</style>
