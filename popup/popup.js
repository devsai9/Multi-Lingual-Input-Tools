/*  THIS SCRIPT IS PART OF THE MULTI-LINGUAL INPUT TOOLS BROWSER EXTENSION
    JAVASCRIPT FOR POPUP
    --------------------------------------------------------------
    Chrome: https://chrome.google.com/webstore/detail/multi-lingual-input-tools/dkbgodmmblfcnfledmedmepimmpebnjo?hl=en
    Microsoft Edge: https://microsoftedge.microsoft.com/addons/detail/multilingual-input-tools/aoehggnalolhonphifnooepocfjpghfl
    --------------------------------------------------------------
    Path: popup/popup.js
    --------------------------------------------------------------
*/

// Hide Containers 
document.getElementById('spanish-container').style.display = "none";
document.getElementById('french-container').style.display = "none";
document.getElementById('german-container').style.display = "none";
document.getElementById('language-select-prompt').style.display = "none";

// Chrome-Synced Variables
var colorModeRestored = '/';
var languageRestored = '/';

// Get Chrome Sync Variables
getChromeVars();
function getChromeVars() {
    chrome.storage.sync.get({
        // Default to Dark Mode if there is no Color Mode chosen
        colorMode: 'dark',
        // Default to prompting the user to select a language in the options page if no Language is chosen
        language: 'prompt'
    }, function (item) {
        colorModeRestored = item.colorMode;
        languageRestored = item.language;
    });
    // Call functions to use the Chrome Variables
    setTimeout(function() {useRestoredColorMode(colorModeRestored);}, 050);
    setTimeout(function() {useRestoredLanguage(languageRestored);}, 050);
}

// Use the Chrome "colorMode" (Color Mode) variable
function useRestoredColorMode(colorModeRestored) {
    if (colorModeRestored == 'light') {
        document.getElementsByTagName('body')[0].classList.add('light-mode');
    } else if (colorModeRestored == 'dark') {
        document.getElementsByTagName('body')[0].classList.add('dark-mode');
    }
}

// Use the Chrome "language" (Language) variable
function useRestoredLanguage(languageRestored) {
    if (languageRestored == 'prompt') {
        document.getElementById('language-select-prompt').style.display = "block";
    } else if (languageRestored == 'spanish') {
        var spanishScript = document.createElement('script');
        spanishScript.src = 'language/spanish.js';
        document.getElementById('scripts').appendChild(spanishScript);
        document.getElementById('spanish-container').style.display = "block";
    } else if (languageRestored == 'french') {
        var frenchScript = document.createElement('script');
        frenchScript.src = 'language/french.js';
        document.getElementById('scripts').appendChild(frenchScript);
        document.getElementById('french-container').style.display = "block";
    } else if (languageRestored == 'german') {
        var germanScript = document.createElement('script');
        germanScript.src = 'language/german.js';
        document.getElementById('scripts').appendChild(germanScript);
        document.getElementById('german-container').style.display = "block";
    }
}

// On Click Listeners in Menu
document.getElementById('settings-icon').onclick = function() {
    if (chrome.runtime.openOptionsPage) {
        chrome.runtime.openOptionsPage();
    } else {
        window.open(chrome.runtime.getURL('/options/options.html'));
    }
}

document.getElementById('about-icon').onclick = function() {
    window.open(chrome.runtime.getURL('/about/about.html'));
}

// On Click Listener for Prompt
document.getElementById('prompt-options-page').onclick = function() {
    if (chrome.runtime.openOptionsPage) {
        chrome.runtime.openOptionsPage();
    } else {
        window.open(chrome.runtime.getURL('/options/options.html'));
    }
}