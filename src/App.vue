<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #485460;
}

.card {
  margin: 1rem;
  border: 1px solid #d2dae2;
  box-shadow: 2px 4px 8px #d2dae2;
  border-radius: 3px;
}

.half-width {
  width: 50%;
  margin: 1rem auto;
}

.split {
  display: flex;
}

.half-card {
  width: 50%;
  padding: 1rem;
}

.dark {
  background: #485460;
  color: #fff;  
}

@media screen and (max-width: 800px) {
  .half-width {
    width: 80%;
  }

  .split {
    display: flex;
    flex-direction: column;
  }

  .half-card {
    width: initial;
  }
}
</style>
