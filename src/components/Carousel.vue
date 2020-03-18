    <template>
    <div class="image-display">
        <carousel :per-page="1" :navigate-to="someLocalProperty" :mouse-drag="false" :autoplay="true" 
        :autoplayTimeout="5000" :loop="true" paginationColor="#342532">
        <slide v-for="image in caro" :key="image.imageDisplay">
                <img :src="image.imageDisplay" height="350" style="width: 100%; border-radius: 10px">
        </slide>
    </carousel>
    </div>
    </template>

<script>

export default {
    props: ['caro']
};
</script>

<style scoped>
    
</style>