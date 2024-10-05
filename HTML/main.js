function calcular() {
    // Obter valores dos campos de entrada
    var peso = parseFloat(document.getElementById("peso").value.replace(/,/, '.'));
    var altura = parseFloat(document.getElementById("altura").value.replace(/,/, '.'));
    var genero = document.getElementById("sexo").value;
    var texto = document.getElementById("imc");

    // Verificar se os valores são válidos
    if (isNaN(peso) || isNaN(altura) || genero === "Selecione seu Gênero") {
        alert("Por favor, insira valores válidos e selecione seu gênero.");
        return;
    }

    // Calculando IMC
    var imc = peso / (altura * altura);
    var classe = "";

    // Classificando IMC de acordo com o gênero
    if (genero === 'M') {
        if (imc < 20.7) {
            classe = 'Magro';
        } else if (imc >= 20.7 && imc <= 26.4) {
            classe = 'Normal';
        } else if (imc > 26.4) {
            classe = 'Obeso';
        } else {
            classe = 'Algo deu errado';
        }
    } else if (genero === 'F') {
        if (imc < 19.1) {
            classe = 'Magra';
        } else if (imc >= 19.1 && imc <= 25.8) {
            classe = 'Normal';
        } else if (imc > 25.8) {
            classe = 'Obesa';
        } else {
            classe = 'Algo deu errado';
        }
    }

    if (classe == 'Magro' || classe == 'Magra') {
        texto.style = 'display:flex'
        texto.innerHTML = `<img src="./imagem/Magro.png" alt="gordin" class="img">
    <div id="textos">
        <p class="texto"><b>Peso: </b>${peso}Kg</p>
        <p class="texto"><b>Altura: </b>${altura}m</p>
        <p class="texto"><b>Classificação: </b>${classe}</p>
        <p class="texto"><b>IMC: </b> ${imc.toFixed(2)}</p>
    </div>`
    } else if (classe == 'Normal') {
        texto.style = 'display:flex'
        texto.innerHTML = `<img src="./imagem/Normal.png" alt="gordin" class="img">
    <div id="textos">
        <p class="texto"><b>Peso: </b>${peso}Kg</p>
        <p class="texto"><b>Altura: </b>${altura}m</p>
        <p class="texto"><b>Classificação: </b>${classe}</p>
        <p class="texto"><b>IMC: </b> ${imc.toFixed(2)}</p>
    </div>`
    } else if (classe == 'Obeso' || classe == 'Obesa') {
        texto.style = 'display:flex'
        texto.innerHTML = `<img src="./imagem/Gordo-Recuperado.png" alt="gordin" class="img">
    <div id="textos">
        <p class="texto"><b>Peso: </b>${peso}Kg</p>
        <p class="texto"><b>Altura: </b>${altura}m</p>
        <p class="texto"><b>Classificação: </b>${classe}</p>
        <p class="texto"><b>IMC: </b> ${imc.toFixed(2)}</p>
    </div>`
    }
   
}

