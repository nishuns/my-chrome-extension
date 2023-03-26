export default {
    putWord({ commit }, newWord) {
        if (newWord.length > 0) {
            const filteredNewWord = newWord.trim();
            commit('APPEND_WORD_IN_WORDBIN', filteredNewWord);
        }
    },
    trashWord({ commit }, myWord) {
        commit('TRASH_WORD_FROM_WORDBIN', myWord);
    }
}