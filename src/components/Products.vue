<template>
<div class="products">
    <div class="card card-1 " style="width: 18rem;">
        <img :src="product.imageLink" height="200">
            <div class="card-body">
                <h5 class="card-title">{{product.name}}</h5>
                <p class="card-text">&#x20A6;{{product.price}}</p>
                <a href="#" class="btn btn-primary">Buy now</a>
        </div>
</div>
    </div>
</template>

<script>
export default {

    props: ['product'],


}
</script>

<style scoped>
    .products{
        display: inline-block;
        padding: 10px;
        
        
    }
    .card-1{
        box-shadow: 0 15px 30px rgba(100, 105, 100, 0.7);
        

    }
    .card-1:hover{
        background-color: #bbcfff;
    }

    
</style>