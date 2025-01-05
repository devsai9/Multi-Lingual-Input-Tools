// Hide Containers
const langPromptContainer = document.getElementById('language-select-prompt');
langPromptContainer.style.display = "none";
const usageContainer = document.getElementById('ultimate-container');
usageContainer.style.display = "none";

// Define every letter's HTML element
const uppercaseCheckbox = document.getElementById('uppercase');
let uppercase = document.getElementById('uppercase').checked;
const accent_a_forward = document.getElementById('accent-a-forward');
const accent_a_backward = document.getElementById('accent-a-backward');
const accent_a_doubledot = document.getElementById('accent-a-doubledot');
const accent_a_hat = document.getElementById('accent-a-hat');
const accent_a_slur = document.getElementById('accent-a-slur');
const accent_a_tilde = document.getElementById('accent-a-tilde');
const accent_ae = document.getElementById('combined-ae');
const accent_c_lower = document.getElementById('accent-c-under');
const accent_e_forward = document.getElementById('accent-e-forward');
const accent_e_backward = document.getElementById('accent-e-backward');
const accent_e_doubledot = document.getElementById('accent-e-doubledot');
const accent_e_hat = document.getElementById('accent-e-hat');
const accent_i_forward = document.getElementById('accent-i-forward');
const accent_i_doubledot = document.getElementById('accent-i-doubledot');
const accent_i_hat = document.getElementById('accent-i-hat');
const accent_n_tilde = document.getElementById('accent-n-tilde');
const accent_o_forward = document.getElementById('accent-o-forward');
const accent_o_doubledot = document.getElementById('accent-o-doubledot');
const accent_o_hat = document.getElementById('accent-o-hat');
const accent_o_tilde = document.getElementById('accent-o-tilde');
const accent_oe = document.getElementById('combined-oe');
const accent_s_long = document.getElementById('accent-s-long');
const accent_s_short = document.getElementById('accent-s-short');
const accent_t_long = document.getElementById('accent-t-long');
const accent_t_short = document.getElementById('accent-t-short');
const accent_u_forward = document.getElementById('accent-u-forward');
const accent_u_backward = document.getElementById('accent-u-backward');
const accent_u_doubledot = document.getElementById('accent-u-doubledot');
const accent_u_hat = document.getElementById('accent-u-hat');
const accent_beta = document.getElementById('accent-beta');
const accent_y_doubledot = document.getElementById('accent-y-doubledot');
const upside_down_question_mark = document.getElementById('upsidedown-questionmark');
const upside_down_exclamation_point = document.getElementById('upsidedown-exclamationmark');

// Chrome-Synced Variables
let colorModeRestored = '/';
let languageRestored = '/';

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
    setTimeout(function() {useRestoredColorMode(colorModeRestored);}, 50);
    setTimeout(function() {useRestoredLanguage(languageRestored);}, 50);
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
    let langElements = document.querySelectorAll('.' + languageRestored);
    let elements = document.querySelectorAll('.input-button');
    elements.forEach(element => {
        element.style.display = 'none';
    });
    
    if (languageRestored == 'prompt') langPromptContainer.style.display = "block";
    else {
        document.querySelector('#ultimate-container').style.display = "inline-block";
        langElements.forEach(langElement => {
            langElement.style.display = 'inline-block';
        });

        if (languageRestored == 'romanian' || languageRestored == 'german') {
            document.getElementsByClassName('input-buttons')[0].style.fontFamily = 'sans-serif';
        }

        if (languageRestored == 'french') {
            document.querySelector('#ultimate-container').style.width = "650px";
        }

        document.getElementById('type-lang').textContent = chrome.i18n.getMessage("type") + " " + chrome.i18n.getMessage(languageRestored) || 'Type ' + languageRestored.charAt(0).toUpperCase() + languageRestored.slice(1);
    }
}

// On Click Listener for Menu
function openOptionsPage() {
    if (chrome.runtime.openOptionsPage) {
        chrome.runtime.openOptionsPage();
    } else {
        window.open(chrome.runtime.getURL('/options/options.html'));
    }
}

// document.getElementById('prompt-options-page-en').onclick = function() {
//     openOptionsPage();
// }

