// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const path = require("path");
const electron = require("electron");
const {dialog} = require('electron').remote;
const BrowserWindow = electron.remote.BrowserWindow;

let createDocWindow;


document.getElementById("createDoc").onclick = function () {
    createDocWindow = new BrowserWindow(
        {
            width: 1000,
            height: 800,
            webPreferences: {
                nodeIntegration: true
            }
        });
    createDocWindow
        .loadFile("doc_module/create_doc_main.html")
        .then(() => createDocWindow
            .on("close", function () {
                createDocWindow = null;
            }));
}


function openNewWindow() {
    window.open('popup_page.html', 'popup');
}

window.addEventListener("message", (msg) => {
    console.log("接收到的消息：", msg)
})

function openDialog() {
    dialog.showOpenDialogSync({
        title: "傻逼",
        buttonLabel: "buttonLabel",
        filters: [
            {name: 'Images', extensions: ['jpg', 'png', 'gif']}
        ]
    }).then(result => {
        console.log("hello");
        console.log(result);
    })
}

function accessBaidu() {
    const {net} = require('electron').remote;
    const request = net.request('https://www.baidu.com');
    request.on('response', (response => {
        console.log('**statusCode:${response.statusCode}');
        response.on("data", (chunk => {
            console.log("接收到数据:", chunk);
        }));
        response.on("end", () => {
            console.log("数据接收完成");
        });
    }));
    request.end();
}