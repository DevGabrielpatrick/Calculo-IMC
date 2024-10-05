#include <stdio.h>

// Função para calcular o IMC
float calcular_imc(float peso, float altura) {
    return peso / (altura * altura);
}

// Função para classificar o IMC de acordo com a tabela oficial da OMS
const char* classificar_imc_oficial(float imc) {
    if (imc < 18.5)
        return "Abaixo do peso";
    else if (imc >= 18.5 && imc < 24.9)
        return "Peso normal";
    else if (imc >= 25 && imc < 29.9)
        return "Sobrepeso";
    else if (imc >= 30 && imc < 34.9)
        return "Obesidade grau I";
    else if (imc >= 35 && imc < 39.9)
        return "Obesidade grau II";
    else
        return "Obesidade grau III (mórbida)";
}

int main() {
    float peso, altura, imc;
    char genero[10];  // Para armazenar o gênero

    // Exibindo a tabela oficial de classificação do IMC (OMS) antes das perguntas
    printf("\nTabela oficial de classificacao do IMC (OMS):\n");
    printf("-----------------------------------------------------\n");
    printf("| Faixa de IMC          | Classificacao               |\n");
    printf("-----------------------------------------------------\n");
    printf("| Menos de 18.5         | Abaixo do peso              |\n");
    printf("| Entre 18.5 e 24.9     | Peso normal                 |\n");
    printf("| Entre 25.0 e 29.9     | Sobrepeso                   |\n");
    printf("| Entre 30.0 e 34.9     | Obesidade grau I            |\n");
    printf("| Entre 35.0 e 39.9     | Obesidade grau II           |\n");
    printf("| Acima de 40.0         | Obesidade grau III (morbida)|\n");
    printf("-----------------------------------------------------\n\n");

    // Entrada de dados
    printf("Digite o seu peso em kg: ");
    scanf("%f", &peso);
    printf("Digite a sua altura em metros: ");
    scanf("%f", &altura);
    printf("Digite o seu genero (masculino/feminino): ");
    scanf("%s", genero);

    // Cálculo do IMC
    imc = calcular_imc(peso, altura);

    // Classificação do IMC com base na tabela oficial
    const char* classificacao_oficial = classificar_imc_oficial(imc);

    // Exibindo o resultado
    printf("\nSeu IMC e: %.2f\n", imc);
    printf("Classificacao oficial (OMS): %s\n", classificacao_oficial);

    return 0;
}