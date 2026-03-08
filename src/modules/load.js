const morningList = document.getElementById("morning-list")
const afternoomList = document.getElementById("afternoom-list")
const nightList = document.getElementById("night-list")

// Função para renderizar os agendamentos.
export async function renderAppointments(appointments) {

  // Limpa as listas de agendamentos.
  morningList.innerHTML = ""
  afternoomList.innerHTML = ""
  nightList.innerHTML = ""

  // Percorre todos os agendamentos.
  appointments.forEach((appointment) => {
    // Pega somente o numero inteiro do horário de agendamento.
    const hour = parseInt(appointment.time) 

    // Card para criação de novos agendamentos na interface.
    const cardHTML = `
      <div data-id="${appointment.id}" class="appointment-card">
        <div class="appointment-card__info">
          <div class="appointment-card__title">
            <strong>${appointment.time}</strong>
            <strong>${appointment.petName}</strong>
            <span class="appointment-card__owner">/ ${appointment.petOwner}</span>
          </div>
          <span class="appointment-card__service">${appointment.service}</span>
        </div>
        <button class="btn-delete" aria-label="Remover agendamento">
          Remover agendamento
        </button>
      </div>
    `

    // Condição para verificar em qual período o agendamento se encaixa.
     if (hour >= 9 && hour <= 12) {
      morningList.insertAdjacentHTML("beforeend", cardHTML);
    } else if (hour >= 13 && hour <= 18) {
      afternoomList.insertAdjacentHTML("beforeend", cardHTML);
    } else {
      nightList.insertAdjacentHTML("beforeend", cardHTML);
    }
  });
}
