// Change FTA color mode
document.addEventListener("DOMContentLoaded", function() {
    switchColorModeOnPage();
});

function switchColorModeOnPage() {
    var colorModeRestored = '/';
    var languageRestored = '/';
    chrome.storage.sync.get({
        colorMode: 'dark',
        language: 'spanish'
    }, function (item) {
        colorModeRestored = item.colorMode;
        languageRestored = item.language;
    });
   setTimeout(function() {swapColorModeOnPage(colorModeRestored);}, 300);
   setTimeout(function() {swapSelectedLanguageOnPage(languageRestored);}, 300);
}

function swapColorModeOnPage(colorModeRestored) {
    if (colorModeRestored == 'dark') {
        document.getElementsByTagName("body").item(0).classList.remove("light-mode");
        document.getElementsByTagName("body").item(0).classList.add("dark-mode");
    } else if (colorModeRestored == 'light') {
        document.getElementsByTagName("body").item(0).classList.remove("dark-mode");
        document.getElementsByTagName("body").item(0).classList.add("light-mode");
    }
}

function swapSelectedLanguageOnPage(languageRestored) {
    if (languageRestored == 'spanish') {
        document.getElementById('spanish-container').style.display = "block";
        document.getElementById('french-container').style.display = "none";
    } else if (languageRestored == 'french') {
        document.getElementById('spanish-container').style.display = "none";
        document.getElementById('french-container').style.display = "block";
    }
}

