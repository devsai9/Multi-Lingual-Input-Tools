/*  THIS SCRIPT IS PART OF THE MULTI-LINGUAL INPUT TOOLS BROWSER EXTENSION
    JAVASCRIPT FOR FTA
    --------------------------------------------------------------
    Chrome: https://chrome.google.com/webstore/detail/multi-lingual-input-tools/dkbgodmmblfcnfledmedmepimmpebnjo?hl=en
    Microsoft Edge: https://microsoftedge.microsoft.com/addons/detail/multilingual-input-tools/aoehggnalolhonphifnooepocfjpghfl
    --------------------------------------------------------------
    Path: fta/fta.js
    --------------------------------------------------------------
*/

/* -------------------
|  DEFINE VARIABLES  |
------------------- */
// Typing Area
const typingArea = document.getElementById('textbox');

// Select Language Prompt
const langPromptContainer = document.getElementById('language-select-prompt');
const langPrompt_options_a = document.getElementById('prompt-options-page');

/* -----------------------
|  CORE FUNCTIONALITIES  |
----------------------- */
// Hide Containers 
setTimeout(function() {
    spanishContainer.style.display = "none";
    frenchContainer.style.display = "none";
    germanContainer.style.display = "none";
    romanianContainer.style.display = "none";
    dutchContainer.style.display = "none";
    langPromptContainer.style.display = "none";
}, 0050);

/* Load Chrome Vars */
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
    setTimeout(function() {useRestoredColorMode(colorModeRestored);}, 0250);
    setTimeout(function() {useRestoredLanguage(languageRestored);}, 0100);
}

function useRestoredColorMode(colorModeRestored) {
    if (colorModeRestored == "light") {
        document.getElementsByTagName("body")[0].setAttribute('data-theme', 'light');
    } else if (colorModeRestored == "dark") {
        document.getElementsByTagName("body")[0].setAttribute('data-theme', 'dark');
    }
}

function useRestoredLanguage(languageRestored) {
    if (languageRestored == 'prompt') {
        langPromptContainer.style.display = "block";
    } else if (languageRestored == 'spanish') {
        spanishContainer.style.display = "block";
    } else if (languageRestored == 'french') {
        frenchContainer.style.display = "block";
    } else if (languageRestored == 'german') {
        germanContainer.style.display = "block";
    } else if (languageRestored == 'romanian') {
        romanianContainer.style.display = "block";
    } else if (languageRestored == 'dutch') {
        dutchContainer.style.display = "block";
    }
}

/* ------------------
|  EVENT LISTENERS  |
------------------ */

/* ----------
|  Spanish  |
---------- */
// Variables
const spanishContainer = document.getElementById('spanish-container');
const spanish_uppercaseCheckbox = document.getElementById('spanish-uppercase');
var spanish_uppercase = document.getElementById('spanish-uppercase').checked;
const spanish_question_mark = document.getElementById('spanish-upsidedown-questionmark');
const spanish_exclamation_point = document.getElementById('spanish-upsidedown-exclamationmark');
const spanish_accent_a = document.getElementById('spanish-accent-a');
const spanish_accent_e = document.getElementById('spanish-accent-e');
const spanish_accent_i = document.getElementById('spanish-accent-i');
const spanish_accent_n = document.getElementById('spanish-accent-n');
const spanish_accent_o = document.getElementById('spanish-accent-o');
const spanish_accent_u = document.getElementById('spanish-accent-u');
const spanish_accent_u_doubledot = document.getElementById('spanish-accent-u-doubledot');
// All Accented Non-English Keyboard Letters (From Spanish)
spanishAccentedLetters = {
    question_mark: "¿",
    exclamation_point: "¡",
    a: "á",
    A: "Á",
    e: "é",
    E: "É",
    i: "í",
    I: "Í",
    n: "ñ",
    N: "Ñ",
    o: "ó",
    O: "Ó",
    u: "ú",
    U: "Ú",
    u_doubledot: "ü",
    U_DOUBLEDOT: "Ü"
}

