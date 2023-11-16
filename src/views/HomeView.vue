<template>
  <div id="page-home">
    <div class="content-wrapper">
      <img src="../assets/logo.svg" alt="logo happy" class="logo"/>

      <main>
        <h1>Leve felicidade para o mundo</h1>
        <p>Visite orfanatos e mude o dia de muitas crianças.</p>
      </main>

      <div class="location">
        <strong>Russas</strong>
        <span>Ceará</span>
      </div>
      <router-link to="/map" class="enter-app">
        <fa icon="arrow-right" class="icon" />
      </router-link>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
  #page-home {
    width: 100vw;
    height: 100vh;
    background: var(--gradiente-blue, linear-gradient(330deg, #29B6D1 0%, #00C7C7 100%));

    display: flex;
    justify-content: center;
    align-items: center;
  }

  #page-home .content-wrapper {
    position: relative;
    width: 100%;
    max-width: 1100px;
    height: 100%;
    max-height:560px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;

    background: url('../assets/ilustration-home.svg') no-repeat 80% center;
    background-size: 40%;
  }

  #page-home .content-wrapper main {
    max-width: 350px;
  }

  #page-home .content-wrapper main h1 {
    font-size: 76px;
    font-weight: 900;
    line-height: 70px
  }
  
  #page-home .content-wrapper main p {
    margin-top: 40px;
    font-size: 24px;
    line-height: 34px
  }

   .logo {
  width: 240px;
  height: 74px;
  flex-shrink: 0;
 }

 .content-wrapper .location {
    position: absolute;
    right: 0;
    top: 0;

    font-size: 24px;
    line-height: 34px;

    display: flex;
    flex-direction: column;

    text-align: right;
 }

 .content-wrapper .location strong {
  font-weight: 800;
 }

 .content-wrapper .enter-app {
  width: 80px;
  height: 80px;
  border-radius: 30px;
  background: var(--color-yellow, #FFD666);
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s;
}

.content-wrapper .enter-app:hover {
  background: #96FEFF;
}

.content-wrapper .enter-app .icon {
  color: #8D734B;
  width: 32px;
  height: 32px;
  
}

</style>
