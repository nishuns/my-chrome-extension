import { createApp } from 'vue'
import store from '@/store';
import App from '../view/popup.vue'

const app = createApp(App);

app.use(store);
app.mount('#app')




// Set up the listener once the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Listen for messages from the content script
    // Request the updated state from the background script
    chrome.runtime.sendMessage({ type: 'getStoreState' }, (response) => {
        // Update the store with the received state
        store.replaceState(response);
    });
});