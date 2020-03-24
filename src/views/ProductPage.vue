<template>
    <div class="container-fluid fluid">
        <div class="container mt-5 flu">
        <div class="row ro">
            <div class="col-lg-3">
                <img :src="myProducts.imageLink" height="200" width="180"> 
            </div>

            <div class="col-lg-9 co">
            <h3>{{myProducts.name}} <span class="icon"><i class="far fa-heart"></i></span></h3>
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i><span>({{ myProducts.usersRating}} ratings)</span>
             <hr class="my-4">
            <h3><b>&#x20A6;{{myProducts.price}}</b></h3>
            <hr class="my-4">
           
            <button type="button" class="text-white btn btn-warning btn-lg btn-block"><span class="cart"><i class="fa fa-cart-plus"></i> </span>ADD TO CART</button>
            </div>
        </div>
    </div>

    <div class="container mt-4 mb-3 flu">
        <h5>Product Description</h5>
        <hr class="my-4">
        <p>{{myProducts.Desc}}</p>  
    </div>

    </div>
    

    

</template>

<script>
export default {
    computed: {
        myProducts(){
            return this.$store.state.productImageSelections;
        }
    }
}
</script>

<style scoped>
.fluid{
    border: 1px solid #fff;
    background-color: #eee;
}

.flu{
    
    border-radius: 10px;
    width: 70%;
    margin-left: 6rem;
    background-color: #fff;
    padding: 10px;

}
.icon{
    float: right;
    color: orange;
}
.cart{
    color: #fff;
    float: left;
}



</style>