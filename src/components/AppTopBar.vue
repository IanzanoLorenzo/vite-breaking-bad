<script>
import { store } from '../store';
export default {
    data() {
        return {
            store
        }
    },
}
</script>
<template lang="">
    <div class="container-md container-fluid">
        <div class="row justify-content-between">
            <div class="col-auto d-flex justify-content-start align-items-start p-0">
                <button class="bottone blue mx-2"></button>
                <button class="bottone red mx-2"></button>
                <button class="bottone green mx-2"></button>
                <button class="bottone yellow mx-2"></button>
            </div>
            <div class="col-auto">
                <select name="selectType" id="" v-model="store.selectedType">
                    <option value="" selected disabled>Select a Type</option>
                    <option v-for="(type, index) in store.types" :key="index" :value="type">{{ type }}</option>
                </select>
                <!-- <input type="text" v-model="store.nameSearched"> -->
                <button @click="$emit('searching')">Search</button>
                <button @click="$emit('reset')">Reset</button>
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