// On Click Listeners
spanish_question_mark.onclick = function() {
    typingArea.value += spanishAccentedLetters.question_mark;
    typingArea.focus();
}
spanish_exclamation_point.onclick = function() {
    typingArea.value += spanishAccentedLetters.exclamation_point;
        typingArea.focus();
}
spanish_accent_a.onclick = function() {
    if (!spanish_uppercase) {
        typingArea.value += spanishAccentedLetters.a;
        typingArea.focus();
    } else if (spanish_uppercase) {
        typingArea.value += spanishAccentedLetters.A;
        typingArea.focus();
    }
}
spanish_accent_e.onclick = function() {
    if (!spanish_uppercase) {
        typingArea.value += spanishAccentedLetters.e;
        typingArea.focus();
    } else if (spanish_uppercase) {
        typingArea.value += spanishAccentedLetters.E;
        typingArea.focus();
    }
}
spanish_accent_i.onclick = function() {
    if (!spanish_uppercase) {
        typingArea.value += spanishAccentedLetters.i;
        typingArea.focus();
    } else if (spanish_uppercase) {
        typingArea.value += spanishAccentedLetters.I;
        typingArea.focus();
    }
}
spanish_accent_n.onclick = function() {
    if (!spanish_uppercase) {
        typingArea.value += spanishAccentedLetters.n;
        typingArea.focus();
    } else if (spanish_uppercase) {
        typingArea.value += spanishAccentedLetters.N;
        typingArea.focus();
    }
}
spanish_accent_o.onclick = function() {
    if (!spanish_uppercase) {
        typingArea.value += spanishAccentedLetters.o;
        typingArea.focus();
    } else if (spanish_uppercase) {
        typingArea.value += spanishAccentedLetters.O;
        typingArea.focus();
    }
}
spanish_accent_u.onclick = function() {
    if (!spanish_uppercase) {
        typingArea.value += spanishAccentedLetters.u;
        typingArea.focus();
    } else if (spanish_uppercase) {
        typingArea.value += spanishAccentedLetters.U;
        typingArea.focus();
    }
}
spanish_accent_u_doubledot.onclick = function() {
    if (!spanish_uppercase) {
        typingArea.value += spanishAccentedLetters.u_doubledot;
        typingArea.focus();
    } else if (spanish_uppercase) {
        typingArea.value += spanishAccentedLetters.U_DOUBLEDOT;
        typingArea.focus();
    }
}

// Change Text of buttons
function spanish_changeButtonTextCase() {
    if (!spanish_uppercaseCheckbox.checked) {
        spanish_accent_a.textContent = spanishAccentedLetters.a;
        spanish_accent_e.textContent = spanishAccentedLetters.e;
        spanish_accent_i.textContent = spanishAccentedLetters.i;
        spanish_accent_n.textContent = spanishAccentedLetters.n;
        spanish_accent_o.textContent = spanishAccentedLetters.o;
        spanish_accent_u.textContent = spanishAccentedLetters.u;
        spanish_accent_u_doubledot.textContent = spanishAccentedLetters.u_doubledot;
        spanish_uppercase = false;
    } else if (spanish_uppercaseCheckbox.checked) {
        spanish_accent_a.textContent = spanishAccentedLetters.A;
        spanish_accent_e.textContent = spanishAccentedLetters.E;
        spanish_accent_i.textContent = spanishAccentedLetters.I;
        spanish_accent_n.textContent = spanishAccentedLetters.N;
        spanish_accent_o.textContent = spanishAccentedLetters.O;
        spanish_accent_u.textContent = spanishAccentedLetters.U;
        spanish_accent_u_doubledot.textContent = spanishAccentedLetters.U_DOUBLEDOT;
        spanish_uppercase = true;
    }
}

// On Change Listener for when the user wants lowercase or uppercase letters
spanish_uppercaseCheckbox.onchange = function() {
    spanish_changeButtonTextCase();
}

// Using Shift to toggle lowercase and uppercase
document.addEventListener("keydown", function (event) {
    if (event.key == "Shift") {
        if (!spanish_uppercase) {
            spanish_uppercaseCheckbox.checked = true;
            spanish_uppercase = true;
        } else if (spanish_uppercase) {
            spanish_uppercaseCheckbox.checked = false;
            spanish_uppercase = false;
        }
        spanish_changeButtonTextCase();
    }
});

