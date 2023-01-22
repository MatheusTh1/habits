const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const button = document.querySelector("header button")

// criando evento para criar uma função ao clicar.
button.addEventListener("click", add)

// criando evento para criar uma função ao mudar algo.
form.addEventListener("change", save)

// adicionado a função de adicionar dia ao evento de click
function add() {
  // pega o dia de hoje, no formato BR e o slice é o regex que quebra o tamanho
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Esse dia já está cadastado!")
    return
  }

  alert("Dia registrado com sucesso ✔")
  nlwSetup.addDay(today)
}

// função para salvar os eventos da pagina no localstorage do navegador
function save() {
  localStorage.setItem("saveHabitsNLW", JSON.stringify(nlwSetup.data))
}

//pegando os dados em string do metodo save, transformando em objeto e salvando os dados.
const data = JSON.parse(localStorage.getItem("saveHabitsNLW")) || {} /*Esse OU no fim é para não quebrar quando iniciar, pois vai estar vazio! */
//setando os dados e subindo para exibir
nlwSetup.setData(data)
nlwSetup.load()
