const notifyStart = () => {
    fetch("http://121.5.165.232:10129/api/start", {method: 'POST', headers: {
      'Content-Type': 'application/json'
    }, body: ''}, )
        .then(response => response.json())
        .then(data => {});
};

const notifyResult = (result: number) => {
    fetch("http://121.5.165.232:10129/api/result", {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({result: result})
    }, )
        .then(response => response.json())
        .then(data => {});
};

export {notifyStart, notifyResult};