// ==UserScript==
// @name         Авто кликер для MTS Link
// @namespace    http://tampermonkey.net/
// @version      0.6
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
            const now = new Date();
            const timeString = now.toLocaleTimeString();
            console.log(`Был контроль присутствия в [${timeString}]`);
            clearInterval(intervalId);
        }
    }
    var intervalId = setInterval(clickButton, 1000);
})();
