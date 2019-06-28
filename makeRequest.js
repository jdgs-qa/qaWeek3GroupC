function makeRequest(method, url, body) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.onload = () => {
            if (req.status >= 200 && req.status <= 299) {
                resolve(JSON.parse(req.responseText));
            } else {
                reject('Error!: ' + req.responseText);
            }
        };
        req.open(method, url);
        req.setRequestHeader('Content-Type', 'application/json');
        req.send();
    });
}