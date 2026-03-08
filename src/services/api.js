// Função para ler os agendamentos do json.
export async function getAppointments() {
  try {
    const response = await fetch("http://localhost:3333/appointments")
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Não foi possível buscar os agendamentos", error)
  }
}

// Função para enviar um novo agendamento para o json.
export async function postAppointment(data) {
  try {
    await fetch("http://localhost:3333/appointments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  } catch (error) {
    console.error("Não foi possível criar um novo agendamento", error)
  }
}