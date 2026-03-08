"use strict"

import "../src/styles/index.css"
import "./modules/form.js"
import "./modules/delete.js"
import "./modules/date.js"

import dayjs from "./libs/dayjs.js"
import { renderAppointments } from "./modules/load.js"
import { getAppointments } from "./services/api.js"

// Seleciona a data para exibição de agendamentos.
const datePicker = document.querySelector("#schedule-date")

export async function init () {
    // Armazena a data de hoje.
    const today = dayjs().format("YYYY-MM-DD")

    // Define a data para a de hoje.
    datePicker.value = today

    // Puxa todos os agendamentos do json.
    const appointments = await getAppointments()

    // Filtra a exibição dos agendamentos para data atual.
    const dailyAppointments = appointments.filter((appointment) => appointment.date === today)

    // Renderiza os agendamentos da data tual.
    renderAppointments(dailyAppointments)
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