import store from '../store';

document.addEventListener('keyup', (e) => {
    // console.log(e);
    if (e.key === 'Alt') {
        const selection = window.getSelection().toString();
        store.dispatch('throwWord', selection);    
        console.log(store.state)
    }
})