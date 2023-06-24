<script>
import AppScreen from './components/AppScreen.vue';
import AppTopBar from './components/AppTopBar.vue';
import axios from 'axios';
import { store } from "./store.js";
export default {
  components:{
    AppScreen,
    AppTopBar
  },
  data() {
    return {
      store
    }
  },
  mounted() {
    store.apiURL = store.baseApiUrl;
    store.currentApiURL = store.baseApiUrl;
    this.axiosRequest();
    axios.get(store.apiTypes).then((response)=>{
      store.types = response.data
      }
    )
  },
  methods: {
//FUNZIONE RICERCA PER (TIPO, NOME)
    searchBy(type, nome){
      store.loading = false;
      store.apiURL = store.baseApiUrl;
      if(type !== ''){
        store.apiURL += `&eq[type1]=${type}`;
      }
      if(nome !== ''){
        store.apiURL += `&q[name]=${nome}`;
      }
      store.currentApiURL = store.apiURL
      this.axiosRequest();
    },
//FUNZIONE RESET RICERCHE
    deleteSearching(){
      store.loading= false;
      store.apiURL = store.baseApiUrl;
      store.selectedType = '';
      store.nameSearched = '';
      store.currentPage = 1;
      this.axiosRequest();
    },
//CAMBIO PAGINA +1
    nextPage(){
      store.loading = false
      store.currentPage += 1;
      store.apiURL = store.currentApiURL + '&page=' + store.currentPage;
      this.axiosRequest();
    },
//CAMBIO PAGINA -1
    previusPage(){
      store.loading = false
      store.currentPage -= 1;
      store.apiURL = store.currentApiURL + '&page=' + store.currentPage;
      this.axiosRequest();
    },
//RICHIESTA AXIOS E SALVATAGGIO DATI
    axiosRequest(){
      axios.get(store.apiURL).then((resp)=>{
        store.pokemons = resp.data.docs;
        store.currentPage = resp.data.page;
        store.totalPages =  resp.data.totalPages;
        store.loading = true;
        }
      )
    }
  },
}
</script>
<template>
<div class="background">
    <AppTopBar @searching="searchBy(store.selectedType, store.nameSearched)" @reset="deleteSearching()" @forward="nextPage()" @backward="previusPage()"/>
    <AppScreen />
</div>
</template>
<style lang="scss">
  @import './styles/general.scss';
  .background{
    background-color: #b71b1b;
    width: 100vw;
    height: 100vh;
    padding: 50px 0;
  }
</style>