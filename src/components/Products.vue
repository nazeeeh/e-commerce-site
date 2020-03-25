<template>
    <div class="products">
        <a @click="selectProduct(product)">
            <div class="card-1">
                <img :src="product.imageLink" height="150" width="190">
                <h6>{{product.name}}</h6>
                <p>&#x20A6;{{product.price}}</p>
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
        width: 20%;
    }
    .card-1{
        box-shadow: 0 15px 30px rgba(100, 105, 100, 0.7);
        cursor: pointer;  
        border-radius: 10px; 


    }
    .card-1:hover{
        background-color: #eee;
    }

</style>