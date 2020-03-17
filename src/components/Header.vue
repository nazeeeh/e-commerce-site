<template>
   
    <nav class="container-fluid navbar navbar-light bg-primary py-4">
       <h2><a class="navbar-brand header-color text-white">{{name}}</a></h2>
         <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-primary "  type="submit">Search</button>
        </form>
    </nav>
   
</template>

<script>
export default {
    data(){
        return{
            name: "Touch N' Carry",
        }
    }
    
}
</script>

<style scoped>
 
</style>