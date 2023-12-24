function openCloakedTab() {
    var window = window.open()
    var url = "google.com";
    var iframe = window.document.createElement("iframe")
    iframe.style.width = "100%";
    iframe.style.length = "100%";
    iframe.style.border = "none";
    window.document.body.appendchild(iframe)
}