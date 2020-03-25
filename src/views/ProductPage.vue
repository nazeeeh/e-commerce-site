<template>
    <div class="productPage">
        <Header />

        <div>
            <div class="container  mt-5 flu">
              <div class="row">
                <div class="col-lg-3 bg-white">
                    <img :src="myProducts.imageLink" height="200" width="180"> 
                    <div>
                        <hr>
                    </div>
                    <div>
                        <h6>SHARE THIS PRODUCT</h6>
                    </div>
                    <div>
                        <span class="social-icons"><i class="fab fa-facebook-f "></i></span>
                        <span class="social-icons"><i class="fab fa-twitter"></i></span>
                    </div>
                </div>

                <div class="col-lg-6 bg-white">
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
                <hr>
                <div class="promotion">
                    <h6>PROMOTIONS</h6>
                    <ul class="list-unstyled">
                        <li><span class="social-icons"><i class="fas fa-recycle"></i></span><a href="#!">Enjoy free delivery with touch n' carry</a> </li>
                        <li><span class="social-icons"><i class="fas fa-user-shield"></i></span><a href="#!">Stay safe, we make our customers the top priorities</a></li>
                        <li><span class="social-icons"><i class="fas fa-recycle"></i></span><a href="#!">Become our top vendors</a></li>
                    </ul>
                </div>
                </div>

                <div class="col-lg-3">
                    <div class="card">
                        <div class="card-header"><h6>DELIVERY & RETURNS</h6></div>
                        <div class="card-body">
                        <h6 class="card-title">Delivery Information</h6>
                        <p class="card-text">With touch N' carry your gadgets are assured and reliable, get started.</p>
                        <h6 class="card-title">Returns</h6>
                        <p class="card-text">With touch N' carry your gadgets are assured and reliable, get started.</p>
                         </div>
                         
                    </div>
                    <div class="card mt-2">
                        <div class="card-header"><h6>SELLER INFORMATION</h6></div>
                        <div class="card-body">
                        <p class="card-title"><b>Nazih Nigeria Store</b></p>
                        <p><b>100%</b> Positive Seller Score</p>
                        <button class="nazih-btn text-white btn btn-warning">FOLLOW</button>
                         </div>
                    </div>
            </div>
            </div>
    </div>

     <div class="container mt-4 flu">
            <div class="card mt-3 mb-3">
              <div class="card-header text-black"><h5>Product Description</h5></div>
                <div class="card-body">
                <p>{{myProducts.Desc}}</p>
              </div>
          </div>
                
        </div>

    </div>

    <Footer />
    </div>


</template>

<script>
import Header from "../components/Header"
import Footer from "../components/Footer"


export default {
    components: {
        Header,
        Footer
    },

    computed: {
        myProducts(){
            return this.$store.state.productImageSelections;
        }
    }
}
</script>

<style scoped>

.flu{
    
    border-radius: 10px;
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
.social-icons{
    padding: 10px;
    margin-top: 20px;
}
.nazih-btn{
    float: right;
}



</style>