import dayjs from "../libs/dayjs.js"

const button = document.querySelector(".btn-new-appointment")
const modal = document.querySelector("#new-appointment-modal")
const btnClose = document.querySelector(".btn-close");
const appointmentTime = document.querySelector("#appointment-time")
const appointmentDate = document.querySelector("#appointment-date")

// Adiciona evento de click no botão de novo agendamento.
button.addEventListener("click", () => {
    // Armazena a data atual.
    const currentDate = dayjs().format("YYYY-MM-DD")
    // Armazena o tempo atual.
    const currentTime = dayjs().format("HH:mm")

    // Define o valor do tempo para o atual.
    appointmentTime.value = currentTime
    // Define o valor da data para a atual.
    appointmentDate.value = currentDate

    // Limita a seleção da data para a atual ou posterior..
    appointmentDate.setAttribute("min", currentDate)

    // Abre o modal.
    modal.showModal();
})

// Adiciona evento de click no botão de para fechar o modal.
btnClose.addEventListener("click", () => {
    modal.close();
})