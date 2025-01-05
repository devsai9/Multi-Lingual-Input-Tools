document.querySelectorAll('[data-i18n]').forEach(element => {
    let i18nAttr = element.getAttribute('data-i18n');

    let prevText = element.innerHTML;
    let final;

    if (i18nAttr.indexOf(';') !== -1) {
        let args = i18nAttr.split(';');
        prevText = element.getAttribute(args[1]);
        final = chrome.i18n.getMessage(args[0]);
        element.setAttribute(args[1], final || prevText);
        return;
    }

    final = chrome.i18n.getMessage(element.getAttribute('data-i18n'));
    element.innerHTML = final || prevText;
});