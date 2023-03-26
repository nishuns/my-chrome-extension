import { createStore } from 'vuex'
import mutations from './mutations';
import actions from './actions';


const store = createStore({
    state: {
        wordbin: [],
    },
    mutations,
    actions,
})

export default store;