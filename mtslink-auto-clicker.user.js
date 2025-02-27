// ==UserScript==
// @author       Seljaie
// @name         Авто кликер для MTS Link
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Небольшой скрипт для автоматического нажатия кнопки в контроле присутствия
// @match        http://vki.mts-link.ru/*
// @grant        none
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
