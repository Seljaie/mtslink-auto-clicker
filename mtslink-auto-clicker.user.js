// ==UserScript==
// @name         Авто кликер для MTS Link
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  Небольшой скрипт для автоматического нажатия кнопки в контроле присутствия
// @match        https://*.mts-link.ru/*
// @grant        none
// @author       Seljaie
// @icon64       https://raw.githubusercontent.com/Seljaie/mtslink-auto-clicker/main/icon.png
// ==/UserScript==

(function() {
    'use strict';

    function clickButton() {
        var button = document.querySelector('[data-testid="StreamTopBar.BurgerMenu.settings"]');
        if (button) {
            button.click();
            console.log("Отмечен");
            clearInterval(intervalId);
        }
    }
    var intervalId = setInterval(clickButton, 1000);
})();
