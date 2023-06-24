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
    this.axiosRequest();
    axios.get(store.apiTypes).then((response)=>{
      store.types = response.data
      }
    )
  },
  methods: {
    searchByType(type, nome){
      store.loading = false;
      if(type !== ''){
        store.apiURL += `&eq[type1]=${type}`;
      }
      // if(nome !== ''){
      //   store.apiURL += `&q[name]=${nome}`;
      // }
      this.axiosRequest();
      store.apiURL = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=18&sort=_id';
      store.selectedType = ''
    },
    deleteSearching(){
      store.loading= false;
      store.apiURL = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=18&sort=_id';
      store.selectedType = '';
      this.axiosRequest();
    },
    axiosRequest(){
      axios.get(store.apiURL).then((resp)=>{
        store.pokemons = resp.data.docs;
        store.loading = true;
        }
      )
    }
  },
}
</script>
<template>
<div class="background">
    <AppTopBar @searching="searchByType(store.selectedType)" @reset="deleteSearching()"/>
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