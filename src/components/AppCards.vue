<script>
export default {
    props:{
        pokemonName: String,
        type1   :   String,
        type2   :   String,
        image   :   String,
        position:   Number,
        backgroundColors: Object
    }
}
</script>
<template lang="">
    <div class="col-6 col-xl-3 g-3">
        <div class="card" :style="`background-color: ${backgroundColors[type1]};border: ${backgroundColors[type1]} 20px solid`">
            <div class="row d-flex">
                <div class="col-12 d-flex p-0 justify-content-center">
                    <img :src="image" alt="">
                </div>
                <div class="col-12 p-0 d-flex flex-column align-items-center">
                    <h5>Number {{ position }}</h5>
                    <h4>{{ pokemonName }}</h4>
                    <p>Type: {{ type1 }}{{type2 === null ? '' : ',' + ' ' + type2 }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .card{
        border-radius: 20px;
        height: 100%;
        overflow: hidden;
        img{
            overflow: hidden;
            width: calc(100% - 40px);
            height: 150px;
            object-fit: scale-down;
            background-color: rgb(255, 255, 255);
            object-position: center;
            border-radius: 20px;
        }
        h5,
        h4,
        p{
            height: 30px;
        }
    }
</style>