// Function to insert a character into the textarea (#type-textbox)
function insertCharacter(id, lang) {

    if (id == '?' && lang == 'spanish') {
        document.getElementById('textbox').value += "¿";
        document.getElementById('textbox').focus();
    }

    if (id == '!' && lang == 'spanish') {
        document.getElementById('textbox').value += "¡";
        document.getElementById('textbox').focus();
    }

    if (id == 'a' && lang == 'spanish') {
        if (document.getElementById("uppercase").checked == false) {
            document.getElementById('textbox').value += "á";
            document.getElementById('textbox').focus();
        } else if (document.getElementById("uppercase").checked == true) {
            document.getElementById('textbox').value += "Á";
            document.getElementById('textbox').focus();
        }
    }

    if (id == 'e' && lang == 'spanish') {
        if (document.getElementById("uppercase").checked == false) {
            document.getElementById('textbox').value += "é";
            document.getElementById('textbox').focus();
        } else if (document.getElementById("uppercase").checked == true) {
            document.getElementById('textbox').value += "É";
            document.getElementById('textbox').focus();
        }
    }

    if (id == 'i' && lang == 'spanish') {
        if (document.getElementById("uppercase").checked == false) {
            document.getElementById('textbox').value += "í";
            document.getElementById('textbox').focus();
        } else if (document.getElementById("uppercase").checked == true) {
            document.getElementById('textbox').value += "Í";
            document.getElementById('textbox').focus();
        }
    }

    if (id == 'n' && lang == 'spanish') {
        if (document.getElementById("uppercase").checked == false) {
            document.getElementById('textbox').value += "ñ";
            document.getElementById('textbox').focus();
        } else if (document.getElementById("uppercase").checked == true) {
            document.getElementById('textbox').value += "Ñ";
            document.getElementById('textbox').focus();
        }
    }

    if (id == 'o' && lang == 'spanish') {
        if (document.getElementById("uppercase").checked == false) {
            document.getElementById('textbox').value += "ó";
            document.getElementById('textbox').focus();
        } else if (document.getElementById("uppercase").checked == true) {
            document.getElementById('textbox').value += "Ó";
            document.getElementById('textbox').focus();
        }
    }

    if (id == 'u' && lang == 'spanish') {
        if (document.getElementById("uppercase").checked == false) {
            document.getElementById('textbox').value += "ú";
            document.getElementById('textbox').focus();
        } else if (document.getElementById("uppercase").checked == true) {
            document.getElementById('textbox').value += "Ú";
            document.getElementById('textbox').focus();
        }
    }

    if (id == 'a' && lang == 'french') {
        if (document.getElementById("uppercase").checked == false) {
            document.getElementById('textbox').value += "à";
            document.getElementById('textbox').focus();
        } else if (document.getElementById("uppercase").checked == true) {
            document.getElementById('textbox').value += "À";
            document.getElementById('textbox').focus();
        }
    }

    if (id == 'a-hat' && lang == 'french') {
        if (document.getElementById("uppercase").checked == false) {
            document.getElementById('textbox').value += "â";
            document.getElementById('textbox').focus();
        } else if (document.getElementById("uppercase").checked == true) {
            document.getElementById('textbox').value += "Â";
            document.getElementById('textbox').focus();
        }
    }

    if (id == 'ae' && lang == 'french') {
        if (document.getElementById("uppercase").checked == false) {
            document.getElementById('textbox').value += "æ";
            document.getElementById('textbox').focus();
        } else if (document.getElementById("uppercase").checked == true) {
            document.getElementById('textbox').value += "Æ";
            document.getElementById('textbox').focus();
        }
    }

    if (id == 'c' && lang == 'french') {
        if (document.getElementById("uppercase").checked == false) {
            document.getElementById('textbox').value += "ç";
            document.getElementById('textbox').focus();
        } else if (document.getElementById("uppercase").checked == true) {
            document.getElementById('textbox').value += "Ç";
            document.getElementById('textbox').focus();
        }
    }

    if (id == 'e' && lang == 'french') {
        if (document.getElementById("uppercase").checked == false) {
            document.getElementById('textbox').value += "é";
            document.getElementById('textbox').focus();
        } else if (document.getElementById("uppercase").checked == true) {
            document.getElementById('textbox').value += "É";
            document.getElementById('textbox').focus();
        }
    }

    if (id == 'e-backward' && lang == 'french') {
        if (document.getElementById("uppercase").checked == false) {
            document.getElementById('textbox').value += "è";
            document.getElementById('textbox').focus();
        } else if (document.getElementById("uppercase").checked == true) {
            document.getElementById('textbox').value += "È";
            document.getElementById('textbox').focus();
        }
    }

    if (id == 'e-hat' && lang == 'french') {
        if (document.getElementById("uppercase").checked == false) {
            document.getElementById('textbox').value += "ê";
            document.getElementById('textbox').focus();
        } else if (document.getElementById("uppercase").checked == true) {
            document.getElementById('textbox').value += "Ê";
            document.getElementById('textbox').focus();
        }
    }

    if (id == 'e-doubledot' && lang == 'french') {
        if (document.getElementById("uppercase").checked == false) {
            document.getElementById('textbox').value += "ë";
            document.getElementById('textbox').focus();
        } else if (document.getElementById("uppercase").checked == true) {
            document.getElementById('textbox').value += "Ë";
            document.getElementById('textbox').focus();
        }
    }

    if (id == 'i-doubledot' && lang == 'french') {
        if (document.getElementById("uppercase").checked == false) {
            document.getElementById('textbox').value += "ï";
            document.getElementById('textbox').focus();
        } else if (document.getElementById("uppercase").checked == true) {
            document.getElementById('textbox').value += "Ï";
            document.getElementById('textbox').focus();
        }
    }

    if (id == 'i-hat' && lang == 'french') {
        if (document.getElementById("uppercase").checked == false) {
            document.getElementById('textbox').value += "î";
            document.getElementById('textbox').focus();
        } else if (document.getElementById("uppercase").checked == true) {
            document.getElementById('textbox').value += "Î";
            document.getElementById('textbox').focus();
        }
    }

    if (id == 'o-hat' && lang == 'french') {
        if (document.getElementById("uppercase").checked == false) {
            document.getElementById('textbox').value += "ô";
            document.getElementById('textbox').focus();
        } else if (document.getElementById("uppercase").checked == true) {
            document.getElementById('textbox').value += "Ô";
            document.getElementById('textbox').focus();
        }
    }

    if (id == 'oe' && lang == 'french') {
        if (document.getElementById("uppercase").checked == false) {
            document.getElementById('textbox').value += "œ";
            document.getElementById('textbox').focus();
        } else if (document.getElementById("uppercase").checked == true) {
            document.getElementById('textbox').value += "Œ";
            document.getElementById('textbox').focus();
        }
    }

}

