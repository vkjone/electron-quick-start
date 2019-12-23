function sendMessageToParent() {
    window.opener.postMessage("来自子窗口的消息")
}