/* ---------
|  French  |
--------- */
// Variables
const frenchContainer = document.getElementById('french-container');
const french_uppercaseCheckbox = document.getElementById('french-uppercase');
var french_uppercase = document.getElementById('french-uppercase').checked;
const french_accent_a_backward = document.getElementById('french-accent-a-backward');
const french_accent_a_hat = document.getElementById('french-accent-a-hat');
const french_combined_ae = document.getElementById('french-combined-ae');
const french_accent_c = document.getElementById('french-accent-c');
const french_accent_e = document.getElementById('french-accent-e');
const french_accent_e_backward = document.getElementById('french-accent-e-backward');
const french_accent_e_hat = document.getElementById('french-accent-e-hat');
const french_accent_e_doubledot = document.getElementById('french-accent-e-doubledot');
const french_accent_i_doubledot = document.getElementById('french-accent-i-doubledot');
const french_accent_i_hat = document.getElementById('french-accent-i-hat');
const french_accent_o_hat = document.getElementById('french-accent-o-hat');
const french_combined_oe = document.getElementById('french-combined-oe');
const french_accent_u_backward = document.getElementById('french-accent-u-backward');
const french_accent_u_hat = document.getElementById('french-accent-u-hat');
const french_accent_u_doubledot = document.getElementById('french-accent-u-doubledot');
const french_accent_y_doubledot = document.getElementById('french-accent-y-doubledot');
// All Accented Non-English Keyboard Letters (From French)
frenchAccentedLetters = {
    a_backward: "à",
    A_BACKWARD: "À",
    a_hat: "â",
    A_HAT: "Â",
    ae: "æ",
    AE: "Æ",
    c: "ç",
    C: "Ç",
    e: "é",
    E: "É",
    e_backward: "è",
    E_BACKWARD: "È",
    e_hat: "ê",
    E_HAT: "Ê",
    e_doubledot: "ë",
    E_DOUBLEDOT: "Ë",
    i_doubledot: "ï",
    I_DOUBLEDOT: "Ï",
    i_hat: "î",
    I_HAT: "Î",
    o_hat: "ô",
    O_HAT: "Ô",
    oe: "œ",
    OE: "Œ",
    u_backward: "ù",
    U_BACKWARD: "Ù",
    u_hat: "û",
    U_HAT: "Û",
    u_doubledot: "ü",
    U_DOUBLEDOT: "Ü",
    y_doubledot: "ÿ",
    Y_DOUBLEDOT: "Ÿ"
}

