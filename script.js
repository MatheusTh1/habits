const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const data = {
  gym: ["01-01", "01-02", "01-03"],
  study: ["01-07"],
}

nlwSetup.setData(data)
nlwSetup.load()

