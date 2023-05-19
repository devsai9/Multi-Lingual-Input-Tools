/*  THIS SCRIPT IS PART OF THE MULTI-LINGUAL INPUT TOOLS BROWSER EXTENSION
    JAVASCRIPT FOR ROMANIAN INPUT TOOLS
    --------------------------------------------------------------
    Chrome: https://chrome.google.com/webstore/detail/multi-lingual-input-tools/dkbgodmmblfcnfledmedmepimmpebnjo?hl=en
    Microsoft Edge: https://microsoftedge.microsoft.com/addons/detail/multilingual-input-tools/aoehggnalolhonphifnooepocfjpghfl
    --------------------------------------------------------------
    Path: popup/language/romanian.js
    --------------------------------------------------------------
*/

/* Defining Variables */
// Elements on page
const uppercaseCheckbox = document.getElementById('romanian-uppercase');
var uppercase = document.getElementById('romanian-uppercase').checked;
const accent_a_slur = document.getElementById('romanian-accent-a-slur');
const accent_a_hat = document.getElementById('romanian-accent-a-hat');
const accent_i_hat = document.getElementById('romanian-accent-i-hat');
const accent_s_long = document.getElementById('romanian-accent-s-long');
const accent_s_short = document.getElementById('romanian-accent-s-short');
const accent_t_long = document.getElementById('romanian-accent-t-long');
const accent_t_short = document.getElementById('romanian-accent-t-short');

document.getElementById("romanian-input-buttons").style.fontFamily = "sans-serif";

// All Accented Non-English Keyboard Letters (From Spanish)
accentedLetters = {
    a_s: "ă",
    A_s: "Ă",
    a_h: "â",
    A_h: "Â",
    i: "î",
    I: "Î",
    s_l: "ș",
    S_l: "Ș",
    s_s: "ş",
    S_s: "Ş",
    t_l: "ț",
    T_l: "Ț",
    t_s: "ţ",
    T_s: "Ţ",
}

/* Extension Core Function (Spanish) */
// Change Text of Buttons
function changeButtonTextCase() {
    uppercase = uppercaseCheckbox.checked;
    if (!uppercase) {
        accent_a_slur.textContent = accentedLetters.a_s;
        accent_a_hat.textContent = accentedLetters.a_h;
        accent_i_hat.textContent = accentedLetters.i;
        accent_s_long.textContent = accentedLetters.s_l;
        accent_s_short.textContent = accentedLetters.s_s;
        accent_t_long.textContent = accentedLetters.t_l;
        accent_t_short.textContent = accentedLetters.t_s;
    } else if (uppercase) {
        accent_a_slur.textContent = accentedLetters.A_s;
        accent_a_hat.textContent = accentedLetters.A_h;
        accent_i_hat.textContent = accentedLetters.I;
        accent_s_long.textContent = accentedLetters.S_l;
        accent_s_short.textContent = accentedLetters.S_s;
        accent_t_long.textContent = accentedLetters.T_l;
        accent_t_short.textContent = accentedLetters.T_s;
    }
}

// On Click Listeners
accent_a_slur.onclick = function() {
    if (!uppercase) {
        navigator.clipboard.writeText(accentedLetters.a_s).then(function() {
            accent_a_slur.textContent = "Copied";
            setTimeout(function() {
                accent_a_slur.textContent = accentedLetters.a_s;
            }, 1000);
        });
    } else if (uppercase) {
        navigator.clipboard.writeText(accentedLetters.A_s).then(function() {
            accent_a_slur.textContent = "Copied";
            setTimeout(function() {
                accent_a_slur.textContent = accentedLetters.A_s;
            }, 1000);
        });
    }
}
accent_a_hat.onclick = function() {
    if (!uppercase) {
        navigator.clipboard.writeText(accentedLetters.a_h).then(function() {
            accent_a_hat.textContent = "Copied";
            setTimeout(function() {
                accent_a_hat.textContent = accentedLetters.a_h;
            }, 1000);
        });
    } else if (uppercase) {
        navigator.clipboard.writeText(accentedLetters.a_H).then(function() {
            accent_a_hat.textContent = "Copied";
            setTimeout(function() {
                accent_a_hat.textContent = accentedLetters.a_H;
            }, 1000);
        });
    }
}
accent_i_hat.onclick = function() {
    if (!uppercase) {
        navigator.clipboard.writeText(accentedLetters.i).then(function() {
            accent_i_hat.textContent = "Copied";
            setTimeout(function() {
                accent_i_hat.textContent = accentedLetters.i;
            }, 1000);
        });
    } else if (uppercase) {
        navigator.clipboard.writeText(accentedLetters.I).then(function() {
            accent_i_hat.textContent = "Copied";
            setTimeout(function() {
                accent_i_hat.textContent = accentedLetters.I;
            }, 1000);
        });
    }
}
accent_s_long.onclick = function() {
    if (!uppercase) {
        navigator.clipboard.writeText(accentedLetters.s_l).then(function() {
            accent_s_long.textContent = "Copied";
            setTimeout(function() {
                accent_s_long.textContent = accentedLetters.s_l;
            }, 1000);
        });
    } else if (uppercase) {
        navigator.clipboard.writeText(accentedLetters.S_l).then(function() {
            accent_s_long.textContent = "Copied";
            setTimeout(function() {
                accent_s_long.textContent = accentedLetters.S_l;
            }, 1000);
        });
    }
}
accent_s_short.onclick = function() {
    if (!uppercase) {
        navigator.clipboard.writeText(accentedLetters.s_s).then(function() {
            accent_s_short.textContent = "Copied";
            setTimeout(function() {
                accent_s_short.textContent = accentedLetters.s_s;
            }, 1000);
        });
    } else if (uppercase) {
        navigator.clipboard.writeText(accentedLetters.S_s).then(function() {
            accent_s_short.textContent = "Copied";
            setTimeout(function() {
                accent_s_short.textContent = accentedLetters.s_s;
            }, 1000);
        });
    }
}
accent_t_long.onclick = function() {
    if (!uppercase) {
        navigator.clipboard.writeText(accentedLetters.t_l).then(function() {
            accent_t_long.textContent = "Copied";
            setTimeout(function() {
                accent_t_long.textContent = accentedLetters.t_l;
            }, 1000);
        });
    } else if (uppercase) {
        navigator.clipboard.writeText(accentedLetters.T_l).then(function() {
            accent_t_long.textContent = "Copied";
            setTimeout(function() {
                accent_t_long.textContent = accentedLetters.T_l;
            }, 1000);
        });
    }
}
accent_t_short.onclick = function() {
    if (!uppercase) {
        navigator.clipboard.writeText(accentedLetters.t_s).then(function() {
            accent_t_short.textContent = "Copied";
            setTimeout(function() {
                accent_t_short.textContent = accentedLetters.t_s;
            }, 1000);
        });
    } else if (uppercase) {
        navigator.clipboard.writeText(accentedLetters.T_s).then(function() {
            accent_t_short.textContent = "Copied";
            setTimeout(function() {
                accent_t_short.textContent = accentedLetters.T_s;
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