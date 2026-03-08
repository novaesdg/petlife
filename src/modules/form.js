import { postAppointment } from "../services/api"

const form = document.querySelector("form")

form.addEventListener("submit", async (e) => {
  // Prevenir evento padrão de envio do form.
  e.preventDefault()

  // Cria um novo FormData, puxando todos os dados do form.
  const formData = new FormData(form)

  // Todos os dados estão sendo puxados do form e sendo armazenados no objeto data.
  const data = {
    id: String(new Date().getTime()),
    petName: formData.get("pet-name"),
    petOwner: formData.get("tutor-name"),
    telephone: formData.get("telephone"),
    service: formData.get("description"),
    date: formData.get("appointment-date"),
    time: formData.get("appointment-time")
  }

  // Envia o formulário para a API fazer o post no json.
  await postAppointment(data)

  // Recarrega a página.
  location.reload()
})
