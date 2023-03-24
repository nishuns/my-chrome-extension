import store from '../store';

chrome.runtime.onInstalled.addListener(() => {
  // use store in your extension code here
    console.log(store);
})

let latestStoreState = {};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'updateStore') {
        // Update the latestStoreState with the new state from the content script
        latestStoreState = message.payload;
    } else if (message.type === 'getStoreState') {
        // Send the latestStoreState to the requesting script (popup script)
        sendResponse(latestStoreState);
        return true
    }
});