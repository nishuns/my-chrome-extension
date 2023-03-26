import store from '../store';

document.addEventListener('keyup', (e) => {
    if (e.key === 'Alt') {
        const selection = window.getSelection().toString();
        store.dispatch('putWord', selection);
        if (selection === 'color') {
            document.body.style.background = "#340144";
            document.querySelector('.sfbg').style.background = '#340144';
            document.querySelector('.yg51vc').style.background = '#340144';
            document.querySelectorAll('.WE0UJf').forEach((item) => {
                console.log(item);
                item.style.background = '#340144';
            })
            document.querySelectorAll('.LGOjhe').forEach((item) => {
                console.log(item);
                item.style.background = '#340144';
            })
            document.querySelectorAll('.yuRUbf').forEach((item) => {
                item.style.background = '#340144';
                item.children[0].style.color = "yellow";
            })
            document.querySelectorAll('.vLK3gc').forEach((item) => {
                // item.style.background = '#340144';
                item.children[0].style.color = "yellow";
            })
            document.querySelectorAll('.usJj9c').forEach((item) => {
                // item.style.background = '#340144';
                item.children[0].children[0].style.color = "yellow";
            })
            document.querySelectorAll('.HiHjCd').forEach((item) => {
                let bets = item.children;
                for (let bet of bets) {
                    bet.style.color = 'yellow';
                }
            });
            document.querySelectorAll('.GLI8Bc.UK95Uc').forEach((item) => {
                console.log(item);
                item.style.background = '#340144';
            })
            document.querySelectorAll('.g.Ww4FFb.vt6azd.tF2Cxc.asEBEc').forEach((item) => {
                console.log(item);
                item.style.background = '#340144';
            })
            document.querySelectorAll('.ogOaY').forEach((item) => {
                console.log(item);
                item.style.background = '#340144';
            })
            document.querySelectorAll('.e3sOrb').forEach((item) => {
                console.log(item);
                item.style.background = '#340144';
            })
            // footer
            document.querySelector('.f6F9Be').style.background = '#340144';
        }

        // Send a message to the background script
        chrome.runtime.sendMessage({ type: 'updateStore', payload: store.state });
    }
});