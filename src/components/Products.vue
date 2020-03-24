<template>
    <div class="products">
        <a @click="selectProduct(product)">
        <div class="card card-1 " style="width: 18rem;">
            <img :src="product.imageLink" height="200">
                <div class="card-body">
                    <h5 class="card-title">{{product.name}}</h5>
                    <p class="card-text">&#x20A6;{{product.price}}</p>
                </div>
        </div>
        </a>
    </div>
</template>

<script>
export default {
    props: ['product'],

     methods: {
         selectProduct(product){
            this.$store.commit("setSelectedProductImage", product)

            this.$router.push({path: '/product'})
         }
    },
   
}
</script>

<style scoped>
    .products{
        display: inline-block;
        padding: 10px;
    }
    .card-1{
        box-shadow: 0 15px 30px rgba(100, 105, 100, 0.7);
        cursor: pointer;   

    }
    .card-1:hover{
        background-color: #eee;
    }

</style>