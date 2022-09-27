/*  THIS SCRIPT IS PART OF THE MULTI-LINGUAL INPUT TOOLS BROWSER EXTENSION
    JAVASCRIPT FOR GERMAN INPUT TOOLS
    --------------------------------------------------------------
    Chrome: https://chrome.google.com/webstore/detail/multi-lingual-input-tools/dkbgodmmblfcnfledmedmepimmpebnjo?hl=en
    Microsoft Edge: https://microsoftedge.microsoft.com/addons/detail/multilingual-input-tools/aoehggnalolhonphifnooepocfjpghfl
    --------------------------------------------------------------
    Path: popup/language/german.js
    --------------------------------------------------------------
*/

/* Defining Variables */
// Elements on page
const uppercaseCheckbox = document.getElementById('german-uppercase');
var uppercase = document.getElementById('german-uppercase').checked;
const accent_a_doubledot = document.getElementById('german-accent-a-doubledot');
const accent_o_doubledot = document.getElementById('german-accent-o-doubledot');
const accent_u_doubledot = document.getElementById('german-accent-u-doubledot');
const beta = document.getElementById('german-beta');

// All Accented Non-English Keyboard Letters (From German)
accentedLetters = {
    a_doubledot: "ä",
    A_DOUBLEDOT: "Ä",
    o_doubledot: "ö",
    O_DOUBLEDOT: "Ö",
    u_doubledot: "ü",
    U_DOUBLEDOT: "Ü",
    beta: "ß",
    BETA: "ẞ"
}

/* Extension Core Function (German) */
// Change Text of Buttons
function changeButtonTextCase() {
    uppercase = uppercaseCheckbox.checked;
    if (!uppercase) {
        accent_a_doubledot.textContent = accentedLetters.a_doubledot;
        accent_o_doubledot.textContent = accentedLetters.o_doubledot;
        accent_u_doubledot.textContent = accentedLetters.u_doubledot;
        beta.textContent = accentedLetters.beta;
    } else if (uppercase) {
        accent_a_doubledot.textContent = accentedLetters.A_DOUBLEDOT;
        accent_o_doubledot.textContent = accentedLetters.O_DOUBLEDOT;
        accent_u_doubledot.textContent = accentedLetters.U_DOUBLEDOT;
        beta.textContent = accentedLetters.BETA;
    }
}

// On Click Listeners
accent_a_doubledot.onclick = function() {
    if (!uppercase) {
        navigator.clipboard.writeText(accentedLetters.a_doubledot).then(function() {
            accent_a_doubledot.textContent = "Copied";
            setTimeout(function() {
                accent_a_doubledot.textContent = accentedLetters.a_doubledot;
            }, 1000);
        });
    } else if (uppercase) {
        navigator.clipboard.writeText(accentedLetters.A_DOUBLEDOT).then(function() {
            accent_a_doubledot.textContent = "Copied";
            setTimeout(function() {
                accent_a_doubledot.textContent = accentedLetters.A_DOUBLEDOT;
            }, 1000);
        });
    }
}
accent_o_doubledot.onclick = function() {
    if (!uppercase) {
        navigator.clipboard.writeText(accentedLetters.o_doubledot).then(function() {
            accent_o_doubledot.textContent = "Copied";
            setTimeout(function() {
                accent_o_doubledot.textContent = accentedLetters.o_doubledot;
            }, 1000);
        });
    } else if (uppercase) {
        navigator.clipboard.writeText(accentedLetters.O_DOUBLEDOT).then(function() {
            accent_o_doubledot.textContent = "Copied";
            setTimeout(function() {
                accent_o_doubledot.textContent = accentedLetters.O_DOUBLEDOT;
            }, 1000);
        });
    }
}
accent_u_doubledot.onclick = function() {
    if (!uppercase) {
        navigator.clipboard.writeText(accentedLetters.u_doubledot).then(function() {
            accent_u_doubledot.textContent = "Copied";
            setTimeout(function() {
                accent_u_doubledot.textContent = accentedLetters.u_doubledot;
            }, 1000);
        });
    } else if (uppercase) {
        navigator.clipboard.writeText(accentedLetters.U_DOUBLEDOT).then(function() {
            accent_u_doubledot.textContent = "Copied";
            setTimeout(function() {
                accent_u_doubledot.textContent = accentedLetters.U_DOUBLEDOT;
            }, 1000);
        });
    }
}
beta.onclick = function() {
    if (!uppercase) {
        navigator.clipboard.writeText(accentedLetters.beta).then(function() {
            beta.textContent = "Copied";
            setTimeout(function() {
                beta.textContent = accentedLetters.beta;
            }, 1000);
        });
    } else if (uppercase) {
        navigator.clipboard.writeText(accentedLetters.BETA).then(function() {
            beta.textContent = "Copied";
            setTimeout(function() {
                beta.textContent = accentedLetters.BETA;
            }, 1000);
        });
    }
}

// On Change Listener for when the user wants lowercase or uppercase letters
uppercaseCheckbox.onchange = function() {
    changeButtonTextCase();
}

// Using Shift to toggle lowercase and uppercase
document.addEventListener("keydown", function (event) {
    if (event.key == "Shift") {
        if (!uppercase) {
            uppercaseCheckbox.checked = true;
        } else if (uppercase) {
            uppercaseCheckbox.checked = false;
        }
        changeButtonTextCase();
    }
});