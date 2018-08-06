<template>
  <div class="container">
    <b-row class="justify-content-md-center">
    <b-col cols="6">
      <h2>Please Register</h2>
      <b-form>
          <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  description="Email that you use.."
                  label="Enter your email"
                  label-for="inputHorizontal">
            <b-form-input id="inputHorizontal" v-model="email"></b-form-input>
          </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  description="Input a strong password"
                  label="Enter your password"
                  label-for="inputHorizontal1">
                  
          <b-form-input type="password" id="inputHorizontal1" v-model="password"></b-form-input>
        </b-form-group>
        <button class="btn btn-primary" type="submit" @click="Register()">Register</button>
        <b-button type="button" variant="success" @click="$router.go(-1)">Cancel</b-button>
      </b-form>
    </b-col>
  </b-row>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
        email:'',
        password:''
    }
  },
  methods: {
    async Register() {
     const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>