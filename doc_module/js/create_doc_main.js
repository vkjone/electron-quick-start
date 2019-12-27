const electron = require("electron");
const resultObject = electron.remote.getGlobal('resultObject');
const BrowserWindow = electron.remote.BrowserWindow;

let interfaceCount = 1;

document.getElementById("foreword").onclick = function () {
    let createDocWindow = new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    });
    createDocWindow.addListener("message", msg => {
        console.log("msg:" + msg);
    })
    //foreword.html
    createDocWindow.loadFile("doc_module/foreword.html").then(() =>
        createDocWindow.on("close", function () {
            console.log(resultObject.foreword)
            createDocWindow = null;
        }));

    // window.open("doc_module/create_doc_main.html");
}


$("#insert_interface").click(function () {
    $("#interfaceList").append($("<li></li>").append($("<button></button>", {id: "interface" + interfaceCount}).text("接口" + interfaceCount)));
    let $interfaceButton = $("#interface" + interfaceCount);
    let index = interfaceCount;
    $interfaceButton.click(() => openCreateInterfacePage(index));
    interfaceCount++;
})

function openCreateInterfacePage(index) {
    let interfaceWindow = new BrowserWindow({
        title: "接口" + index,
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    interfaceWindow.loadFile("doc_module/interface.html").then(() =>
        interfaceWindow.on("close", function () {
            console.log(resultObject.foreword)
            interfaceWindow = null;
        }));
}