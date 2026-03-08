"use strict"

import "../src/styles/index.css"
import "./libs/dayjs.js"
import "./modules/form.js"
import "./modules/delete.js"

import { renderAppointments } from "./modules/load.js"

import { getAppointments } from "./services/api.js"

async function init () {
    const appointments = await getAppointments()

    renderAppointments(appointments)
}

init()


const button = document.querySelector(".btn-new-appointment")
const modal = document.querySelector("#new-appointment-modal")

button.onclick = function () {
    modal.showModal();
}

const btnClose = document.querySelector(".btn-close");

btnClose.onclick = function () {
    modal.close();
}