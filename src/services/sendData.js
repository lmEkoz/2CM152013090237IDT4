async function sendData(url = '',data ={}){
    return (await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(data)
        })).json();
};

export default sendData;