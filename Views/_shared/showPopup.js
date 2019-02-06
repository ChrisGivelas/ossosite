var showPopup = false

if (!document.cookie) {
    showPopup = true
} else {
    var shownPopupCookie = document.cookie.split(";").filter(function(cookie) {
        return cookie.indexOf("shownPopup") >= 0
    })

    if (!shownPopupCookie) {
        showPopup = true
    }
}

if (showPopup) {
    var modal = new tingle.modal({
        closeMethods: ["overlay", "button", "escape"],
        cssClass: ["popup"]
    })

    modal.setContent('<img style="display: block; max-width: 100%; border-radius: 4px;" src="..\\_shared\\popup.png"/>')

    modal.open()

    document.cookie = "shownPopup=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/"
}
