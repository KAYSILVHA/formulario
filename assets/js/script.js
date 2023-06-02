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






function selecionarRegiao() {
  var regioesSelect = document.getElementsByName("regiao");
  var selectedRegioes = [];

  // Obter as regiões selecionadas
  for (var i = 0; i < regioesSelect.length; i++) {
      if (regioesSelect[i].checked) {
          selectedRegioes.push(regioesSelect[i].value);
      }
  }

  var ossosContainer = document.getElementById("ossos-container");

  // Limpar os ossos selecionados
  ossosContainer.innerHTML = "";

  // Adicionar ossos baseado nas regiões selecionadas
  for (var i = 0; i < selectedRegioes.length; i++) {
      var regiao = selectedRegioes[i];

      if (regiao === "crânio") {
          adicionarOpcaoOsso("Frontal", "frontal");
          adicionarOpcaoOsso("Occipital", "occipital");
          adicionarOpcaoOsso("Parietal", "parietal");
          adicionarOpcaoOsso("Temporal", "temporal");
          adicionarOpcaoOsso("Esfenóide", "esfenóide");
          adicionarOpcaoOsso("Maxila", "maxila");
          adicionarOpcaoOsso("Mandíbula", "mandíbula");
      } else if (regiao === "tórax") {
          adicionarOpcaoOsso("Esterno", "esterno");
          adicionarOpcaoOsso("Costelas", "costelas");
          adicionarOpcaoOsso("Escápula", "escapula");
          adicionarOpcaoOsso("Clavícula", "clavicula");
          adicionarOpcaoOsso("Vértebras Torácicas", "vertebras-toracicas");
      } else if (regiao === "membros-superiores") {
          adicionarOpcaoOsso("Úmero", "umero");
          adicionarOpcaoOsso("Rádio", "radio");
          adicionarOpcaoOsso("Ulna", "ulna");
          adicionarOpcaoOsso("Cúbito", "cubito");
          adicionarOpcaoOsso("Escápula", "escapula-ms");
          adicionarOpcaoOsso("Clavícula", "clavicula-ms");
          adicionarOpcaoOsso("Carpais", "carpais");
          adicionarOpcaoOsso("Metacarpais", "metacarpais");
          adicionarOpcaoOsso("Falanges", "falanges");
      } else if (regiao === "membros-inferiores") {
          adicionarOpcaoOsso("Fêmur", "femur");
          adicionarOpcaoOsso("Tíbia", "tibia");
          adicionarOpcaoOsso("Fíbula", "fibula");
          adicionarOpcaoOsso("Rótula", "rotula");
          adicionarOpcaoOsso("Vértebras Lombar", "vertebras-lombar");
          adicionarOpcaoOsso("Escápula", "escapula-mi");
          adicionarOpcaoOsso("Fíbula", "fibula-mi");
          adicionarOpcaoOsso("Tarsais", "tarsais");
          adicionarOpcaoOsso("Metatarsais", "metatarsais");
          adicionarOpcaoOsso("Falanges", "falanges-mi");
      } else if (regiao === "pescoço") {
          adicionarOpcaoOsso("Cervical 1 (Atlas)", "cervical-1");
          adicionarOpcaoOsso("Cervical 2 (Áxis)", "cervical-2");
          adicionarOpcaoOsso("Cervicais 3-7", "cervicais-3-7");
          adicionarOpcaoOsso("Hióide", "hióide");
      }
  }
}

function adicionarOpcaoOsso(nome, valor) {
  var ossosContainer = document.getElementById("ossos-container");

  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "ossos";
  checkbox.value = valor;

  var label = document.createElement("label");
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(nome));

  ossosContainer.appendChild(label);
  ossosContainer.appendChild(document.createElement("br"));

  checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
          adicionarCaixaRetornoOsso(nome);
      } else {
          removerCaixaRetornoOsso(nome);
      }
  });
}

function adicionarCaixaRetornoOsso(nome) {
  var caixasRetornoOsso = document.getElementById("caixas-retorno-osso");

  var label = document.createElement("label");
  label.appendChild(document.createTextNode(nome + ": "));

  var input = document.createElement("input");
  input.type = "text";
  input.name = nome.toLowerCase().replace(/\s/g, "-") + "-lesao";
  input.classList.add("lesao-osso");

  label.appendChild(input);

  caixasRetornoOsso.appendChild(label);
  caixasRetornoOsso.appendChild(document.createElement("br"));
}

function removerCaixaRetornoOsso(nome) {
  var caixasRetornoOsso = document.getElementById("caixas-retorno-osso");
  var inputName = nome.toLowerCase().replace(/\s/g, "-") + "-lesao";

  var labels = caixasRetornoOsso.getElementsByTagName("label");
  for (var i = 0; i < labels.length; i++) {
      var input = labels[i].getElementsByTagName("input")[0];
      if (input.name === inputName) {
          caixasRetornoOsso.removeChild(labels[i]);
          break;
      }
  }
}

function verificarLesaoOsso() {
  var caixasRetornoOsso = document.getElementById("caixas-retorno-osso");
  var labels = caixasRetornoOsso.getElementsByTagName("label");

  var lesaoOssos = [];

  for (var i = 0; i < labels.length; i++) {
      var input = labels[i].getElementsByTagName("input")[0];
      if (input.value !== "") {
          lesaoOssos.push(labels[i].innerText.replace(": ", "") + " - " + input.value);
      }
  }

  if (lesaoOssos.length > 0) {
      alert("Lesões nos ossos:\n\n" + lesaoOssos.join("\n"));
  } else {
      alert("Não há lesões nos ossos selecionados.");
  }
}