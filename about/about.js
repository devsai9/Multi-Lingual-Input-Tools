/*  THIS SCRIPT IS PART OF THE MULTI-LINGUAL INPUT TOOLS BROWSER EXTENSION
    JAVASCRIPT FOR ABOUT PAGE
    --------------------------------------------------------------
    Chrome: https://chrome.google.com/webstore/detail/multi-lingual-input-tools/dkbgodmmblfcnfledmedmepimmpebnjo?hl=en
    Microsoft Edge: https://microsoftedge.microsoft.com/addons/detail/multilingual-input-tools/aoehggnalolhonphifnooepocfjpghfl
    --------------------------------------------------------------
    Path: about/about.js
    --------------------------------------------------------------
*/

// Chrome-Synced Variables
var colorModeRestored = '/';

// Get Chrome Sync Variables
getChromeVars();
function getChromeVars() {
    chrome.storage.sync.get({
        colorMode: 'dark',
    }, function (item) {
        colorModeRestored = item.colorMode;
    });
   setTimeout(function() {useColorMode(colorModeRestored);}, 050);
}

function useColorMode(colorModeRestored) {
    if (colorModeRestored == 'light') {
        document.getElementsByTagName("body")[0].classList.remove("dark-mode");
        document.getElementsByTagName("body")[0].classList.add("light-mode");
    } else if (colorModeRestored == 'dark') {
        document.getElementsByTagName("body")[0].classList.remove("light-mode");
        document.getElementsByTagName("body")[0].classList.add("dark-mode");
    }
}