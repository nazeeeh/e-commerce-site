<template>
    <div class="list-group li-style">
        <a href="#" class="list-group-item list-group-item-action">{{carts.categoryName}}</a>
    </div>
</template>

<script>
export default {
    props: ["carts"],
    
}
</script>

<style scoped>
    .li-style{
        width: 90%;
        margin-top: 3px;
        text-align: center;
        
        
    }
    a:hover{
        background-color: #bbcfff;
        color: #fff
    }
</style>