// On-Click Listeners
french_accent_a_backward.onclick = function() {
    if (!french_uppercase) {
        typingArea.value += frenchAccentedLetters.a_backward;
        typingArea.focus();
    } else if (french_uppercase) {
        typingArea.value += frenchAccentedLetters.A_BACKWARD;
        typingArea.focus();
    }
}
french_accent_a_hat.onclick = function() {
    if (!french_uppercase) {
        typingArea.value += frenchAccentedLetters.a_hat;
        typingArea.focus();
    } else if (french_uppercase) {
        typingArea.value += frenchAccentedLetters.A_HAT;
        typingArea.focus();
    }
}
french_combined_ae.onclick = function() {
    if (!french_uppercase) {
        typingArea.value += frenchAccentedLetters.ae;
        typingArea.focus();
    } else if (french_uppercase) {
        typingArea.value += frenchAccentedLetters.AE;
        typingArea.focus();
    }
}
french_accent_c.onclick = function() {
    if (!french_uppercase) {
        typingArea.value += frenchAccentedLetters.c;
        typingArea.focus();
    } else if (french_uppercase) {
        typingArea.value += frenchAccentedLetters.C;
        typingArea.focus();
    }
}
french_accent_e.onclick = function() {
    if (!french_uppercase) {
        typingArea.value += frenchAccentedLetters.e;
        typingArea.focus();
    } else if (french_uppercase) {
        typingArea.value += frenchAccentedLetters.E;
        typingArea.focus();
    }
}
french_accent_e_backward.onclick = function() {
    if (!french_uppercase) {
        typingArea.value += frenchAccentedLetters.e_backward;
        typingArea.focus();
    } else if (french_uppercase) {
        typingArea.value += frenchAccentedLetters.E_BACKWARD;
        typingArea.focus();
    }
}
french_accent_e_hat.onclick = function() {
    if (!french_uppercase) {
        typingArea.value += frenchAccentedLetters.e_hat;
        typingArea.focus();
    } else if (french_uppercase) {
        typingArea.value += frenchAccentedLetters.E_HAT;
        typingArea.focus();
    }
}
french_accent_e_doubledot.onclick = function() {
    if (!french_uppercase) {
        typingArea.value += frenchAccentedLetters.e_doubledot;
        typingArea.focus();
    } else if (french_uppercase) {
        typingArea.value += frenchAccentedLetters.E_DOUBLEDOT;
        typingArea.focus();
    }
}
french_accent_i_doubledot.onclick = function() {
    if (!french_uppercase) {
        typingArea.value += frenchAccentedLetters.i_doubledot;
        typingArea.focus();
    } else if (french_uppercase) {
        typingArea.value += frenchAccentedLetters.I_DOUBLEDOT;
        typingArea.focus();
    }
}
french_accent_i_hat.onclick = function() {
    if (!french_uppercase) {
        typingArea.value += frenchAccentedLetters.i_hat;
        typingArea.focus();
    } else if (french_uppercase) {
        typingArea.value += frenchAccentedLetters.I_HAT;
        typingArea.focus();
    }
}
french_accent_o_hat.onclick = function() {
    if (!french_uppercase) {
        typingArea.value += frenchAccentedLetters.o_hat;
        typingArea.focus();
    } else if (french_uppercase) {
        typingArea.value += frenchAccentedLetters.O_HAT;
        typingArea.focus();
    }
}
french_combined_oe.onclick = function() {
    if (!french_uppercase) {
        typingArea.value += frenchAccentedLetters.oe;
        typingArea.focus();
    } else if (french_uppercase) {
        typingArea.value += frenchAccentedLetters.OE;
        typingArea.focus();
    }
}
french_accent_u_backward.onclick = function() {
    if (!french_uppercase) {
        typingArea.value += frenchAccentedLetters.u_backward;
        typingArea.focus();
    } else if (french_uppercase) {
        typingArea.value += frenchAccentedLetters.U_BACKWARD;
        typingArea.focus();
    }
}
french_accent_u_hat.onclick = function() {
    if (!french_uppercase) {
        typingArea.value += frenchAccentedLetters.u_hat;
        typingArea.focus();
    } else if (french_uppercase) {
        typingArea.value += frenchAccentedLetters.U_HAT;
        typingArea.focus();
    }
}
french_accent_u_doubledot.onclick = function() {
    if (!french_uppercase) {
        typingArea.value += frenchAccentedLetters.u_doubledot;
        typingArea.focus();
    } else if (french_uppercase) {
        typingArea.value += frenchAccentedLetters.U_DOUBLEDOT;
        typingArea.focus();
    }
}
french_accent_y_doubledot.onclick = function() {
    if (!french_uppercase) {
        typingArea.value += frenchAccentedLetters.y_doubledot;
        typingArea.focus();
    } else if (french_uppercase) {
        typingArea.value += frenchAccentedLetters.Y_DOUBLEDOT;
        typingArea.focus();
    }
}

