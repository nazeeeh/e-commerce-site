<template>
  <div id="app">
    <Header />
       
        <div class="container-fluid mt-5">
          <div class="row">
            <div class="col-sm-3 cat-container">
              <h4>Categories</h4>
              <Categories v-for="cart in categories" :carts="cart" :key="cart.id" />
            </div>
            
            <div class="col-lg-9 ">
              <h2>Shop now</h2>
                <Products :product="item" v-for="item in products" :key="item.id"/>
            </div>
          </div>
        </div>
    

    
  </div>
</template>

<script>

import Header from "./components/Header"
import Categories from "./components/Categories"
import Products from "./components/Products"


export default {
  name: 'App',

  data(){

        return {
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

      products: [
                {
                name: "camera",
                price: "50,000",
                imageLink: require("@/assets/products/camera.jpg"),
                categoryId: "1"
            },
             {
                name: "camera",
                price: "80,000",
                imageLink: require("@/assets/products/canon2.jpg"),
                categoryId: "2"
            },
             {
                name: "camera",
                price: "60,000",
                imageLink: require("@/assets/products/canon3.jpg"),
                categoryId: "3"
            },
             {
                name: "headphone",
                price: "15,000",
                imageLink: require("@/assets/products/headphone1.jpg"),
                categoryId: "4"
            },
             {
                name: "headphone",
                price: "10,000",
                imageLink: require("@/assets/products/headphone2.jpg"),
                categoryId: "5"
            },
             {
                name: "headphone",
                price: "15,000",
                imageLink: require("@/assets/products/headphone3.jpg"),
                categoryId: "6"
            },
             {
                name: "iphone11",
                price: "400,000",
                imageLink: require("@/assets/products/iphone11.jpg"),
                categoryId: "7"
            },
             {
                name: "iwatch",
                price: "35,000",
                imageLink: require("@/assets/products/iwatch2.jpg"),
                categoryId: "8"
            },
             {
                name: "iwatch",
                price: "30,000",
                imageLink: require("@/assets/products/iwatch3.jpg"),
                categoryId: "9"
            },
             {
                name: "macbook",
                price: "265,000",
                imageLink: require("@/assets/products/macbook.jpg"),
                categoryId: "10"
            }

            ]
    }
  },

  components: {
   Header,
   Categories,
   Products
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  
}

h2, h4{
  text-align: center;
  font-weight: bold;
}

.cat-container{
  margin-top: 50px;
}
</style>
