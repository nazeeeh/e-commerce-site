import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        products: [
            {
            name: "E05 Cannon-6D",
            price: "50,000",
            imageLink: require("@/assets/products/camera.jpg"),
            Desc: "This high quality E05 Cannon-6D, it will give you that sharp photography look that will stand you out in any picture quality. It is convinient and portable, yet very effective. It effectively shapes the picture quality, Blur and eliminates unwanted rasters. It is a perfect  and fashionable for outdoor snappings and is suitable for use whether you are at work, play or sleeping",
            productId: "1",
            usersRating: "100"
            },
            {
            name: "E06 Cannon-5D",
            price: "80,000",
            imageLink: require("@/assets/products/canon2.jpg"),
            Desc: "This high quality E06 Cannon-5D, it will give you that sharp photography look that will stand you out in any picture quality. It is convinient and portable, yet very effective. It effectively shapes the picture quality, Blur and eliminates unwanted rasters. It is a perfect  and fashionable for outdoor snappings and is suitable for use whether you are at work, play or sleeping",
            productId: "2",
            usersRating: "100"
            },
            {
            name: "E05 Cannon-2000D",
            price: "60,000",
            imageLink: require("@/assets/products/canon3.jpg"),
            Desc: "This high quality E05 Cannon-2000D, it will give you that sharp photography look that will stand you out in any picture quality. It is convinient and portable, yet very effective. It effectively shapes the picture quality, Blur and eliminates unwanted rasters. It is a perfect  and fashionable for outdoor snappings and is suitable for use whether you are at work, play or sleeping",
            productId: "3",
            usersRating: "180"
            },
            {
            name: "Beats By dre H1",
            price: "15,000",
            imageLink: require("@/assets/products/headphone1.jpg"),
            Desc: "This high quality Beats By dre H1, it will give you that sharp photography look that will stand you out in any picture quality. It is convinient and portable, yet very effective. It effectively shapes the picture quality, Blur and eliminates unwanted rasters. It is a perfect  and fashionable for outdoor snappings and is suitable for use whether you are at work, play or sleeping",
            productId: "4",
            usersRating: "90"
            },
            {
            name: "Beats By dre M3",
            price: "10,000",
            imageLink: require("@/assets/products/headphone2.jpg"),
            Desc: "This high quality Beats By dre M3, it will give you that sharp photography look that will stand you out in any picture quality. It is convinient and portable, yet very effective. It effectively shapes the picture quality, Blur and eliminates unwanted rasters. It is a perfect  and fashionable for outdoor snappings and is suitable for use whether you are at work, play or sleeping",
            productId: "5",
            usersRating: "130"
            },
            {
            name: "Beats By dre monster",
            price: "15,000",
            imageLink: require("@/assets/products/headphone3.jpg"),
            Desc: "This high quality Beats By dre monster, it will give you that sharp photography look that will stand you out in any picture quality. It is convinient and portable, yet very effective. It effectively shapes the picture quality, Blur and eliminates unwanted rasters. It is a perfect  and fashionable for outdoor snappings and is suitable for use whether you are at work, play or sleeping",
            productId: "6",
            usersRating: "170"
            },
            {
            name: "iphone11",
            price: "400,000",
            imageLink: require("@/assets/products/iphone11.jpg"),
            Desc: "This high quality iphone11 it will give you that sharp photography look that will stand you out in any picture quality. It is convinient and portable, yet very effective. It effectively shapes the picture quality, Blur and eliminates unwanted rasters. It is a perfect  and fashionable for outdoor snappings and is suitable for use whether you are at work, play or sleeping",
            productId: "7",
            usersRating: "100"
            },
            {
            name: "Apple Watch",
            price: "35,000",
            imageLink: require("@/assets/products/iwatch2.jpg"),
            Desc: "This high quality Apple Wristwatch, it will give you that sharp photography look that will stand you out in any picture quality. It is convinient and portable, yet very effective. It effectively shapes the picture quality, Blur and eliminates unwanted rasters. It is a perfect  and fashionable for outdoor snappings and is suitable for use whether you are at work, play or sleeping",
            productId: "8",
            usersRating: "150"
            },
            {
            name: "Smart watch",
            price: "30,000",
            imageLink: require("@/assets/products/iwatch3.jpg"),
            Desc: "This high quality Apple Smart watch, it will give you that sharp photography look that will stand you out in any picture quality. It is convinient and portable, yet very effective. It effectively shapes the picture quality, Blur and eliminates unwanted rasters. It is a perfect  and fashionable for outdoor snappings and is suitable for use whether you are at work, play or sleeping",
            productId: "9",
            usersRating: "150"
            },
            {
            name: "macbook",
            price: "265,000",
            imageLink: require("@/assets/products/macbook.jpg"),
            Desc: "This high macbook x325D, it will give you that sharp photography look that will stand you out in any picture quality. It is convinient and portable, yet very effective. It effectively shapes the picture quality, Blur and eliminates unwanted rasters. It is a perfect  and fashionable for outdoor snappings and is suitable for use whether you are at work, play or sleeping",
            productId: "10",
            usersRating: "140"
            }

        ],

        productImageSelections: null
    },

    mutations: {
        setSelectedProductImage(state, product){
            state.productImageSelections = product;

            
        }
    }

});

export default store;