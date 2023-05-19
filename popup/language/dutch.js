/*  THIS SCRIPT IS PART OF THE MULTI-LINGUAL INPUT TOOLS BROWSER EXTENSION
    JAVASCRIPT FOR DUTCH INPUT TOOLS
    --------------------------------------------------------------
    Chrome: https://chrome.google.com/webstore/detail/multi-lingual-input-tools/dkbgodmmblfcnfledmedmepimmpebnjo?hl=en
    Microsoft Edge: https://microsoftedge.microsoft.com/addons/detail/multilingual-input-tools/aoehggnalolhonphifnooepocfjpghfl
    --------------------------------------------------------------
    Path: popup/language/dutch.js
    --------------------------------------------------------------
*/

// Elements on page
const uppercaseCheckbox = document.getElementById('dutch-uppercase');
var uppercase = document.getElementById('dutch-uppercase').checked;
const accent_e = document.getElementById('dutch-accent-e');
const accent_e_doubledot = document.getElementById('dutch-accent-e-doubledot');
const accent_i_doubledot = document.getElementById('dutch-accent-i-doubledot');
const accent_o = document.getElementById('dutch-accent-o');
const accent_o_doubledot = document.getElementById('dutch-accent-o-doubledot');
const accent_u_doubledot = document.getElementById('dutch-accent-u-doubledot');

// All Accented Non-English Keyboard Letters (From Dutch)
accentedLetters = {
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

/* Extension Core Function (Dutch) */
// Change Text of Buttons
function changeButtonTextCase() {
    uppercase = uppercaseCheckbox.checked;
    if (!uppercase) {
        accent_e.textContent = accentedLetters.e;
        accent_e_doubledot.textContent = accentedLetters.e_doubledot;
        accent_i_doubledot.textContent = accentedLetters.i_doubledot;
        accent_o.textContent = accentedLetters.o;
        accent_o_doubledot.textContent = accentedLetters.o_doubledot;
        accent_u_doubledot.textContent = accentedLetters.u_doubledot;
    } else if (uppercase) {
        accent_e.textContent = accentedLetters.E;
        accent_e_doubledot.textContent = accentedLetters.E_DOUBLEDOT;
        accent_i_doubledot.textContent = accentedLetters.I_DOUBLEDOT;
        accent_o.textContent = accentedLetters.O;
        accent_o_doubledot.textContent = accentedLetters.O_DOUBLEDOT;
        accent_u_doubledot.textContent = accentedLetters.U_DOUBLEDOT;
    }
}

// On Click Listeners
accent_e.onclick = function() {
    if (!uppercase) {
        navigator.clipboard.writeText(accentedLetters.e).then(function() {
            accent_e.textContent = "Copied";
            setTimeout(function() {
                accent_e.textContent = accentedLetters.e;
            }, 1000);
        });
    } else if (uppercase) {
        navigator.clipboard.writeText(accentedLetters.E).then(function() {
            accent_e.textContent = "Copied";
            setTimeout(function() {
                accent_e.textContent = accentedLetters.E;
            }, 1000);
        });
    }
}
accent_e_doubledot.onclick = function() {
    if (!uppercase) {
        navigator.clipboard.writeText(accentedLetters.e_doubledot).then(function() {
            accent_e_doubledot.textContent = "Copied";
            setTimeout(function() {
                accent_e_doubledot.textContent = accentedLetters.e_doubledot;
            }, 1000);
        });
    } else if (uppercase) {
        navigator.clipboard.writeText(accentedLetters.E_DOUBLEDOT).then(function() {
            accent_e_doubledot.textContent = "Copied";
            setTimeout(function() {
                accent_e_doubledot.textContent = accentedLetters.E_DOUBLEDOT;
            }, 1000);
        });
    }
}
accent_i_doubledot.onclick = function() {
    if (!uppercase) {
        navigator.clipboard.writeText(accentedLetters.i_doubledot).then(function() {
            accent_i_doubledot.textContent = "Copied";
            setTimeout(function() {
                accent_i_doubledot.textContent = accentedLetters.i_doubledot;
            }, 1000);
        });
    } else if (uppercase) {
        navigator.clipboard.writeText(accentedLetters.I_DOUBLEDOT).then(function() {
            accent_i_doubledot.textContent = "Copied";
            setTimeout(function() {
                accent_i_doubledot.textContent = accentedLetters.I_DOUBLEDOT;
            }, 1000);
        });
    }
}
accent_o.onclick = function() {
    if (!uppercase) {
        navigator.clipboard.writeText(accentedLetters.o).then(function() {
            accent_o.textContent = "Copied";
            setTimeout(function() {
                accent_o.textContent = accentedLetters.o;
            }, 1000);
        });
    } else if (uppercase) {
        navigator.clipboard.writeText(accentedLetters.O).then(function() {
            accent_o.textContent = "Copied";
            setTimeout(function() {
                accent_o.textContent = accentedLetters.O;
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