import { reactive } from "vue";

export const store = reactive({
    baseApiUrl: 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=12&sort=_id',
    apiURL: '',
    currentApiURL: '',
    apiTypes: 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons/types1',
    pokemons: [],
    types: [],
    selectedType : '',
    nameSearched: '',
    typesColors: {
        Bug : 'rgb(163, 231, 99)',
        Dark : 'rgb(77, 77, 77)',
        Dragon : 'rgb(117,93,225)',
        Electric : 'rgb(255, 255, 0)',
        Fairy : 'rgb(255, 192, 203)',
        Fighting : 'rgb(158, 76, 76)',
        Fire : 'rgb(255, 0, 0)',
        Flying : 'rgb(173, 216, 230)',
        Ghost : 'rgb(100, 0, 150)',
        Grass : 'rgb(76, 158, 76)',
        Ground : 'rgb(158, 123, 9)',
        Ice : 'rgb(106, 186, 212)',
        Normal : 'rgb(190, 190, 190)',
        Poison : 'rgb(128, 0, 128)',
        Psychic : 'rgb(201, 0, 184)',
        Rock : 'rgb(100, 50, 50)',
        Steel : 'rgb(148, 148, 148)',
        Water : 'rgb(0, 0, 255)'
    },
    loading : false,
    currentPage: 0,
    totalPages: 0
})