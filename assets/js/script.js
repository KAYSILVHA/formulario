function calcularIdade() {
  var dataNascimento = new Date(document.getElementById("data_nascimento").value);
  var dataAtual = new Date();

  var diferencaAnos = dataAtual.getFullYear() - dataNascimento.getFullYear();
  var diferencaMeses = dataAtual.getMonth() - dataNascimento.getMonth();
  var diferencaDias = dataAtual.getDate() - dataNascimento.getDate();

  if (diferencaDias < 0) {
      diferencaMeses--;
  }

  if (diferencaMeses < 0) {
      diferencaAnos--;
      diferencaMeses += 12;
  }

  var idade = "";
  if (diferencaAnos > 0) {
      idade += diferencaAnos + " ano(s) ";
  }
  if (diferencaMeses > 0) {
      idade += diferencaMeses + " mês(es)";
  }

  document.getElementById("idade").textContent = idade;
}

function submitForm() {
  var form = document.getElementById("form");
  var formData = new FormData(form);

  // Enviar dados para o servidor ou fazer outras ações com os dados

  // Exemplo: exibir dados no console
  for (var pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
  }

  // Limpar os campos após o envio
  form.reset();
}




function registrarSinaisVitais() {
  var frequenciaCardiaca = document.getElementById("frequencia_cardiaca").value;
  var pressaoArterialSistolica = document.getElementById("pressao_arterial_sistolica").value;
  var pressaoArterialDiastolica = document.getElementById("pressao_arterial_diastolica").value;
  var temperaturaCorporal = document.getElementById("temperatura_corporal").value;
  var frequenciaRespiratoria = document.getElementById("frequencia_respiratoria").value;
  var saturacao = document.getElementById("saturacao").value;

  // Aqui você pode fazer o que quiser com os valores dos sinais vitais
  // Por enquanto, vamos apenas imprimi-los no console
  console.log("Frequência Cardíaca:", frequenciaCardiaca, "bpm");
  console.log("Pressão Arterial:", pressaoArterialSistolica + "/" + pressaoArterialDiastolica, "mmHg");
  console.log("Temperatura Corporal:", temperaturaCorporal, "°C");
  console.log("Frequência Respiratória:", frequenciaRespiratoria, "irpm");
  console.log("Saturação:", saturacao, "%");
}



function calcularPontuacao() {
  var aberturaOcular = parseInt(document.getElementById("abertura_ocular").value);
  var respostaVerbal = parseInt(document.getElementById("resposta_verbal").value);
  var respostaMotora = parseInt(document.getElementById("resposta_motora").value);

  var pontuacaoTotal = aberturaOcular + respostaVerbal + respostaMotora;

  document.getElementById("pontuacao").textContent = "Pontuação Total: " + pontuacaoTotal;
}






function verificarResposta() {
  var murmuros = document.querySelector('input[name="murmurios"]:checked');
  var ruidos = document.querySelector('input[name="ruidos"]:checked');

  var resultado = "";

  if (murmuros) {
      resultado += "Murmúrios Vesiculares: " + murmuros.value + "<br>";
  }

  if (ruidos) {
      resultado += "Ruídos Adventícios: " + ruidos.value + "<br>";
  }

  if (resultado === "") {
      resultado = "Nenhuma opção selecionada";
  }

  document.getElementById("resultado").innerHTML = resultado;
}