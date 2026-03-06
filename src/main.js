"use strict"

import "../src/styles/index.css"
import "./libs/dayjs.js"

const button = document.querySelector(".btn-new-appointment")
const modal = document.querySelector("#new-appointment-modal")

button.onclick = function () {
    modal.showModal();
}

const btnClose = document.querySelector(".btn-close");

btnClose.onclick = function () {
    modal.close();
}