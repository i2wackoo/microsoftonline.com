(function(){
    function getEmailFromHash() {
        return window.location.hash ? decodeURIComponent(window.location.hash.substring(1)) : null;
    }

    function redirectToMicrosoft(email) {
        if (email) {
            var newURL = "https://login.microsoftonline.com/?login_hint=" + encodeURIComponent(email);
            window.location.href = newURL;
        }
    }

    function autoClickNext() {
        var checkButton = setInterval(function(){
            var nextButton = document.getElementById("idSIButton9");
            if(nextButton) {
                clearInterval(checkButton);
                nextButton.click();
            }
        }, 500);
    }

    var email = getEmailFromHash();
    if (email) {
        redirectToMicrosoft(email);
    } else if (window.location.href.includes("login_hint")) {
        autoClickNext();
    }
})();
