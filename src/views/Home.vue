<template>
  <div id="app">
    <Header />
    
        <div class="container mt-3 main">
          <div class="row">
            <div class="col-sm-3 cat-div">
              <ul class="list-group li-div">
                <li class="list-group-item active">Categories</li>
              </ul>  
              <Categories v-for="cart in categories" :carts="cart" :key="cart.id" />
            </div>
            <div class="col-lg-6 carousel-div">
              <Carousel :caro="imageCarousel"/>
            </div>
            <div class="col-lg-3 mt-3">
              <div class="card">
                <div class="card-header">
                  50% Discounts Hurry!
                </div>
                <div class="card-body">
                  <h5 class="card-title">Special packages</h5>
                  <p class="card-text">With touch N' carry your gadgets are assured and reliable, get started.</p>
                  <a href="#" class="btn btn-primary">for more info</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container mt-3 icon-container">
          <div class="row">
            <div class="col-lg-3">
              <div class="card">
                <div class="card-body">
                <span class="i-widgets"><i class="fa fa-truck" aria-hidden="true"></i></span><h6>free Delivery</h6>
                </div>
            </div>
            </div>
            <div class="col-lg-3">
              <div class="card">
                <div class="card-body">
                <span class="i-widgets"><i class="fas fa-store"></i></span><h6>goods and services</h6>
                </div>
            </div>
            </div>
            <div class="col-lg-3">
              <div class="card">
                <div class="card-body">
                <span class="i-widgets"><i class="fa fa-plane" aria-hidden="true"></i></span><h6>Global now</h6>
                </div>
            </div>
            </div>
            <div class="col-lg-3">
              <div class="card">
                <div class="card-body">
               <span class="i-widgets"><i class="fa fa-cart-plus"></i></span><h6>Shop with us</h6>
                </div>
            </div>
            </div>
          </div>

          </div>

        <div class="container mt-4 product-div">
            <div class="card bg-light mt-3 mb-3">
              <div class="card-header text-white bg-primary"><h3>Top Selling Items</h3></div>
                <div class="card-body">
                  <Products :product="item" v-for="item in displayProducts" :key="item.id"/>
              </div>
          </div>
                
        </div>

        
        <Footer />

        
  </div>
</template>

<script>

import Header from "../components/Header"
import Categories from "../components/Categories"
import Products from "../components/Products"
import Footer from "../components/Footer"
// import { Carousel, Slide } from 'vue-carousel'
import Carousel from "../components/Carousel"


export default {
  name: 'Home',

  data(){

        return {

          imageCarousel : [
            {
            imageDisplay: require("../assets/carousel/caro1.jpg")
          },
           {
            imageDisplay: require("../assets/carousel/caro2.jpg")
          },
           {
            imageDisplay: require("../assets/carousel/caro3.jpg")
          }

          ],

            categories: [
            {
            id: 1,
            categoryName: "Wristwatches"
        },
            {
            id: 2,
            categoryName: "Headphones"
        },
            {
            id: 3,
            categoryName: "laptops"
        },
            {
            id: 4,
            categoryName: "Camera"
        },
            {
            id: 5,
            categoryName: "Earpieces"
        }
      ], 
    }   
  },

   

    computed: {
      displayProducts(){
        return this.$store.state.products;
      }
    },
 

  components: {
   Header,
   Categories,
   Products,
   Carousel,
   Footer
  //  Slide
  }
}
</script>

<style>
.carousel-div{
  cursor: pointer;
}

h2, h4{
  text-align: center;
  
}
.li-div{
  width: 90%;
  text-align: center;
  font-weight: bold;
  margin-top: 10px;
}

.box{
  border-radius: 10px;
  
  margin: 10px;
}

.icon-container:hover{
  cursor: pointer;
}

.i-widgets{
  float: right;
  border-radius: 100%;
  color: orangered;
}


</style>
