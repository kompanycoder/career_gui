<template>
<div class="container">
    <div class="row">
        <div class="col-lg-12">
            <div class="container alert">
                <p >
                    {{ alert }}
                </p>
            </div>
        </div>
        <div class="row col-lg-12" >
            
            <div class="container">
                <button class="btn-primary rounded btn-block" @click.prevent="switchTabs()">
                Click to Switch between Tabs.
            </button>
            <br><br>
            <div class="container col-lg-12" v-if="toLogin" id="toLogin">
                    
                    <div class="alert">
                        <h3>User Login</h3>
                <form action="" method="post" class="form form-default col-lg-12">
                    
                    <div class="form-group row">
                        <label for="email" class="form-control col-md-2">Email:</label>
                        <input type="email" class="form-control col-md-9" name="" id="" placeholder="Enter your email...">
                    </div>
                    <div class="form-group row">
                        <label class="form-control col-md-2" for="email">Password:</label>
                        <input type="email" class="form-control col-md-9" name="" id="" placeholder="Enter your password...">
                    </div>
                    <div class="form-group row">
                        <button class="btn btn-primary form-control col-md-11" type="submit">Login</button>
                    </div>
                </form>
            </div>
                
            </div>
            
            <div class="container col-lg-12" id="toRegister" v-else>
                <div class="alert">
                    <h3>Register New User</h3>
                <form action="" method="post" class="form col-lg-12">
                    <div class="form-group row">
                        <label for="firstName" class="form-control col-md-2">First_name:</label>
                        <input type="text" class="form-control col-md-9" name="firstName" id="" placeholder="Enter your First_name...">
                    </div>
                    <div class="form-group row">
                        <label for="secondName" class="form-control col-md-2">Second_name:</label>
                        <input type="text" class="form-control col-md-9" name="secondName" id="" placeholder="Enter your Second_name...">
                    </div>
                    <div class="form-group row">
                        <label for="email" class="form-control col-md-2">Email:</label>
                        <input type="email" class="form-control col-md-9" name="" id="" placeholder="Enter your email...">
                    </div>
                    <div class="form-group row">
                        <label class="form-control col-md-2" for="email">Password:</label>
                        <input type="email" class="form-control col-md-9" name="" id="" placeholder="Enter your password...">
                    </div>
                    <div class="form-group row">
                        <label class="form-control col-md-2" for="email"> Confirm Password:</label>
                        <input type="email" class="form-control col-md-9" name="" id="" placeholder="Confirm your password...">
                    </div>
                    <div class="form-group row">
                        <button class="btn btn-primary form-control col-md-11" type="submit">Register</button>
                    </div>
                </form>
                </div>
                
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
      toLogin: true,
      alert: 'welcome to The Authorization Page'
    };
  },
  methods:{
      switchTabs(){
          this.toLogin= true;
          if (this.toLogin == false) {
              this.toLogin= true;
          } else {
              this.toLogin=false; 
          }
      }
  }
};
</script>
<style scoped>
.form {
  float: center;
}
.btn{
    cursor: pointer;
    float: center;
}

</style>
