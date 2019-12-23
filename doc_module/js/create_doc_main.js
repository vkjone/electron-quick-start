document.getElementById("add_interface").onclick = function () {
    console.log("点击1");
    let i = 2;
    let interfaceList = document.getElementById("interfaceList");
    console.log(interfaceList);
    let button = document.createElement("input");
    button.setAttribute("type", "button");
    button.setAttribute("value", "接口"+i);
    interfaceList.appendChild(button);
    // o=null;
}