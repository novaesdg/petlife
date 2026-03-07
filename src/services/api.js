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

