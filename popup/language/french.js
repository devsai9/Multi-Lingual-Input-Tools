/*  THIS SCRIPT IS PART OF THE MULTI-LINGUAL INPUT TOOLS BROWSER EXTENSION
    JAVASCRIPT FOR FRENCH INPUT TOOLS
    --------------------------------------------------------------
    Chrome: https://chrome.google.com/webstore/detail/multi-lingual-input-tools/dkbgodmmblfcnfledmedmepimmpebnjo?hl=en
    Microsoft Edge: https://microsoftedge.microsoft.com/addons/detail/multilingual-input-tools/aoehggnalolhonphifnooepocfjpghfl
    --------------------------------------------------------------
    Path: popup/language/french.js
    --------------------------------------------------------------
*/

// Elements on page
var uppercaseCheckbox = document.getElementById('french-uppercase');
var uppercase = document.getElementById('french-uppercase').checked;
var accent_a_backward = document.getElementById('french-accent-a-backward');
var accent_a_hat = document.getElementById('french-accent-a-hat');
var combined_ae = document.getElementById('french-combined-ae');
var accent_c = document.getElementById('french-accent-c');
var accent_e = document.getElementById('french-accent-e');
var accent_e_backward = document.getElementById('french-accent-e-backward');
var accent_e_hat = document.getElementById('french-accent-e-hat');
var accent_e_doubledot = document.getElementById('french-accent-e-doubledot');
var accent_i_doubledot = document.getElementById('french-accent-i-doubledot');
var accent_i_hat = document.getElementById('french-accent-i-hat');
var accent_o_hat = document.getElementById('french-accent-o-hat');
var combined_oe = document.getElementById('french-combined-oe');

// All Accented Non-English Keyboard Letters (From Spanish)
accentedLetters = {
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
    OE: "Œ"
}

/* Extension Core Function (French) */
// Change Text of Buttons
function changeButtonTextCase() {
    uppercase = uppercaseCheckbox.checked;
    if (!uppercase) {
        accent_a_backward.textContent = accentedLetters.a_backward;
        accent_a_hat.textContent = accentedLetters.a_hat;
        combined_ae.textContent = accentedLetters.ae;
        accent_c.textContent = accentedLetters.c;
        accent_e.textContent = accentedLetters.e;
        accent_e_backward.textContent = accentedLetters.e_backward;
        accent_e_hat.textContent = accentedLetters.e_hat;
        accent_e_doubledot.textContent = accentedLetters.e_doubledot;
        accent_i_doubledot.textContent = accentedLetters.i_doubledot;
        accent_i_hat.textContent = accentedLetters.i_hat;
        accent_o_hat.textContent = accentedLetters.o_hat;
        combined_oe.textContent = accentedLetters.oe;
    } else if (uppercase) {
        accent_a_backward.textContent = accentedLetters.A_BACKWARD;
        accent_a_hat.textContent = accentedLetters.A_HAT;
        combined_ae.textContent = accentedLetters.AE;
        accent_c.textContent = accentedLetters.C;
        accent_e.textContent = accentedLetters.E;
        accent_e_backward.textContent = accentedLetters.E_BACKWARD;
        accent_e_hat.textContent = accentedLetters.E_HAT;
        accent_e_doubledot.textContent = accentedLetters.E_DOUBLEDOT;
        accent_i_doubledot.textContent = accentedLetters.I_DOUBLEDOT;
        accent_i_hat.textContent = accentedLetters.I_HAT;
        accent_o_hat.textContent = accentedLetters.O_HAT;
        combined_oe.textContent = accentedLetters.OE;
    }
}