// Change Text of buttons
function french_changeButtonTextCase() {
    if (!french_uppercaseCheckbox.checked) {
        french_accent_a_backward.textContent = frenchAccentedLetters.a_backward;
        french_accent_a_hat.textContent = frenchAccentedLetters.a_hat;
        french_combined_ae.textContent = frenchAccentedLetters.ae;
        french_accent_c.textContent = frenchAccentedLetters.c;
        french_accent_e.textContent = frenchAccentedLetters.e;
        french_accent_e_backward.textContent = frenchAccentedLetters.e_backward;
        french_accent_e_hat.textContent = frenchAccentedLetters.e_hat;
        french_accent_e_doubledot.textContent = frenchAccentedLetters.e_doubledot;
        french_accent_i_doubledot.textContent = frenchAccentedLetters.i_doubledot;
        french_accent_i_hat.textContent = frenchAccentedLetters.i_hat;
        french_accent_o_hat.textContent = frenchAccentedLetters.o_hat;
        french_combined_oe.textContent = frenchAccentedLetters.oe;
        french_accent_u_backward.textContent = frenchAccentedLetters.u_backward;
        french_accent_u_hat.textContent = frenchAccentedLetters.u_hat;
        french_accent_u_doubledot.textContent = frenchAccentedLetters.u_doubledot;
        french_accent_y_doubledot.textContent = frenchAccentedLetters.y_doubledot;
        french_uppercase = false;
    } else if (french_uppercaseCheckbox.checked) {
        french_accent_a_backward.textContent = frenchAccentedLetters.A_BACKWARD;
        french_accent_a_hat.textContent = frenchAccentedLetters.A_HAT;
        french_combined_ae.textContent = frenchAccentedLetters.AE;
        french_accent_c.textContent = frenchAccentedLetters.C;
        french_accent_e.textContent = frenchAccentedLetters.E;
        french_accent_e_backward.textContent = frenchAccentedLetters.E_BACKWARD;
        french_accent_e_hat.textContent = frenchAccentedLetters.E_HAT;
        french_accent_e_doubledot.textContent = frenchAccentedLetters.E_DOUBLEDOT;
        french_accent_i_doubledot.textContent = frenchAccentedLetters.I_DOUBLEDOT;
        french_accent_i_hat.textContent = frenchAccentedLetters.I_HAT;
        french_accent_o_hat.textContent = frenchAccentedLetters.O_HAT;
        french_combined_oe.textContent = frenchAccentedLetters.OE;
        french_accent_u_backward.textContent = frenchAccentedLetters.U_BACKWARD;
        french_accent_u_hat.textContent = frenchAccentedLetters.U_HAT;
        french_accent_u_doubledot.textContent = frenchAccentedLetters.U_DOUBLEDOT;
        french_accent_y_doubledot.textContent = frenchAccentedLetters.Y_DOUBLEDOT;
        french_uppercase = true;
    }
}

// On Change Listener for when the user wants lowercase or uppercase letters
french_uppercaseCheckbox.onchange = function() {
    french_changeButtonTextCase();
}

// Using Shift to toggle lowercase and uppercase
document.addEventListener("keydown", function (event) {
    if (event.key == "Shift") {
        if (!french_uppercase) {
            french_uppercaseCheckbox.checked = true;
            french_uppercase = true;
        } else if (french_uppercase) {
            french_uppercaseCheckbox.checked = false;
            french_uppercase = false;
        }
        french_changeButtonTextCase();
    }
});

/* ---------
|  German  |
--------- */
// Variables
const germanContainer = document.getElementById('german-container');
const german_uppercaseCheckbox = document.getElementById('german-uppercase');
var german_uppercase = document.getElementById('german-uppercase').checked;
const german_accent_a_doubledot = document.getElementById('german-accent-a-doubledot');
const german_accent_o_doubledot = document.getElementById('german-accent-o-doubledot');
const german_accent_u_doubledot = document.getElementById('german-accent-u-doubledot');
const german_beta = document.getElementById('german-beta');
// All Accented Non-English Keyboard Letters (From German)
germanAccentedLetters = {
    a_doubledot: "ä",
    A_DOUBLEDOT: "Ä",
    o_doubledot: "ö",
    O_DOUBLEDOT: "Ö",
    u_doubledot: "ü",
    U_DOUBLEDOT: "Ü",
    beta: "ß",
    BETA: "ẞ"
}

// Onclick Listeners
german_accent_a_doubledot.onclick = function() {
    if (!german_uppercase) {
        typingArea.value += germanAccentedLetters.a_doubledot;
        typingArea.focus();
    } else if (german_uppercase) {
        typingArea.value += germanAccentedLetters.A_DOUBLEDOT;
        typingArea.focus();
    }
}
german_accent_o_doubledot.onclick = function() {
    if (!german_uppercase) {
        typingArea.value += germanAccentedLetters.o_doubledot;
        typingArea.focus();
    } else if (german_uppercase) {
        typingArea.value += germanAccentedLetters.O_DOUBLEDOT;
        typingArea.focus();
    }
}
german_accent_u_doubledot.onclick = function() {
    if (!german_uppercase) {
        typingArea.value += germanAccentedLetters.u_doubledot;
        typingArea.focus();
    } else if (german_uppercase) {
        typingArea.value += germanAccentedLetters.U_DOUBLEDOT;
        typingArea.focus();
    }
}
german_beta.onclick = function() {
    if (!german_uppercase) {
        typingArea.value += germanAccentedLetters.beta;
        typingArea.focus();
    } else if (german_uppercase) {
        typingArea.value += germanAccentedLetters.BETA;
        typingArea.focus();
    }
}

