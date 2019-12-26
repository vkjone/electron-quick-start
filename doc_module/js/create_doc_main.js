const electron = require("electron");
const resultObject = electron.remote.getGlobal('resultObject');
const BrowserWindow = electron.remote.BrowserWindow;

let interfaceIndex = 2;
// document.getElementById("add_interface").onclick = function () {
//     let interfaceList = document.getElementById("interfaceList");
//     console.log(interfaceList);
//     let li = document.createElement("li");
//     let button = document.createElement("input");
//     button.setAttribute("type", "button");
//     button.setAttribute("id", "interface" + interfaceIndex)
//     button.setAttribute("value", "接口" + interfaceIndex);
//     li.appendChild(button)
//     interfaceList.appendChild(li);
//     li = null;
//     button = null;
//     interfaceIndex++;
// }

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


$(function () {
    let $interfaceButton = $("button[id^='interface']");
    $("#insert_interface").click(function () {
        $("#interfaceList").append($("<li></li>").append($("<button></button>", {id: "interface" + interfaceIndex}).text("接口" + interfaceIndex)));
        interfaceIndex++;
        $interfaceButton = $("button[id^='interface']");
        $interfaceButton.each(function (index, element) {
            console.log($interfaceButton.length)
            element.onclick = function () {
                let interfaceWindow = new BrowserWindow({
                    title: "fuck",
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
                console.log(element);
                console.log("haha");
            }
        });
    })


});