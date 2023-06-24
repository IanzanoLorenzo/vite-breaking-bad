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
<!-- CERCHI COLORATI -->
            <div class="col-auto d-flex justify-content-start align-items-start p-0">
                <span class="cerchi-colorati blue mx-2"></span>
                <span class="cerchi-colorati red mx-2"></span>
                <span class="cerchi-colorati green mx-2"></span>
                <span class="cerchi-colorati yellow mx-2"></span>
            </div>
<!-- BOTTONI PER CAMBIARE PAGINA -->
            <div class="col d-flex align-items-center justify-content-center">
                <button :class="store.currentPage > 1 ? '' : 'hide'" class="btn btn-outline-secondary text-light" @click="$emit('backward')">Indietro</button>
                <h3 class="mx-3 text-light">Page N: {{ store.currentPage }} of {{ store.totalPages }}</h3>
                <button :class="store.totalPages > store.currentPage ? '' : 'hide'" class="btn btn-outline-primary text-light" @click="$emit('forward')">Avanti</button>
            </div>
 <!-- FILTRI DI RICERCA -->
            <div class="col-auto d-flex align-items-center">
<!-- SELECT FILTRAGGIO PER TIPO -->
                <select class="mx-2" name="selectType" v-model="store.selectedType">
                    <option value="" selected disabled>Select a Type</option>
                    <option value="">None</option>
                    <option v-for="(type, index) in store.types" :key="index" :value="type">{{ type }}</option>
                </select>
<!-- IMPUT FILTRAGGIO PER NOME -->
                <input type="text" @keyup.enter="$emit('searching')" v-model="store.nameSearched">
<!-- BOTTONI DI RICERCA E RESET -->
                <button class="btn btn-outline-success text-light me-2" @click="$emit('searching')">Search</button>
                <button class="btn btn-outline-warning text-light" @click="$emit('reset')">Reset</button>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @use '../styles/mixins' as *;
    .cerchi-colorati{
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
    select{
        height: 30px;
    }
    .hide{
        visibility: collapse;
    }

</style>