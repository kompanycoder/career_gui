<template>
<div class="container-fluid col-lg-12">
    <nav class="navbar navbar-expand-lg navbar-default bg-dark fixed-top col-lg-12">
        <a class="navbar-brand active" href="#"><router-link to="/">Career_Gui</router-link></a>
       <div class="container ">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse navbar-right" id="navbar">
            <div class="navbar-nav nav-group">
            <a class="nav-item nav-link" href="#"><router-link to="/about">About</router-link></a>
            <a class="nav-item nav-link" href="#"><router-link to="/profile">Profile</router-link></a>
            <a class="nav-item nav-link" href="#"><router-link to="/joblist">Job_List</router-link></a>
            <a class="nav-item nav-link" href="#"><router-link to="/company">Company_List</router-link></a>
            </div>
        </div>
       </div>
       <div>
            <form class="form-inline navbar-right">
                <input class="form-control col-sm-7" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-warning col-sm-4" type="submit">Search</button>
            </form>
       </div>
    </nav>
</div>
</template>
<script>
export default {
    name:'navbar'  
}
</script>
<style scoped>

</style>
