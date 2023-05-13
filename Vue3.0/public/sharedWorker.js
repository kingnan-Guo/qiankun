let data = ''
onconnect = function (e) {
    var port = e.ports[0]
    console.log("port =",port);
    port.onmessage = function (e) {
        if(e.data === 'get'){
            port.postMessage(data)
            data = ""
        } else {
            data = e.data
        }
    }
}