document.getElementById('about-icon').onclick = function() {
    window.open(chrome.runtime.getURL('/about/about.html'));
}

document.getElementById('fta-icon').onclick = function() {
    window.open(chrome.runtime.getURL('/fta/fta.html'));
}

document.getElementById('settings-icon').onclick = function() {
    openOptionsPage();
}

// Event Listeners for buttons
accent_a_forward.onclick = function() {copyCharacter('á', accent_a_forward);};
accent_a_backward.onclick = function() {copyCharacter('à', accent_a_backward);};
accent_a_doubledot.onclick = function() {copyCharacter('ä', accent_a_doubledot);};
accent_a_hat.onclick = function() {copyCharacter('â', accent_a_hat);};
accent_a_slur.onclick = function() {copyCharacter('ă', accent_a_slur);};
accent_a_tilde.onclick = function() {copyCharacter('ã', accent_a_tilde);};
accent_ae.onclick = function() {copyCharacter('æ', accent_ae);};
accent_c_lower.onclick = function() {copyCharacter('ç', accent_c_lower);};
accent_e_forward.onclick = function() {copyCharacter('é', accent_e_forward);};
accent_e_backward.onclick = function() {copyCharacter('è', accent_e_backward);};
accent_e_doubledot.onclick = function() {copyCharacter('ë', accent_e_doubledot);};
accent_e_hat.onclick = function() {copyCharacter('ê', accent_e_hat);};
accent_i_forward.onclick = function() {copyCharacter('í', accent_i_forward);};
accent_i_doubledot.onclick = function() {copyCharacter('ï', accent_i_doubledot);};
accent_i_hat.onclick = function() {copyCharacter('î', accent_i_hat);};
accent_n_tilde.onclick = function() {copyCharacter('ñ', accent_n_tilde);};
accent_o_forward.onclick = function() {copyCharacter('ó', accent_o_forward);};
accent_o_doubledot.onclick = function() {copyCharacter('ö', accent_o_doubledot);};
accent_o_hat.onclick = function() {copyCharacter('ô', accent_o_hat);};
accent_o_tilde.onclick = function() {copyCharacter('õ', accent_o_tilde);};
accent_oe.onclick = function() {copyCharacter('œ', accent_oe);};
accent_s_long.onclick = function() {copyCharacter('ș', accent_s_long);};
accent_s_short.onclick = function() {copyCharacter('ş', accent_s_short);};
accent_t_long.onclick = function() {copyCharacter('ț', accent_t_long);};
accent_t_short.onclick = function() {copyCharacter('ţ', accent_t_short);};
accent_u_forward.onclick = function() {copyCharacter('ú', accent_u_forward);};
accent_u_backward.onclick = function() {copyCharacter('ù', accent_u_backward);};
accent_u_doubledot.onclick = function() {copyCharacter('ü', accent_u_doubledot);};
accent_u_hat.onclick = function() {copyCharacter('û', accent_u_hat);};
accent_beta.onclick = function() {copyCharacter('ß', accent_beta);};
accent_y_doubledot.onclick = function() {copyCharacter('ÿ', accent_y_doubledot);};
upside_down_question_mark.onclick = function() {copyCharacter('¿', upside_down_question_mark);};
upside_down_exclamation_point.onclick = function() {copyCharacter('¡', upside_down_exclamation_point);};

function copyCharacter(character, id) {
    if (uppercase) {
        if (character == 'ß') {
            navigator.clipboard.writeText('ẞ').then(function() {
                id.textContent = "Copied";
                setTimeout(function() {
                    id.textContent = 'ß';
                }, 1000);
            });
        } else {
            navigator.clipboard.writeText(character.toUpperCase()).then(function() {
                id.textContent = "Copied";
                setTimeout(function() {
                    id.textContent = character.toUpperCase();
                }, 1000);
            });
        }
    } else {
        navigator.clipboard.writeText(character).then(function() {
            id.textContent = "Copied";
            setTimeout(function() {
                id.textContent = character;
            }, 1000);
        });
    }
}

// Using Shift to toggle lowercase and uppercase
document.addEventListener("keydown", function (event) {
    if (event.key == "Shift") {
        if (!uppercase) {
            uppercaseCheckbox.checked = true;
            uppercase = true;
        } else if (uppercase) {
            uppercaseCheckbox.checked = false;
            uppercase = false;
        }
        changeButtonTextCase();
    }
});