// Change Text of buttons
function german_changeButtonTextCase() {
    if (!german_uppercaseCheckbox.checked) {
        german_accent_a_doubledot.textContent = germanAccentedLetters.a_doubledot;
        german_accent_o_doubledot.textContent = germanAccentedLetters.o_doubledot;
        german_accent_u_doubledot.textContent = germanAccentedLetters.u_doubledot;
        german_beta.textContent = germanAccentedLetters.beta;
        german_uppercase = false;
    } else if (german_uppercaseCheckbox.checked) {
        german_accent_a_doubledot.textContent = germanAccentedLetters.A_DOUBLEDOT;
        german_accent_o_doubledot.textContent = germanAccentedLetters.O_DOUBLEDOT;
        german_accent_u_doubledot.textContent = germanAccentedLetters.U_DOUBLEDOT;
        german_beta.textContent = germanAccentedLetters.BETA;
        german_uppercase = true;
    }
}
// On Change Listener for when the user wants lowercase or uppercase letters
german_uppercaseCheckbox.onchange = function() {
    german_changeButtonTextCase();
}

// Using Shift to toggle lowercase and uppercase
document.addEventListener("keydown", function (event) {
    if (event.key == "Shift") {
        if (!german_uppercase) {
            german_uppercaseCheckbox.checked = true;
            german_uppercase = true;
        } else if (german_uppercase) {
            german_uppercaseCheckbox.checked = false;
            german_uppercase = false;
        }
        german_changeButtonTextCase();
    }
});

/* -----------
|  Romanian  |
----------- */
setTimeout(function() {
    if (romanianContainer.style.display == 'block') {
        document.getElementById("romanian-input-buttons").style.fontFamily = "sans-serif";
        typingArea.style.fontFamily = "sans-serif";
        typingArea.style.fontWeight = "bold";
    }
}, 0250);

// Variables
const romanianContainer = document.getElementById('romanian-container');
const romanian_uppercaseCheckbox = document.getElementById('romanian-uppercase');
var romanian_uppercase = document.getElementById('romanian-uppercase').checked;
const romanian_accent_a_slur = document.getElementById('romanian-accent-a-slur');
const romanian_accent_a_hat = document.getElementById('romanian-accent-a-hat');
const romanian_accent_i_hat = document.getElementById('romanian-accent-i-hat');
const romanian_accent_s_long = document.getElementById('romanian-accent-s-long');
const romanian_accent_s_short = document.getElementById('romanian-accent-s-short');
const romanian_accent_t_long = document.getElementById('romanian-accent-t-long');
const romanian_accent_t_short = document.getElementById('romanian-accent-t-short');
// All Accented Non-English Keyboard Letters (From Romanian)
romanianAccentedLetters = {
    a_slur: "ă",
    A_SLUR: "Ă",
    a_hat: "â",
    A_HAT: "Â",
    i_hat: "î",
    I_HAT: "Î",
    s_long: "ș",
    S_LONG: "Ș",
    s_short: "ş",
    S_SHORT: "Ş",
    t_long: "ț",
    T_LONG: "Ț",
    t_short: "ţ",
    T_SHORT: "Ţ",
}

