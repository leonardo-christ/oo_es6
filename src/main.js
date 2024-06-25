function notaAleatoria() {
    return Math.floor(Math.random() * 11);
  }

const alunos = [
    { Nome: "Sophia", nota: notaAleatoria() },
    { Nome: "Miguel", nota: notaAleatoria() },
    { Nome: "Isabella", nota: notaAleatoria() },
    { Nome: "Gabriel", nota: notaAleatoria() },
    { Nome: "Helena", nota: notaAleatoria() },
    { Nome: "Arthur", nota: notaAleatoria() },
    { Nome: "Valentina", nota: notaAleatoria() },
    { Nome: "João", nota: notaAleatoria() },
    { Nome: "Laura", nota: notaAleatoria() },
    { Nome: "Eduardo", nota: notaAleatoria() }
  ];

const alunosPassados = alunos.filter((media) => media.nota >= 6)

console.log(alunosPassados)