document.title = (chrome.i18n.getMessage("options") || "Options") + " - " + (chrome.i18n.getMessage("appName") || "Multi-Lingual Input Tools");

/* GET Stored Vars */
var colorModeRestored = '/';
var languageRestored = '/';
getChromeVars();
function getChromeVars() {
    chrome.storage.sync.get({
        colorMode: 'dark',
        language: 'none'
    }, function (item) {
        colorModeRestored = item.colorMode;
        languageRestored = item.language;
    });
    setTimeout(function() {useRestoredColorMode(colorModeRestored);}, 300);
    setTimeout(function() {useRestoredLanguage(languageRestored);}, 300);
}

// Use the Chrome colorMode (Color Mode) variable
function useRestoredColorMode(colorModeRestored) {
    if (colorModeRestored == "light") {
        document.getElementById("color-mode-checkbox").checked = false;
        document.getElementById("color-mode-label").setAttribute("title", chrome.i18n.getMessage("lightMode") || "Light Mode");
        // document.getElementById("color-mode-label").innerText = "Light Mode";
        document.getElementById("mode-icon").classList.add("bi");
        document.getElementById("mode-icon").classList.add("bi-brightness-high-fill");
        document.getElementsByTagName("body")[0].setAttribute('data-theme', 'light');
    } else if (colorModeRestored == "dark") {
        document.getElementById("color-mode-checkbox").checked = true;
        // document.getElementById("color-mode-label").innerText = "Dark Mode";
        document.getElementById("mode-icon").classList.add("bi");
        document.getElementById("mode-icon").classList.add("bi-moon-fill");
        document.getElementsByTagName("body")[0].setAttribute('data-theme', 'dark');
    }
}

// Use the Chrome language (Language) variable
function useRestoredLanguage(languageRestored) {
    if (languageRestored == 'spanish') {
        document.getElementById('spanish').checked = true;
    } else if (languageRestored == 'french') {
        document.getElementById('french').checked = true;
    } else if (languageRestored == 'german') {
        document.getElementById('german').checked = true;
    } else if (languageRestored == 'romanian') {
        document.getElementById('romanian').checked = true;
    } else if (languageRestored == 'dutch') {
        document.getElementById('dutch').checked = true;
    } else if (languageRestored == 'portuguese') {
        document.getElementById('portuguese').checked = true;
    }
}

/* SET Chrome Variables */
// Set the Color Mode
function setColorMode() {
    if (document.getElementById("color-mode-checkbox").checked == false) {
        document.getElementById("color-mode-label").innerText = "...";
        chrome.storage.sync.set({
            colorMode: 'light'
        }, function () {
            // setTimeout(function() {document.getElementById("color-mode-label").innerText = "Reloading...";}, 1000);
            setTimeout(function() {location.reload();}, 1300)
        });
    } else if (document.getElementById("color-mode-checkbox").checked == true) {
        document.getElementById("color-mode-label").innerText = "...";
        chrome.storage.sync.set({
            colorMode: 'dark'
        }, function () {
            // setTimeout(function() {document.getElementById("color-mode-label").innerText = "Reloading...";}, 1000);
            setTimeout(function() {location.reload();}, 1300)
        });
    }
}

// Set Language
function setLanguage() {
    if (document.getElementById("spanish").checked == true) {
        document.getElementById("spanish-label").innerText = "Syncing...";
        chrome.storage.sync.set({
            language: 'spanish'
        }, function () {
            document.getElementById("spanish-label").innerText = "Syncing...";
            setTimeout(function() {document.getElementById("spanish-label").innerText = "Spanish 🇪🇸";}, 1000);
        });
    } else if (document.getElementById("french").checked == true) {
        document.getElementById("french-label").innerText = "Syncing...";
        chrome.storage.sync.set({
            language: 'french'
        }, function () {
            setTimeout(function() {document.getElementById("french-label").innerText = "French 🇫🇷";}, 1000);
        });
    } else if (document.getElementById("german").checked == true) {
        document.getElementById("german-label").innerText = "Syncing...";
        chrome.storage.sync.set({
            language: 'german'
        }, function () {
            setTimeout(function() {document.getElementById("german-label").innerText = "German 🇩🇪";}, 1000);
        });
    } else if (document.getElementById("romanian").checked == true) {
        document.getElementById("romanian-label").innerText = "Syncing...";
        chrome.storage.sync.set({
            language: 'romanian'
        }, function () {
            setTimeout(function() {document.getElementById("romanian-label").innerText = "Romanian 🇷🇴";}, 1000);
        });
    } else if (document.getElementById("dutch").checked == true) {
        document.getElementById("dutch-label").innerText = "Syncing...";
        chrome.storage.sync.set({
            language: 'dutch'
        }, function () {
            setTimeout(function() {document.getElementById("dutch-label").innerText = "Dutch 🇳🇱";}, 1000);
        });
    } else if (document.getElementById("portuguese").checked == true) {
        document.getElementById("portuguese-label").innerText = "Syncing...";
        chrome.storage.sync.set({
            language: 'portuguese'
        }, function () {
            setTimeout(function() {document.getElementById("portuguese-label").innerText = "Portuguese 🇵🇹";}, 1000);
        });
    } 
}

/* Event listeners */
// Color Mode Changes
document.getElementById("color-mode-checkbox").onchange = function() {
    setColorMode();
}
// Selected Language Changes
document.getElementById("spanish").onchange = function() {
    setLanguage();
}
document.getElementById("french").onchange = function() {
    setLanguage();
}
document.getElementById("german").onchange = function() {
    setLanguage();
}
document.getElementById("romanian").onchange = function() {
    setLanguage();
}
document.getElementById("dutch").onchange = function() {
    setLanguage();
}
document.getElementById("portuguese").onchange = function() {
    setLanguage();
}