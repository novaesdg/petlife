import { deleteAppointment } from "../services/api.js"

// Pego todas as listas de agendamentos.
const appointmentList = document.querySelectorAll(".appointment-list")

// Para cada lista, pego o agendamento.
appointmentList.forEach((appointment) => {
  // Adiciono evento de click para cada agendamento.
  appointment.addEventListener("click", async (event) => {
    // Condição para verificar se o alvo do click possui a classe btn-delete.
    if(event.target.classList.contains("btn-delete")) {
      // Se possuir, ele vai limitar ao pai e vai me devolver os dados do agendamento.
      const item = event.target.closest(".appointment-card")
      // Pego somente o id do agendamento.
      const { id } = item.dataset

      // Condição para verificar se o usuário realmente deseja remover o agendamento.
      if(id) {
        const isConfirm = confirm("Deseja remover esse agendamento?")

        if(isConfirm) {
          await deleteAppointment(id)

          location.reload()
        }
      }
    }
  })
})