// Onclick Listeners
romanian_accent_a_slur.onclick = function() {
    if (!romanian_uppercase) {
        typingArea.value += romanianAccentedLetters.a_slur;
        typingArea.focus();
    } else if (romanian_uppercase) {
        typingArea.value += romanianAccentedLetters.A_SLUR;
        typingArea.focus();
    }
}
romanian_accent_a_hat.onclick = function() {
    if (!romanian_uppercase) {
        typingArea.value += romanianAccentedLetters.a_hat;
        typingArea.focus();
    } else if (romanian_uppercase) {
        typingArea.value += romanianAccentedLetters.A_HAT;
        typingArea.focus();
    }
}
romanian_accent_i_hat.onclick = function() {
    if (!romanian_uppercase) {
        typingArea.value += romanianAccentedLetters.i_hat;
        typingArea.focus();
    } else if (romanian_uppercase) {
        typingArea.value += romanianAccentedLetters.I_HAT;
        typingArea.focus();
    }
}
romanian_accent_s_long.onclick = function() {
    if (!romanian_uppercase) {
        typingArea.value += romanianAccentedLetters.s_long;
        typingArea.focus();
    } else if (romanian_uppercase) {
        typingArea.value += romanianAccentedLetters.S_LONG;
        typingArea.focus();
    }
}
romanian_accent_s_short.onclick = function() {
    if (!romanian_uppercase) {
        typingArea.value += romanianAccentedLetters.s_short;
        typingArea.focus();
    } else if (romanian_uppercase) {
        typingArea.value += romanianAccentedLetters.S_SHORT;
        typingArea.focus();
    }
}
romanian_accent_t_long.onclick = function() {
    if (!romanian_uppercase) {
        typingArea.value += romanianAccentedLetters.t_long;
        typingArea.focus();
    } else if (romanian_uppercase) {
        typingArea.value += romanianAccentedLetters.T_LONG;
        typingArea.focus();
    }
}
romanian_accent_t_short.onclick = function() {
    if (!romanian_uppercase) {
        typingArea.value += romanianAccentedLetters.t_short;
        typingArea.focus();
    } else if (romanian_uppercase) {
        typingArea.value += romanianAccentedLetters.T_SHORT;
        typingArea.focus();
    }
}

// Change Text of buttons
function romanian_changeButtonTextCase() {
    if (!romanian_uppercaseCheckbox.checked) {
        romanian_accent_a_slur.textContent = romanianAccentedLetters.a_slur;
        romanian_accent_a_hat.textContent = romanianAccentedLetters.a_hat;
        romanian_accent_i_hat.textContent = romanianAccentedLetters.i_hat;
        romanian_accent_s_long.textContent = romanianAccentedLetters.s_long;
        romanian_accent_s_short.textContent = romanianAccentedLetters.s_short;
        romanian_accent_t_long.textContent = romanianAccentedLetters.t_long;
        romanian_accent_t_short.textContent = romanianAccentedLetters.t_short;
        romanian_uppercase = false;
    } else if (romanian_uppercaseCheckbox.checked) {
        romanian_accent_a_slur.textContent = romanianAccentedLetters.A_SLUR;
        romanian_accent_a_hat.textContent = romanianAccentedLetters.A_HAT;
        romanian_accent_i_hat.textContent = romanianAccentedLetters.I_HAT;
        romanian_accent_s_long.textContent = romanianAccentedLetters.S_LONG;
        romanian_accent_s_short.textContent = romanianAccentedLetters.S_SHORT;
        romanian_accent_t_long.textContent = romanianAccentedLetters.T_LONG;
        romanian_accent_t_short.textContent = romanianAccentedLetters.T_SHORT;
        romanian_uppercase = true;
    }
}
// On Change Listener for when the user wants lowercase or uppercase letters
romanian_uppercaseCheckbox.onchange = function() {
    romanian_changeButtonTextCase();
}

// Using Shift to toggle lowercase and uppercase
document.addEventListener("keydown", function (event) {
    if (event.key == "Shift") {
        if (!romanian_uppercase) {
            romanian_uppercaseCheckbox.checked = true;
            romanian_uppercase = true;
        } else if (romanian_uppercase) {
            romanian_uppercaseCheckbox.checked = false;
            romanian_uppercase = false;
        }
        romanian_changeButtonTextCase();
    }
});

/* --------
|  Dutch  |
-------- */
// Variables
const dutchContainer = document.getElementById('dutch-container');
const dutch_uppercaseCheckbox = document.getElementById('dutch-uppercase');
var dutch_uppercase = document.getElementById('dutch-uppercase').checked;
const dutch_accent_e = document.getElementById('dutch-accent-e');
const dutch_accent_e_doubledot = document.getElementById('dutch-accent-e-doubledot');
const dutch_accent_i_doubledot = document.getElementById('dutch-accent-i-doubledot');
const dutch_accent_o = document.getElementById('dutch-accent-o');
const dutch_accent_o_doubledot = document.getElementById('dutch-accent-o-doubledot');
const dutch_accent_u_doubledot = document.getElementById('dutch-accent-u-doubledot');
// All Accented Non-English Keyboard Letters (From Dutch)
dutchAccentedLetters = {
    e: "é",
    E: "É",
    e_doubledot: "ë",
    E_DOUBLEDOT: "Ë",
    i_doubledot: "ï",
    I_DOUBLEDOT: "Ï",
    o: "ó",
    O: "Ó",
    o_doubledot: "ö",
    O_DOUBLEDOT: "Ö",
    u_doubledot: "ü",
    U_DOUBLEDOT: "Ü"
}

