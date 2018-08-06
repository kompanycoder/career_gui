<template>
  <div class="container">
    <b-row class="justify-content-md-center">
    <b-col cols="6">
      <h2>Please Register</h2>
      <div v-if="errors && errors.length">
        <div v-for="error of errors" :key="error.id">
          <b-alert show>{{error.message}}</b-alert>
        </div>
      </div>
      <b-form>
          <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  description="Email that you use.."
                  label="Enter your email"
                  label-for="inputHorizontal">
            <b-form-input id="inputHorizontal" v-model="user.email"></b-form-input>
          </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  description="Input a strong password"
                  label="Enter your password"
                  label-for="inputHorizontal">
                  
          <b-form-input type="password" id="inputHorizontal" v-model="user.password"></b-form-input>
        </b-form-group>
        <button class="btn btn-primary" type="submit" @click="Register()">Register</button>
        <b-button type="button" variant="success" @click="$router.go(-1)">Cancel</b-button>
      </b-form>
    </b-col>
  </b-row>
  </div>
</template>

<script>

import axios from 'axios'
export default {
  name: 'Register',
  data () {
    return {
      errors: [],
      user:{email:'',
      password:''
      }
    }
  },
  methods: {
    Register(){
      console.log("Congrats, "+this.user.email+" you're Registered as a new user.")

    }
  }
}
</script>