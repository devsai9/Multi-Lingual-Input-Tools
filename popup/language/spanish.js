/*  THIS SCRIPT IS PART OF THE MULTI-LINGUAL INPUT TOOLS BROWSER EXTENSION
    JAVASCRIPT FOR SPANISH INPUT TOOLS
    --------------------------------------------------------------
    Chrome: https://chrome.google.com/webstore/detail/multi-lingual-input-tools/dkbgodmmblfcnfledmedmepimmpebnjo?hl=en
    Microsoft Edge: https://microsoftedge.microsoft.com/addons/detail/multilingual-input-tools/aoehggnalolhonphifnooepocfjpghfl
    --------------------------------------------------------------
    Path: popup/language/spanish.js
    --------------------------------------------------------------
*/

/* Defining Variables */
// Elements on page
const uppercaseCheckbox = document.getElementById('spanish-uppercase');
var uppercase = document.getElementById('spanish-uppercase').checked;
const question_mark = document.getElementById('spanish-upsidedown-questionmark');
const exclamation_point = document.getElementById('spanish-upsidedown-exclamationmark');
const accent_a = document.getElementById('spanish-accent-a');
const accent_e = document.getElementById('spanish-accent-e');
const accent_i = document.getElementById('spanish-accent-i');
const accent_n = document.getElementById('spanish-accent-n');
const accent_o = document.getElementById('spanish-accent-o');
const accent_u = document.getElementById('spanish-accent-u');

// All Accented Non-English Keyboard Letters (From Spanish)
accentedLetters = {
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
    U: "Ú"
}

/* Extension Core Function (Spanish) */
// Change Text of Buttons
function changeButtonTextCase() {
    uppercase = uppercaseCheckbox.checked;
    if (!uppercase) {
        accent_a.textContent = accentedLetters.a;
        accent_e.textContent = accentedLetters.e;
        accent_i.textContent = accentedLetters.i;
        accent_n.textContent = accentedLetters.n;
        accent_o.textContent = accentedLetters.o;
        accent_u.textContent = accentedLetters.u;
    } else if (uppercase) {
        accent_a.textContent = accentedLetters.A;
        accent_e.textContent = accentedLetters.E;
        accent_i.textContent = accentedLetters.I;
        accent_n.textContent = accentedLetters.N;
        accent_o.textContent = accentedLetters.O;
        accent_u.textContent = accentedLetters.U;
    }
}

// On Click Listeners
question_mark.onclick = function() {
    navigator.clipboard.writeText(accentedLetters.question_mark).then(function() {
        question_mark.textContent = "Copied";
        setTimeout(function() {
            question_mark.textContent = accentedLetters.question_mark;
        }, 1000);
    });
}
exclamation_point.onclick = function() {
    navigator.clipboard.writeText(accentedLetters.exclamation_point).then(function() {
        exclamation_point.textContent = "Copied";
        setTimeout(function() {
            exclamation_point.textContent = accentedLetters.exclamation_point;
        }, 1000);
    });
}
accent_a.onclick = function() {
    if (!uppercase) {
        navigator.clipboard.writeText(accentedLetters.a).then(function() {
            accent_a.textContent = "Copied";
            setTimeout(function() {
                accent_a.textContent = accentedLetters.a;
            }, 1000);
        });
    } else if (uppercase) {
        navigator.clipboard.writeText(accentedLetters.A).then(function() {
            accent_a.textContent = "Copied";
            setTimeout(function() {
                accent_a.textContent = accentedLetters.A;
            }, 1000);
        });
    }
}
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
accent_i.onclick = function() {
    if (!uppercase) {
        navigator.clipboard.writeText(accentedLetters.i).then(function() {
            accent_i.textContent = "Copied";
            setTimeout(function() {
                accent_i.textContent = accentedLetters.i;
            }, 1000);
        });
    } else if (uppercase) {
        navigator.clipboard.writeText(accentedLetters.I).then(function() {
            accent_i.textContent = "Copied";
            setTimeout(function() {
                accent_i.textContent = accentedLetters.I;
            }, 1000);
        });
    }
}
accent_n.onclick = function() {
    if (!uppercase) {
        navigator.clipboard.writeText(accentedLetters.n).then(function() {
            accent_n.textContent = "Copied";
            setTimeout(function() {
                accent_n.textContent = accentedLetters.n;
            }, 1000);
        });
    } else if (uppercase) {
        navigator.clipboard.writeText(accentedLetters.N).then(function() {
            accent_n.textContent = "Copied";
            setTimeout(function() {
                accent_n.textContent = accentedLetters.N;
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
accent_u.onclick = function() {
    if (!uppercase) {
        navigator.clipboard.writeText(accentedLetters.u).then(function() {
            accent_u.textContent = "Copied";
            setTimeout(function() {
                accent_u.textContent = accentedLetters.u;
            }, 1000);
        });
    } else if (uppercase) {
        navigator.clipboard.writeText(accentedLetters.U).then(function() {
            accent_u.textContent = "Copied";
            setTimeout(function() {
                accent_u.textContent = accentedLetters.U;
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