// On-Click Listeners
dutch_accent_e.onclick = function() {
    if (!dutch_uppercase) {
        typingArea.value += dutchAccentedLetters.e;
        typingArea.focus();
    } else if (dutch_uppercase) {
        typingArea.value += dutchAccentedLetters.E;
        typingArea.focus();
    }
}
dutch_accent_e_doubledot.onclick = function() {
    if (!dutch_uppercase) {
        typingArea.value += dutchAccentedLetters.e_doubledot;
        typingArea.focus();
    } else if (dutch_uppercase) {
        typingArea.value += dutchAccentedLetters.E_DOUBLEDOT;
        typingArea.focus();
    }
}
dutch_accent_i_doubledot.onclick = function() {
    if (!dutch_uppercase) {
        typingArea.value += dutchAccentedLetters.i_doubledot;
        typingArea.focus();
    } else if (dutch_uppercase) {
        typingArea.value += dutchAccentedLetters.I_DOUBLEDOT;
        typingArea.focus();
    }
}
dutch_accent_o.onclick = function() {
    if (!dutch_uppercase) {
        typingArea.value += dutchAccentedLetters.o;
        typingArea.focus();
    } else if (dutch_uppercase) {
        typingArea.value += dutchAccentedLetters.O;
        typingArea.focus();
    }
}
dutch_accent_o_doubledot.onclick = function() {
    if (!dutch_uppercase) {
        typingArea.value += dutchAccentedLetters.o_doubledot;
        typingArea.focus();
    } else if (dutch_uppercase) {
        typingArea.value += dutchAccentedLetters.O_DOUBLEDOT;
        typingArea.focus();
    }
}
dutch_accent_u_doubledot.onclick = function() {
    if (!dutch_uppercase) {
        typingArea.value += dutchAccentedLetters.u_doubledot;
        typingArea.focus();
    } else if (dutch_uppercase) {
        typingArea.value += dutchAccentedLetters.U_DOUBLEDOT;
        typingArea.focus();
    }
}

// Change Text of buttons
function dutch_changeButtonTextCase() {
    if (!dutch_uppercaseCheckbox.checked) {
        dutch_accent_e.textContent = dutchAccentedLetters.e;
        dutch_accent_e_doubledot.textContent = dutchAccentedLetters.e_doubledot;
        dutch_accent_i_doubledot.textContent = dutchAccentedLetters.i_doubledot;
        dutch_accent_o.textContent = dutchAccentedLetters.o;
        dutch_accent_o_doubledot.textContent = dutchAccentedLetters.o_doubledot;
        dutch_accent_u_doubledot.textContent = dutchAccentedLetters.u_doubledot;
        dutch_uppercase = false;
    } else if (dutch_uppercaseCheckbox.checked) {
        dutch_accent_e.textContent = dutchAccentedLetters.E;
        dutch_accent_e_doubledot.textContent = dutchAccentedLetters.E_DOUBLEDOT;
        dutch_accent_i_doubledot.textContent = dutchAccentedLetters.I_DOUBLEDOT;
        dutch_accent_o.textContent = dutchAccentedLetters.O;
        dutch_accent_o_doubledot.textContent = dutchAccentedLetters.O_DOUBLEDOT;
        dutch_accent_u_doubledot.textContent = dutchAccentedLetters.U_DOUBLEDOT;
        dutch_uppercase = true;
    }
}

// On Change Listener for when the user wants lowercase or uppercase letters
dutch_uppercaseCheckbox.onchange = function() {
    dutch_changeButtonTextCase();
}

// Using Shift to toggle lowercase and uppercase
document.addEventListener("keydown", function (event) {
    if (event.key == "Shift") {
        if (!dutch_uppercase) {
            dutch_uppercaseCheckbox.checked = true;
            dutch_uppercase = true;
        } else if (dutch_uppercase) {
            dutch_uppercaseCheckbox.checked = false;
            dutch_uppercase = false;
        }
        dutch_changeButtonTextCase();
    }
});