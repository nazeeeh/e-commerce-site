<template>
    <div class="container-fluid ">
        
            <div v-for="item in products" :key="item.categoryId" class="card-edit">
                <div v-if="categoryId == item.categoryId">
                    <div class="card card-1  " style="width: 18rem;">
                        <img :src="item.imageLink" height="200">
                            <div class="card-body">
                                <h5 class="card-title">{{item.name}}</h5>
                                <p class="card-text">{{item.Description}}</p>
                                <button class="btn btn-dark">Add to cart</button>
                            </div>
                    </div>
                </div>
            </div>     
    </div>

</template>

<script>
export default {

    props: ['pro'],

    data(){
        return {

             categoryId: this.$route.params.id,

             products: [
                   {
                name: "camera",
                Description: "360 spin LED",
                imageLink: require("@/assets/mainProducts/camera.jpg"),
                categoryId: "1"
            },
                  {
                name: "Cannon",
                Description: "Smart Camera, LED lazers",
                imageLink: require("@/assets/mainProducts/canon1.jpg"),
                categoryId: "1"
            },
              {
                name: "Pentex",
                Description: "k50 rowler spins",
                imageLink: require("@/assets/mainProducts/canon2.png"),
                categoryId: "1"
            },
             {
                name: "pentex",
                Description: "z-k5",
                imageLink: require("@/assets/mainProducts/canon3.jpg"),
                categoryId: "1"
            },
                 {
                name: "Spinz",
                Description: "Long led",
                imageLink: require("@/assets/mainProducts/knon.jpg"),
                categoryId: "2"
            },
            {
                name: "Slim canon",
                Description: "z-k5",
                imageLink: require("@/assets/mainProducts/shoot1.jpg"),
                categoryId: "2"
            },
            {
                name: "C-40x",
                Description: "Cannon light",
                imageLink: require("@/assets/mainProducts/shoot2.jpg"),
                categoryId: "2"
            },
            {
                name: "Canon medium",
                Description: "G9 dual battery life",
                imageLink: require("@/assets/mainProducts/shoot3.jpg"),
                categoryId: "2"
            },
              {
                name: "Dk3-Spinez",
                Description: "Detachable lens",
                imageLink: require("@/assets/mainProducts/non.jpg"),
                categoryId: "3"
            },
            {
                name: "Nikon R",
                Description: "Filiming capacity",
                imageLink: require("@/assets/mainProducts/detach1.jpg"),
                categoryId: "3"
            },
            {
                name: "Nikon",
                Description: "99-c Led",
                imageLink: require("@/assets/mainProducts/detach2.jpg"),
                categoryId: "3"
            },
            {
                name: "Nikon-Z lazers ",
                Description: "lazers flash",
                imageLink: require("@/assets/mainProducts/detach3.jpeg"),
                categoryId: "3"
            },
              {
                name: "Dre Beats",
                Description: "elitx",
                imageLink: require("@/assets/mainProducts/Headphone2.jpg"),
                categoryId: "5"
            },

                 {
                name: "Dre Beats",
                Description: "sound master, Alien",
                imageLink: require("@/assets/mainProducts/beat1.jpg"),
                categoryId: "5"
            },
                {
                name: "Dre Beats",
                Description: "Neon Beats, Alien",
                imageLink: require("@/assets/mainProducts/beat2.jpg"),
                categoryId: "5"
            },
              {
                name: "Dre Beats",
                Description: "sound revert",
                imageLink: require("@/assets/mainProducts/beat3.jpg"),
                categoryId: "5"
            },
            {
              name: "Dre Beats",
                Description: "Dual purpose",
                imageLink: require("@/assets/mainProducts/Headphone3.jpg"),
                categoryId: "6"
            },
            {
                name: "Dre Beats",
                Description: "Masterpiece",
                imageLink: require("@/assets/mainProducts/dre1.jpg"),
                categoryId: "6"
            },
            {
                name: "Dre Beats",
                Description: "live your dreams",
                imageLink: require("@/assets/mainProducts/dre2.jpg"),
                categoryId: "6"
            },
            {
                name: "Dre Beats",
                Description: "Unstopable sound",
                imageLink: require("@/assets/mainProducts/dre3.jpg"),
                categoryId: "6"
            },
             {
                name: "iphone 11",
                Description: "648GB Memory, 32GB Ram",
                imageLink: require("@/assets/mainProducts/iphone11.jpg"),
                categoryId: "7"
            },

            
             {
                name: "iphone 11",
                Description: "128GB Memory, 32GB Ram",
                imageLink: require("@/assets/mainProducts/iphone1.jpg"),
                categoryId: "7"
            },
              {
                name: "iphone11 Pro",
                Description: "Slim and sleek",
                imageLink: require("@/assets/mainProducts/iphone2.jpg"),
                categoryId: "7"
            },
             {
                name: "iphone11 Pro max",
                Description: "Dual camera and live",
                imageLink: require("@/assets/mainProducts/iphone3.jpg"),
                categoryId: "7"
            },
            {
                name: "smart watch",
                Description: "Elastic and robustic",
                imageLink: require("@/assets/mainProducts/iwatch.jpg"),
                categoryId: "8"
            },
            {
                name: "Apple-Wristwatch",
                Description: "Elastic and robustic",
                imageLink: require("@/assets/mainProducts/red.jpg"),
                categoryId: "8"
            },
            {
                name: "Apple-Wristwatch",
                Description: "Elastic and robustic",
                imageLink: require("@/assets/mainProducts/red2.jpg"),
                categoryId: "8"
            },
            {
                name: "Apple-Wristwatch",
                Description: "Elastic and robustic",
                imageLink: require("@/assets/mainProducts/red3.jpg"),
                categoryId: "8"
            },
            {
                name: "smart i watch",
                Description: "durable",
                imageLink: require("@/assets/mainProducts/smart.jpg"),
                categoryId: "9"
            },
            {
                name: "Apple-Wristwatch",
                Description: "anacostic",
                imageLink: require("@/assets/mainProducts/iwatch1.png"),
                categoryId: "9"
            },
            {
                name: "Apple-Wristwatch",
                Description: "Dark mode",
                imageLink: require("@/assets/mainProducts/iwatch2.png"),
                categoryId: "9"
            },
            {
                name: "Apple-Wristwatch",
                Description: "Dual Call",
                imageLink: require("@/assets/mainProducts/iwatch3.png"),
                categoryId: "9"
            },
            {
                name: "Mac-book",
                Description: "16GB Ram 1TB SSD",
                imageLink: require("@/assets/mainProducts/macbook.jpg"),
                categoryId: "10"
            },
            {
                name: "Macbook 180",
                Description: "32GB Ram 1TB SSD",
                imageLink: require("@/assets/mainProducts/mac1.png"),
                categoryId: "10"
            },
            {
                name: "Mac-book",
                Description: "265GRAM HHD",
                imageLink: require("@/assets/mainProducts/mac2.jpg"),
                categoryId: "10"
            },
            {
                name: "Mac-book Pro",
                Description: "16GB Ram 1TB SSD",
                imageLink: require("@/assets/mainProducts/mac3.jpg"),
                categoryId: "10"
            },
            {
                name: "Headphones",
                Description: "Beats-By-Dre  ",
                imageLink: require("@/assets/mainProducts/Headphone1.jpg"),
                categoryId: "4"
            },
            {
                name: "Headphones",
                Description: "Beats-By-Dre , Dual wireless and wired ",
                imageLink: require("@/assets/mainProducts/phone1.jpg"),
                categoryId: "4"
            },
            {
                name: "Headphones",
                Description: "Beats-By-Dre, 16 Decibel HF ",
                imageLink: require("@/assets/mainProducts/phone2.jpg"),
                categoryId: "4"
            },
            {
                name: "Headphones",
                Description: "Beats-By-Dre, Night Mode",
                imageLink: require("@/assets/mainProducts/phone3.jpg"),
                categoryId: "4"
            },


            ]
        }
    }
    
}
</script>

<style scoped>
.card-edit {
    display: inline-block;
    margin: 5px;
}
</style>