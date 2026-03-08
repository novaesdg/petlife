import { getAppointments } from "../services/api.js"
import { renderAppointments } from "./load.js"

// Seleciona a data para exibição de agendamentos.
const datePicker = document.querySelector("#schedule-date")

// Adiciona um evento de alteração da data.
datePicker.addEventListener("change", async () => {
  // Pega todos os agendamentos do json.
  const appointments = await getAppointments()

  // Armazena a data escolhida pelo usuário.
  const newDate = datePicker.value

  // Filtra a exibição dos agendamentos com base na data escolhida.
  const dailyAppointments = appointments.filter((appointment) => appointment.date === newDate)

  // Renderiza os agendamentos da data escolhida.
  renderAppointments(dailyAppointments)
})