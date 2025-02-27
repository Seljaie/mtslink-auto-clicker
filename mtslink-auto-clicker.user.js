// ==UserScript==
// @name         Авто кликер для MTS Link
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Небольшой скрипт для автоматического нажатия кнопки в контроле присутствия
// @match        https://*.mts-link.ru/*
// @grant        none
// @author       Seljaie
// ==/UserScript==

(function() {
    'use strict';

    function clickButton() {
        var button = document.querySelector('[data-testid="StreamTopBar.BurgerMenu.settings"]');
        if (button) {
            button.click();
            alert("Готово");
            clearInterval(intervalId);
        }
    }
    var intervalId = setInterval(clickButton, 1000);
})();