uppercaseCheckbox.addEventListener('change', function() {
    uppercase = uppercaseCheckbox.checked;
    changeButtonTextCase();
});

function changeButtonTextCase() {
    if (!uppercase) {
        accent_a_forward.textContent = 'á';
        accent_a_backward.textContent = 'à';
        accent_a_doubledot.textContent = 'ä';
        accent_a_hat.textContent = 'â';
        accent_a_slur.textContent = 'ă';
        accent_a_tilde.textContent = 'ã';
        accent_ae.textContent = 'æ';
        accent_c_lower.textContent = 'ç';
        accent_e_forward.textContent = 'é';
        accent_e_backward.textContent = 'è';
        accent_e_doubledot.textContent = 'ë';
        accent_e_hat.textContent = 'ê';
        accent_i_forward.textContent = 'í';
        accent_i_doubledot.textContent = 'ï';
        accent_i_hat.textContent = 'î';
        accent_n_tilde.textContent = 'ñ';
        accent_o_forward.textContent = 'ó';
        accent_o_doubledot.textContent = 'ö';
        accent_o_hat.textContent = 'ô';
        accent_o_tilde.textContent = 'õ';
        accent_oe.textContent = 'œ';
        accent_s_long.textContent = 'ș';
        accent_s_short.textContent = 'ş';
        accent_t_long.textContent = 'ț';
        accent_t_short.textContent = 'ţ';
        accent_u_forward.textContent = 'ú';
        accent_u_backward.textContent = 'ù';
        accent_u_doubledot.textContent = 'ü';
        accent_u_hat.textContent = 'û';
        accent_beta.textContent = 'ß';
        accent_y_doubledot.textContent = 'ÿ';
        upside_down_question_mark.textContent = '¿';
        upside_down_exclamation_point.textContent = '¡';
    } else if (uppercase) {
        accent_a_forward.textContent = 'á'.toUpperCase();
        accent_a_backward.textContent = 'à'.toUpperCase();
        accent_a_doubledot.textContent = 'ä'.toUpperCase();
        accent_a_hat.textContent = 'â'.toUpperCase();
        accent_a_slur.textContent = 'ă'.toUpperCase();
        accent_a_tilde.textContent = 'ã'.toUpperCase();
        accent_ae.textContent = 'æ'.toUpperCase();
        accent_c_lower.textContent = 'ç'.toUpperCase();
        accent_e_forward.textContent = 'é'.toUpperCase();
        accent_e_backward.textContent = 'è'.toUpperCase();
        accent_e_doubledot.textContent = 'ë'.toUpperCase();
        accent_e_hat.textContent = 'ê'.toUpperCase();
        accent_i_forward.textContent = 'í'.toUpperCase();
        accent_i_doubledot.textContent = 'ï'.toUpperCase();
        accent_i_hat.textContent = 'î'.toUpperCase();
        accent_n_tilde.textContent = 'ñ'.toUpperCase();
        accent_o_forward.textContent = 'ó'.toUpperCase();
        accent_o_doubledot.textContent = 'ö'.toUpperCase();
        accent_o_hat.textContent = 'ô'.toUpperCase();
        accent_o_tilde.textContent = 'õ'.toUpperCase();
        accent_oe.textContent = 'œ'.toUpperCase();
        accent_s_long.textContent = 'ș'.toUpperCase();
        accent_s_short.textContent = 'ş'.toUpperCase();
        accent_t_long.textContent = 'ț'.toUpperCase();
        accent_t_short.textContent = 'ţ'.toUpperCase();
        accent_u_forward.textContent = 'ú'.toUpperCase();
        accent_u_backward.textContent = 'ù'.toUpperCase();
        accent_u_doubledot.textContent = 'ü'.toUpperCase();
        accent_u_hat.textContent = 'û'.toUpperCase();
        accent_beta.textContent = 'ẞ';
        accent_y_doubledot.textContent = 'ÿ'.toUpperCase();
        upside_down_question_mark.textContent = '¿';
        upside_down_exclamation_point.textContent = '¡';
    }
}