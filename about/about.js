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
   setTimeout(function() {useColorMode(colorModeRestored);}, 50);
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