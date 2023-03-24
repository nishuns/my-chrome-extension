import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';


export default new Vuex.Store({
    state: {
        wordbin: ["hello", "hola"],
    },
    mutations,
    actions,
})