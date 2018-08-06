<template>
  <div id="app">
      <div class="container-fluid">
        <div class="row">
           <nav-component class="col-lg-12"></nav-component>
           <nav-login class="col-lg-12 adjusted"></nav-login>
           <router-view class="col-lg-12 adjustedHeight"/>
           </div>
       
        </div>
  </div>
</template>
<script>
import navComponent from '../src/components/navbar'
import navLogin from '../src/components/navlogin'

export default {
  name: 'App',
  components: {
    navComponent,
    navLogin
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
  margin-top: 5px;
  width: auto;
}
.adjusted{
  margin-top: 50px;
}
</style>