// Function to uppercase and lowercase the text of the input buttons (depending on the state of the uppercase checkbox)
function switchInputButtonText(lang) {
    if (lang == 'spanish') {
        if (document.getElementById("uppercase").checked == false) {
            document.getElementById("accent-a").textContent = "á";
            document.getElementById("accent-e").textContent = "é";
            document.getElementById("accent-i").textContent = "í";
            document.getElementById("accent-n").textContent = "ñ";
            document.getElementById("accent-o").textContent = "ó";
            document.getElementById("accent-u").textContent = "ú";
            document.getElementById("uppercase-label").textContent = "uppercase";
        } else if (document.getElementById("uppercase").checked == true) {
            document.getElementById("accent-a").textContent = "Á";
            document.getElementById("accent-e").textContent = "É";
            document.getElementById("accent-i").textContent = "Í";
            document.getElementById("accent-n").textContent = "Ñ";
            document.getElementById("accent-o").textContent = "Ó";
            document.getElementById("accent-u").textContent = "Ú";
            document.getElementById("uppercase-label").textContent = "lowercase";
        }
    } else if (lang == french) {
        if (document.getElementById("uppercase2").checked == false) {
            document.getElementById("accent-a").textContent = "à";
            document.getElementById("accent-e").textContent = "â";
            document.getElementById("accent-i").textContent = "æ";
            document.getElementById("accent-n").textContent = "ç";
            document.getElementById("accent-o").textContent = "é";
            document.getElementById("accent-u").textContent = "è";
            document.getElementById("accent-a").textContent = "ê";
            document.getElementById("accent-e").textContent = "ë";
            document.getElementById("accent-i").textContent = "ï";
            document.getElementById("accent-n").textContent = "î";
            document.getElementById("accent-o").textContent = "ô";
            document.getElementById("accent-u").textContent = "œ";
            document.getElementById("uppercase-label").textContent = "uppercase";
        } else if (document.getElementById("uppercase2").checked == true) {
            document.getElementById("accent-a").textContent = "À";
            document.getElementById("accent-e").textContent = "Â";
            document.getElementById("accent-i").textContent = "Æ";
            document.getElementById("accent-n").textContent = "Ç";
            document.getElementById("accent-o").textContent = "É";
            document.getElementById("accent-u").textContent = "È";
            document.getElementById("accent-a").textContent = "Ê";
            document.getElementById("accent-e").textContent = "Ë";
            document.getElementById("accent-i").textContent = "Ï";
            document.getElementById("accent-n").textContent = "Î";
            document.getElementById("accent-o").textContent = "Ô";
            document.getElementById("accent-u").textContent = "Œ";
            document.getElementById("uppercase-label2").textContent = "lowercase";
        }
    }
}

