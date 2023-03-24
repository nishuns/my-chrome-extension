export default {
    APPEND_WORD_IN_WORDBIN(state, newWord) {
        const tempWordbin = [...state.wordbin];
        tempWordbin.push(newWord);
        state.wordbin = tempWordbin;
    }
}