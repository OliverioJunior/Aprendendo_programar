programa
{
	
	funcao inicio()
	{
		cadeia vetor[3]
		inteiro matriz[3][3]
		para(inteiro i = 0; i<3; i++){
			
			escreva("Informe o nome do aluno ")
			escreva("\n")
			leia(vetor[i]) 
			para(inteiro j = 0; j<3; j++){
				se(i==0){
					escreva("Informe a nota de ", vetor[i])
					escreva("\n")
					leia(matriz[i][j])
				}
				se(i==1){
					escreva("Informe a nota de ", vetor[i])
					escreva("\n")
					leia(matriz[i][j])
				}
				se(i==2){
					escreva("Informe a nota de ", vetor[i])
					escreva("\n")
					leia(matriz[i][j])
				}

			}
		}
		para(inteiro i = 0; i<3; i++){
			escreva("\n")
			escreva( (i+1),"-" ,vetor[i])
			para(inteiro j = 0; j<3; j++){
				escreva("\n")
				escreva(matriz[i][j])
			}
		}
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 719; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */