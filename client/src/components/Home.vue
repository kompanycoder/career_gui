<template>
<div class="jumbotron">
<div class="row col-lg-12">
        <div class=" col-lg-12">
            <h1> {{ display }} </h1>
        </div>
        <div class="row col-lg-12">
         <div class="container col-lg-4">
             <div class="row col-lg-10">
                <img class="img img-responsive" src="../assets/logo.png" alt="Home_display_image">
             </div>
         </div><div class="container col-lg-4">
             <div class="row col-lg-10">
                <img class="img img-responsive float" src="../assets/logo.png" alt="Home_display_image">
             </div>
         </div>
         <div class="container col-lg-4">
             <div class="row col-lg-10">
                <img class="img img-responsive" src="../assets/logo.png" alt="Home_display_image">
             </div>
         </div>

    </div>

</div>
</div>

   
</template>
<script>
export default {
  data() {
    return {
      display: "Welcome to the Career Guidance System! ;)"
    };
  }
};
</script>

<style>
.container {
  float: center;
  width: 100%;
  Height: 100%;
  
}
.img{
    height: auto;
    width: auto;
    position: relative;
    float:center;
}

</style>

