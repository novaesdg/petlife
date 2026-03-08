import { postAppointment } from "../services/api.js"

const form = document.querySelector("form")
const telephone = document.querySelector("#telephone")

// Adiciona evento no input telephone.
telephone.addEventListener("input", (event) => {
  // Proíbe a entrada de letras.
  let value = event.target.value.replace(/\D/g, '');

  // Limita o tamanho a 11 digitos.
  value = value.substring(0, 11);

  // Lógica para formatação com base na quantidade de caracteres.
  if (value.length > 10) {
    value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
  } else if (value.length > 6) {
    value = value.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
  } else if (value.length > 2) {
    value = value.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
  } else if (value.length > 0) {
    value = value.replace(/^(\d{0,2})$/, '($1');
  }

  event.target.value = value;
})

// Adiciona evento de envio no formulário.
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
