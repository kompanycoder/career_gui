<template>
 <div fluid class="container-fluid row">
    <b-carousel id="carousel1" class="col-lg-12"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="100%"
                img-height="100%"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <!-- Text slides with image -->
      <b-carousel-slide caption="Career_gui"
                        text="Welcome to the latest career guidance system."
                        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">
      </b-carousel-slide>
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>About us</h1>
      </b-carousel-slide>
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>See what they became</h1>
      </b-carousel-slide>
    

     
      

    </b-carousel>
</div>
</template>
<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }

}
</script>

<style scoped>
</style>
