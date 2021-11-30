const notifyStart = () => {
    fetch("https://129.c7w.tech/api/start", {method: 'POST', headers: {
      'Content-Type': 'application/json'
    }, body: '', mode: 'cors'}, )
        .then(response => response.json())
        .then(data => {});
};

const notifyResult = (result: number) => {
    fetch("https://129.c7w.tech/api/result", {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({result: result}), mode: 'cors'
    }, )
        .then(response => response.json())
        .then(data => {});
};

export {notifyStart, notifyResult};