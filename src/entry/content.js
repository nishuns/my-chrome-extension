import store from '../store';

document.addEventListener('keyup', (e) => {
    if (e.key === 'Alt') {
        const selection = window.getSelection().toString();
        store.dispatch('throwWord', selection);

        // Send a message to the background script
        chrome.runtime.sendMessage({ type: 'updateStore', payload: store.state });
    }
});