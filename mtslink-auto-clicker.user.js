// ==UserScript==
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
        var button = document.querySelector('[aria-describedby="myDescription"]');
        if (button) {
            button.click();
            console.log("Кнопка нажата");
            clearInterval(intervalId);
        }
    }
    var intervalId = setInterval(clickButton, 1000);
})();
