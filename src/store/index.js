import { createStore } from 'vuex'
import mutations from './mutations';
import actions from './actions';


const store = createStore({
    state: {
        wordbin: ["hello", "hola"],
    },
    mutations,
    actions,
})

export default store;