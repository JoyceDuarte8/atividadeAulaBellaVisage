class Paciente {
  nome: string;
  cpf: string;
  dataNascimento: string;

  // Construtor
  constructor(nome: string, cpf: string, dataNascimento: string) {
      this.nome = nome;
      this.cpf = cpf;
      this.dataNascimento = dataNascimento;
  }

  // Método para retornar uma representação em string do objeto
  toString(): string {
      return `Paciente: ${this.nome}, CPF: ${this.cpf}, Data de Nascimento: ${this.dataNascimento}`;
  }
}

// Exemplo de uso
//const paciente1 = new Paciente("Maria Silva", "123.456.789-00", "01/01/1990");
//console.log(paciente1.toString());