// On Click Listeners
accent_a_backward.onclick = function() {
    if (!uppercase) {
        navigator.clipboard.writeText(accentedLetters.a_backward).then(function() {
            accent_a_backward.textContent = "Copied";
            setTimeout(function() {
                accent_a_backward.textContent = accentedLetters.a_backward;
            }, 1000);
        });
    } else if (uppercase) {
        navigator.clipboard.writeText(accentedLetters.A_BACKWARD).then(function() {
            accent_a_backward.textContent = "Copied";
            setTimeout(function() {
                accent_a_backward.textContent = accentedLetters.A_BACKWARD;
            }, 1000);
        });
    }
}
accent_a_hat.onclick = function() {
    if (!uppercase) {
        navigator.clipboard.writeText(accentedLetters.a_hat).then(function() {
            accent_a_hat.textContent = "Copied";
            setTimeout(function() {
                accent_a_hat.textContent = accentedLetters.a_hat;
            }, 1000);
        });
    } else if (uppercase) {
        navigator.clipboard.writeText(accentedLetters.A_HAT).then(function() {
            accent_a_hat.textContent = "Copied";
            setTimeout(function() {
                accent_a_hat.textContent = accentedLetters.A_HAT;
            }, 1000);
        });
    }
}
combined_ae.onclick = function() {
    if (!uppercase) {
        navigator.clipboard.writeText(accentedLetters.ae).then(function() {
            combined_ae.textContent = "Copied";
            setTimeout(function() {
                combined_ae.textContent = accentedLetters.ae
            }, 1000);
        });
    } else if (uppercase) {
        navigator.clipboard.writeText(accentedLetters.AE).then(function() {
            combined_ae.textContent = "Copied";
            setTimeout(function() {
                combined_ae.textContent = accentedLetters.AE;
            }, 1000);
        });
    }
}
accent_c.onclick = function() {
    if (!uppercase) {
        navigator.clipboard.writeText(accentedLetters.c).then(function() {
            accent_c.textContent = "Copied";
            setTimeout(function() {
                accent_c.textContent = accentedLetters.c;
            }, 1000);
        });
    } else if (uppercase) {
        navigator.clipboard.writeText(accentedLetters.C).then(function() {
            accent_c.textContent = "Copied";
            setTimeout(function() {
                accent_c.textContent = accentedLetters.C;
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
accent_e_backward.onclick = function() {
    if (!uppercase) {
        navigator.clipboard.writeText(accentedLetters.e_backward).then(function() {
            accent_e_backward.textContent = "Copied";
            setTimeout(function() {
                accent_e_backward.textContent = accentedLetters.e_backward;
            }, 1000);
        });
    } else if (uppercase) {
        navigator.clipboard.writeText(accentedLetters.E_BACKWARD).then(function() {
            accent_e_backward.textContent = "Copied";
            setTimeout(function() {
                accent_e_backward.textContent = accentedLetters.E_BACKWARD;
            }, 1000);
        });
    }
}
accent_e_hat.onclick = function() {
    if (!uppercase) {
        navigator.clipboard.writeText(accentedLetters.e_hat).then(function() {
            accent_e_hat.textContent = "Copied";
            setTimeout(function() {
                accent_e_hat.textContent = accentedLetters.e_hat;
            }, 1000);
        });
    } else if (uppercase) {
        navigator.clipboard.writeText(accentedLetters.E_HAT).then(function() {
            accent_e_hat.textContent = "Copied";
            setTimeout(function() {
                accent_e_hat.textContent = accentedLetters.E_HAT;
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
accent_i_hat.onclick = function() {
    if (!uppercase) {
        navigator.clipboard.writeText(accentedLetters.i_hat).then(function() {
            accent_i_hat.textContent = "Copied";
            setTimeout(function() {
                accent_i_hat.textContent = accentedLetters.i_hat;
            }, 1000);
        });
    } else if (uppercase) {
        navigator.clipboard.writeText(accentedLetters.I_HAT).then(function() {
            accent_i_hat.textContent = "Copied";
            setTimeout(function() {
                accent_i_hat.textContent = accentedLetters.I_HAT;
            }, 1000);
        });
    }
}
accent_o_hat.onclick = function() {
    if (!uppercase) {
        navigator.clipboard.writeText(accentedLetters.o_hat).then(function() {
            accent_o_hat.textContent = "Copied";
            setTimeout(function() {
                accent_o_hat.textContent = accentedLetters.o_hat;
            }, 1000);
        });
    } else if (uppercase) {
        navigator.clipboard.writeText(accentedLetters.O_HAT).then(function() {
            accent_o_hat.textContent = "Copied";
            setTimeout(function() {
                accent_o_hat.textContent = accentedLetters.O_HAT;
            }, 1000);
        });
    }
}
combined_oe.onclick = function() {
    if (!uppercase) {
        navigator.clipboard.writeText(accentedLetters.oe).then(function() {
            combined_oe.textContent = "Copied";
            setTimeout(function() {
                combined_oe.textContent = accentedLetters.oe;
            }, 1000);
        });
    } else if (uppercase) {
        navigator.clipboard.writeText(accentedLetters.OE).then(function() {
            combined_oe.textContent = "Copied";
            setTimeout(function() {
                combined_oe.textContent = accentedLetters.OE;
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