<script>
export default {
    
}
</script>
<template lang="">
    <div class="container-md container-fluid">
        <div class="row">
            <div class="col-auto d-flex justify-content-start align-items-start p-0">
                <button class="bottone blue mx-2"></button>
                <button class="bottone red mx-2"></button>
                <button class="bottone green mx-2"></button>
                <button class="bottone yellow mx-2"></button>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @use '../styles/mixins' as *;
    .bottone{
        border-radius: 50%;
        border: white 2px solid;
        &.blue{
            @include buttons(blue, 80px)
        }
        &.red{
            @include buttons(red,30px)
        }
        &.green{
            @include buttons(green,30px)
        }
        &.yellow{
            @include buttons(yellow,30px)
        }
    }

</style>