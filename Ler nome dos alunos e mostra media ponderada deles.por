programa
{	
	inclua biblioteca Matematica --> m
	
	funcao inicio()
	{
		cadeia vetor[3]
		inteiro matriz[3][3]
		inteiro peso_1 = 2
		inteiro peso_2 = 3
		inteiro peso_3 = 4
		real media[3]
		
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
				para(inteiro j = 0; j<3; j++){
					escreva("\n")
					se(j==0){
					matriz[i][j] = matriz[i][j]*peso_1
						 
					}
					se(j==1){
					matriz[i][j] = matriz[i][j]*peso_2
						
					}
					se(j==2){
					matriz[i][j] = matriz[i][j]*peso_3
											}
				}
				
				
		}
			para(inteiro i = 0; i<3; i++){
				
				para(inteiro j = 0; j<3; j++){
					se(i==0){
						media[i] +=  matriz[i][j]
					}
					se(i==1){
						media[i] +=  matriz[i][j]
					}
					se(i==2){
						media[i] +=  matriz[i][j]
					}
				}
			}
			para(inteiro i = 0; i<3; i++){
				escreva("\n")
				escreva( (i+1),"-", " O aluno " ,vetor[i], " tem")	
				escreva("\n")
				escreva(" a média ", m.arredondar(media[i]/9.0, 2))
			}	
			
					
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 447; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */