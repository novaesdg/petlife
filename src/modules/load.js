const morningList = document.getElementById("morning-list")
const afternoomList = document.getElementById("afternoom-list")
const nightList = document.getElementById("night-list")


export async function renderAppointments(appointments) {

  morningList.innerHTML = ""
  afternoomList.innerHTML = ""
  nightList.innerHTML = ""

  appointments.forEach((appointment) => {
    const hour = parseInt(appointment.time) 

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

     if (hour >= 9 && hour <= 12) {
      morningList.insertAdjacentHTML("beforeend", cardHTML);
    } else if (hour >= 13 && hour <= 18) {
      afternoomList.insertAdjacentHTML("beforeend", cardHTML);
    } else {
      nightList.insertAdjacentHTML("beforeend", cardHTML);
    }
  });
}
