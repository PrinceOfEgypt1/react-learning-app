// src/data/fundamentos.ts
export interface Topic {
  id: string;
  title: string;
  content: string;
  examples: { code: string; description: string }[];
  exercises: string[];
  resources: { title: string; url: string }[];
}

export const fundamentos: Topic[] = [
  {
    id: 'logica',
    title: 'Lógica de Programação',
    content: `Lógica de programação é o processo de decompor problemas em passos claros e ordenados, usando fluxogramas ou pseudocódigo (Portugol) antes de codificar em Java ou Python. Essa abordagem garante clareza e evita bugs.`,
    examples: [
      {
        code: `// Java
int nota = 8;
if (nota >= 7) {
  System.out.println("Aprovado");
} else {
  System.out.println("Reprovado");
}`,
        description: 'Exemplo em Java para avaliar aprovação escolar.'
      },
      {
        code: `# Python
nota = 5.5
if nota >= 7:
    print("Aprovado")
else:
    print("Reprovado")`,
        description: 'Mesma lógica implementada em Python.'
      },
      {
        code: `// Portugol (Portugol Studio)
algoritmo "VerificaNumero"
var
  numero: inteiro
inicio
  leia(numero)
  se numero % 2 = 0 entao
    escreva("Par")
  senao
    escreva("Ímpar")
  fimse
fimalgoritmo`,
        description: 'Fluxograma em pseudocódigo usando Portugol Studio.'
      }
    ],
    exercises: [
      'Desenhe um fluxograma para calcular a área de um retângulo.',
      'Implemente em Java um pseudocódigo que leia três números e imprima o maior.',
      'Crie um algoritmo em Python para verificar se um número é primo.'
    ],
    resources: [
      { title: 'Portugol Studio', url: 'http://www.portugol.org/studio' },
      { title: 'FreeCodeCamp – Lógica de Programação', url: 'https://www.freecodecamp.org/news/logic-programming-basics/' }
    ]
  },
  {
    id: 'algoritmos',
    title: 'Algoritmos Básicos',
    content: `Algoritmos são receitas passo a passo para resolver problemas. Aqui mostramos ordenação (Bubble Sort) e busca (Sequencial e Binária) em Java e Python. Você também pode usar fluxogramas em Portugol.`,
    examples: [
      {
        code: `// Java – Bubble Sort
int[] A = {5, 2, 9, 1};
for (int i = 0; i < A.length - 1; i++) {
  for (int j = 0; j < A.length - 1 - i; j++) {
    if (A[j] > A[j + 1]) {
      int temp = A[j];
      A[j] = A[j + 1];
      A[j + 1] = temp;
    }
  }
}`,
        description: 'Ordenação Bubble Sort em Java.'
      },
      {
        code: `# Python – Busca Binária
def busca_binaria(arr, chave):
    baixo, alto = 0, len(arr) - 1
    while baixo <= alto:
        meio = (baixo + alto) // 2
        if arr[meio] == chave:
            return meio
        elif arr[meio] < chave:
            baixo = meio + 1
        else:
            alto = meio - 1
    return -1`,
        description: 'Implementação de busca binária em Python.'
      }
    ],
    exercises: [
      'Encontre a posição de um elemento em um array ordenado usando busca binária em Java.',
      'Explique a complexidade de tempo de Bubble Sort vs Quick Sort.',
      'Descreva em pseudocódigo (Portugol) como funciona a busca sequencial.'
    ],
    resources: [
      { title: 'GeeksforGeeks – Algoritmos de Ordenação', url: 'https://www.geeksforgeeks.org/sorting-algorithms/' },
      { title: 'Artigo – Busca Binária', url: 'https://pt.wikipedia.org/wiki/Binary_search_algorithm' }
    ]
  },
  {
    id: 'variaveis',
    title: 'Tipos de Dados e Variáveis',
    content: `Variáveis armazenam valores em memória. Em Java declaramos tipo, em Python o tipo é dinâmico. Dados primitivos incluem inteiros, ponto flutuante, booleanos e strings.`,
    examples: [
      {
        code: `// Java
int ano = 2025;
float temperatura = 36.5f;
boolean ativo = true;
String nome = "Moisés";`,
        description: 'Declaração de variáveis em Java.'
      },
      {
        code: `# Python
ano = 2025
temperatura = 36.5
ativo = True
nome = "Moisés"`,
        description: 'Declaração sem tipo explícito em Python.'
      },
      {
        code: `// Portugol
var numero: inteiro
var texto: caractere
numero = 10
escreva(texto)`,
        description: 'Exemplos básicos em Portugol.'
      }
    ],
    exercises: [
      'Crie variáveis em Java para armazenar nome, idade e saldo bancário.',
      'Em Python, altere o valor de uma variável e explique o que acontece.',
      'Liste três diferenças entre variáveis mutáveis e imutáveis.'
    ],
    resources: [
      { title: 'Python Docs – Tipos de Dados', url: 'https://docs.python.org/3/library/stdtypes.html' },
      { title: 'Oracle – Tipos Primitivos Java', url: 'https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html' }
    ]
  },
  {
    id: 'condicionais',
    title: 'Estruturas Condicionais',
    content: `If, else e switch permitem ramificar o fluxo do programa. Sintaxe varia conforme a linguagem, mas o conceito é o mesmo: executar código quando uma condição for verdadeira.`,
    examples: [
      {
        code: `// Java
int x = 10;
if (x % 2 == 0) {
  System.out.println("Par");
} else {
  System.out.println("Ímpar");
}`,
        description: 'Condicional if/else em Java.'
      },
      {
        code: `# Python
idade = 20
if idade < 18:
    print("Menor")
elif idade < 65:
    print("Adulto")
else:
    print("Idoso")`,
        description: 'If/elif/else em Python.'
      }
    ],
    exercises: [
      'Implemente em Java a classificação de notas (A, B, C, D, F) usando switch-case.',
      'Escreva um if aninhado em Python para verificar múltiplas condições.',
      'Desenhe um fluxograma em Portugol para decisão de login (usuário e senha).'
    ],
    resources: [
      { title: 'MDN – if...else', url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else' },
      { title: 'Tutorialspoint – Java switch', url: 'https://www.tutorialspoint.com/java/switch_statement_in_java.htm' }
    ]
  },
  {
    id: 'lacos',
    title: 'Laços de Repetição',
    content: `Laços permitem executar repetidamente um bloco de código: for para contagens, while para condições e do-while para execução mínima.`,
    examples: [
      {
        code: `// Java
for (int i = 1; i <= 5; i++) {
  System.out.println(i);
}`,
        description: 'Loop for em Java.'
      },
      {
        code: `# Python
i = 1
while i <= 5:
    print(i)
    i += 1`,
        description: 'Loop while em Python.'
      }
    ],
    exercises: [
      'Em Java, use do-while para ler números até que o usuário digite zero.',
      'Em Python, gere a sequência de Fibonacci usando for.',
      'Descreva em pseudocódigo (Portugol) um laço infinito com condição de quebra.'
    ],
    resources: [
      { title: 'Oracle – Laços em Java', url: 'https://docs.oracle.com/javase/tutorial/java/nutsandbolts/for.html' },
      { title: 'GeeksforGeeks – Loops em Python', url: 'https://www.geeksforgeeks.org/loops-in-python/' }
    ]
  },
  {
    id: 'funcoes',
    title: 'Funções e Procedimentos',
    content: `Funções retornam valores e procedimentos (void) executam tarefas sem retorno. São essenciais para modularização e reutilização de código.`,
    examples: [
      {
        code: `// Java
public int soma(int a, int b) {
  return a + b;
}`,
        description: 'Função em Java que soma dois números.'
      },
      {
        code: `# Python
def saudacao(nome):
    print(f"Olá, {nome}!")`,
        description: 'Procedimento em Python que exibe saudação.'
      }
    ],
    exercises: [
      'Escreva em Java um método que calcule o fatorial de um número.',
      'Implemente em Python uma função recursiva para calcular a soma de uma lista.',
      'Desenhe o diagrama de chamadas de uma função que chama outra em Portugol.'
    ],
    resources: [
      { title: 'Java – Métodos', url: 'https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html' },
      { title: 'Python Docs – Funções', url: 'https://docs.python.org/3/tutorial/controlflow.html#defining-functions' }
    ]
  }
];
