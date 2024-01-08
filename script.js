class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = "";

    switch (this.tipo) {
      case "mago":
        ataque = "usou magia";
        break;
      case "guerreiro":
        ataque = "usou espada";
        break;
      case "monge":
        ataque = "usou artes marciais";
        break;
      case "ninja":
        ataque = "usou shuriken";
        break;
      default:
        ataque = "usou um ataque";
        break;
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

const wizard = new Heroi("Herói Mago", 30, "mago");
const warrior = new Heroi("Herói Guerreiro", 25, "guerreiro");
const monk = new Heroi("Herói Monge", 35, "monge");
const ninja = new Heroi("Herói Ninja", 28, "ninja");

wizard.atacar();
warrior.atacar();
monk.atacar();
ninja.atacar();
