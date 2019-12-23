const electron = require("electron");
const BrowserWindow = electron.remote.BrowserWindow;

let interfaceIndex = 2;
document.getElementById("add_interface").onclick = function () {
    let interfaceList = document.getElementById("interfaceList");
    console.log(interfaceList);
    let li = document.createElement("li");
    let button = document.createElement("input");
    button.setAttribute("type", "button");
    button.setAttribute("id", "interface" + interfaceIndex)
    button.setAttribute("value", "接口" + interfaceIndex);
    li.appendChild(button)
    interfaceList.appendChild(li);
    li = null;
    button = null;
    interfaceIndex++;
}

document.getElementById("background").onclick = function () {
    let createDocWindow = new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    });
    //background.html
    createDocWindow.loadFile("doc_module/background.html").then(() =>
        createDocWindow.on("close", function () {
        createDocWindow = null;
    }));

    // window.open("doc_module/create_doc_main.html");
}