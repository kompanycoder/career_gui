<template>
<div class="container">
    <div class="row">
        <div class="col-lg-12">
            <h2>Jobs.</h2>
            <b-table :items="items" :fields="fields"></b-table>
        </div>

    </div>
</div>
    
</template>
<script>
export default {
     data () {
    return {
      fields: ['Job_id', 'Job_name', 'Job_description' ],
      items: [
        {Job_id:'1', Job_name: 'Developer', Job_description: 'Codes websites and apps for a living' },
        {Job_id:'2', Job_name: 'Manager', Job_description: 'Manages different businesses' },
        {Job_id:'3', Job_name: 'Engineer', Job_description: 'Designs and builds houses' }
      ],
      
    }
  }
}
</script>
<style scoped>

</style>

