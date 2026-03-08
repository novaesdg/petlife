const containers = document.querySelectorAll(".input-field, .schedule-date-picker")

// Percorre cada container.
containers.forEach((container) => {
  // Adiciona evento de click em cada container.
  container.addEventListener("click", () => {
    // Define o input que estiver dentro do container.
    const input = container.querySelector("input, textarea")

    // Condição para verificar se é um input.
    if(input) {
      // Condição para verificar se o input é do tipo date ou time.
      if(input.type === "date" || input.type === "time") {
        // Abre o selecionador de data ou tempo.
        input.showPicker()
      } else {
        // Foca no input que não for do tipo date ou time.
        input.focus()
      }
    } else {
      // Mensagem no console indicando que não foi encontrado o input.
      console.log("Input não encontrado.")
    }
  })
})