// Input button event listeners
document.getElementById("upsidedown-questionmark").onclick = function() {
    insertCharacter('?', 'spanish');
}
document.getElementById("upsidedown-exclamationmark").onclick = function() {
    insertCharacter('!', 'spanish');
}
document.getElementById("accent-a").onclick = function() {
    insertCharacter('a', 'spanish');
}
document.getElementById("accent-e").onclick = function() {
    insertCharacter('e', 'spanish');
}
document.getElementById("accent-i").onclick = function() {
    insertCharacter('i', 'spanish');
}
document.getElementById("accent-n").onclick = function() {
    insertCharacter('n', 'spanish');
}
document.getElementById("accent-o").onclick = function() {
    insertCharacter('o', 'spanish');
}
document.getElementById("accent-u").onclick = function() {
    insertCharacter('u', 'spanish');
}
document.getElementById("accent-a-backward").onclick = function() {
    insertCharacter('a', 'french');
}
document.getElementById("accent-a-hat").onclick = function() {
    insertCharacter('a-hat', 'french');
}
document.getElementById("combined-ae").onclick = function() {
    insertCharacter('ae', 'french');
}
document.getElementById("accent-c-lower").onclick = function() {
    insertCharacter('c', 'french');
}
document.getElementById("accent-e2").onclick = function() {
    insertCharacter('e', 'french');
}
document.getElementById("accent-e-backward").onclick = function() {
    insertCharacter('e-backward', 'french');
}
document.getElementById("accent-e-hat").onclick = function() {
    insertCharacter('e-hat', 'french');
}
document.getElementById("accent-e-doubledot").onclick = function() {
    insertCharacter('e-doubledot', 'french');
}
document.getElementById("accent-i-doubledot").onclick = function() {
    insertCharacter('i-doubledot', 'french');
}
document.getElementById("accent-i-hat").onclick = function() {
    insertCharacter('i-hat', 'french');
}
document.getElementById("accent-o-hat").onclick = function() {
    insertCharacter('o-hat', 'french');
}
document.getElementById("combined-oe").onclick = function() {
    insertCharacter('oe', 'french');
}

// Uppercase Checkbox event listeners

// When the Uppercase Checkbox is tab active and the enter key is pressed
document.addEventListener ("keypress", function (event) {
    if (event.code === "Enter") {
        if (document.activeElement === document.getElementById("uppercase")) {
            if (document.getElementById("uppercase").checked == false) {
                document.getElementById("uppercase").checked = true;
                switchInputButtonText('spanish');
            } else if (document.getElementById("uppercase").checked == true) {
                document.getElementById("uppercase").checked = false;
                switchInputButtonText('spanish');
            }
        }
    }
});

// When the Uppercase Checkbox is clicked (switching on and off)
document.getElementById("uppercase").onchange = function() {switchInputButtonText('spanish');}

// When the Shift key is pressed (DOWN) then the uppercase checkbox is checked
document.addEventListener ("keydown", function (event) {
    if (event.key == "Shift") {
        document.getElementById("uppercase").checked = true;
        switchInputButtonText('spanish');
    }
});

// When the Shift key is let go (UP) then the uppercase checkbox is unchecked
document.addEventListener ("keyup", function (event) {
    if (event.key == "Shift") {
        document.getElementById("uppercase").checked = false;
        switchInputButtonText('spanish');
    }
});

// Uppercase 2 Checkbox event listeners

// When the Uppercase 2 Checkbox is tab active and the enter key is pressed
document.addEventListener ("keypress", function (event) {
    if (event.code === "Enter") {
        if (document.activeElement === document.getElementById("uppercase2")) {
            if (document.getElementById("uppercase2").checked == false) {
                document.getElementById("uppercase2").checked = true;
                switchInputButtonText();
            } else if (document.getElementById("uppercase2").checked == true) {
                document.getElementById("uppercase2").checked = false;
                switchInputButtonText();
            }
        }
    }
});

// When the Uppercase 2 Checkbox is clicked (switching on and off)
document.getElementById("uppercase").onchange = function() {switchInputButtonText('french');}

// When the Shift key is pressed (DOWN) then the uppercase checkbox is checked
document.addEventListener ("keydown", function (event) {
    if (event.key == "Shift") {
        document.getElementById("uppercase2").checked = true;
        switchInputButtonText('french');
    }
});

// When the Shift key is let go (UP) then the uppercase checkbox is unchecked
document.addEventListener ("keyup", function (event) {
    if (event.key == "Shift") {
        document.getElementById("uppercase2").checked = false;
        switchInputButtonText('french');
    }
});