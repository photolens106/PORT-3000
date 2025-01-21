/**
 * @copyright codewithsadee 2023
 * @author Sadee <codewithsadee24@gmail.com>
 */

"use strict";


// use light and dark mode

const /** {Node Element} */ $themeBtn = document.querySelector("[data-theme-btn]");
const /** {NodeElement} */ $HTML = document.documentElement;
let /** {Boolean | String} */ isDark = window.matchMedia("(prefers-color-scheme : dark)").matches;

if (sessionStorage.getItem("theme")) {
    $HTML.dataset.theme = sessionStorage.getItem("theme");
}else{
    $HTML.dataset.theme = isDark ? "dark" : "light";
    sessionStorage.setItem("theme", $HTML.dataset.theme);
}

const changeTheme = () => {

    $HTML.dataset.theme = sessionStorage.getItem("theme") == "light" ? "dark" : "light";
    sessionStorage.setItem("theme", $HTML.dataset.theme);
}

$themeBtn.addEventListener("click", changeTheme);


// Tab Functionality

const /** {NodeList} */ $tabBtn = document.querySelectorAll("[data-tab-btn]");
let /** {Node element} */ [lastActiveTab] = document.querySelectorAll("[data-tab-content]");

let  /** {Node Element} */ [lastActiveTabBtn] = $tabBtn;

$tabBtn.forEach(item => {
    item.addEventListener("click", function () {
        lastActiveTab.classList.remove("active");
        lastActiveTabBtn.classList.remove("active");

        const /**{Node Element} */ $tabContent = document.querySelector(`[data-tab-content="${item.dataset.tabBtn}"]`);

        $tabContent.classList.add("active");

        this.classList.add("active");

        lastActiveTab = $tabContent;

        lastActiveTabBtn = this;
    })
})