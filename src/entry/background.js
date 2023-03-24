import store from '../store';

chrome.runtime.onInstalled.addListener(() => {
  // use store in your extension code here
    console.log(store);
})