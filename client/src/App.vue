<template>
  <div id="app">
      <div class="container">
        <div class="row">
           <nav-component></nav-component>
          <router-view class="adjustedHeight"/>
        </div>
       
        </div>
  </div>
</template>

<script>
import navComponent from '../src/components/navbar'
export default {
  name: 'App',
  components: {
    navComponent
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.adjustedHeight{
  margin-top: 70px;


}
</style>
