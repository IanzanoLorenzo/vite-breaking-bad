import { FALSE } from "sass";
import { reactive } from "vue";

export const store = reactive({
    apiURL: 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=13&sort=_id',
    pokemons: [],
    loading : false,
})