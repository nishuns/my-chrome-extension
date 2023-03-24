export default {
    throwWord({ commit }, newWord) {
        commit('APPEND_WORD_IN_WORDBIN', newWord);
    }
}