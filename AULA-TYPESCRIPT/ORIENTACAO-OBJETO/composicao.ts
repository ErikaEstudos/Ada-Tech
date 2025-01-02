type Constructor<T = {}> = new (...args: any[]) => T;

function MixinVoa<TBase extends Constructor<Animal>>(Base: TBase) {
    return class extends Base {
        constructor(...args: any[]) {
            super(...args); // Passa os argumentos corretamente para a superclasse
        }

        voa() {
            console.log(`${this.nome} voou`); // `this.nome` agora está acessível
        }
    };
}

function MixinNada<TBase extends Constructor<Animal>>(Base: TBase) {
    return class extends Base {
        constructor(...args: any[]) {
            super(...args); // Passa os argumentos corretamente para a superclasse
        }

        nada() {
            console.log(`${this.nome} nadou`); // `this.nome` agora está acessível
        }
    };
}

function MixinAnda<TBase extends Constructor<Animal>>(Base: TBase) {
    return class extends Base {
        constructor(...args: any[]) {
            super(...args); // Passa os argumentos corretamente para a superclasse
        }

        anda() {
            console.log(`${this.nome} andou`); // `this.nome` agora está acessível
        }
    };
}

interface AnimalInterface {
    nome: string;
    idadeEmMeses: number;
    comer: () => void;
}

class Animal implements AnimalInterface {
    public nome: string;
    public idadeEmMeses: number;

    constructor({ nome, idadeEmMeses }: { nome: string; idadeEmMeses: number }) {
        this.nome = nome;
        this.idadeEmMeses = idadeEmMeses;
    }

    comer(): void {
        console.log(`${this.nome} se alimentou`);
    }
}
//se preferir atribuir essa maneira
class AnimalVoadorAndadorNadador extends MixinNada(MixinAnda(MixinVoa(Animal))){}

// Instâncias:
const cachorro = new Animal({ nome: "Mel", idadeEmMeses: 10 });
const MoscaVoadora = MixinVoa(Animal);
const mosca = new MoscaVoadora({ nome: "Mosca X", idadeEmMeses: 0.1 });
const pato = new (MixinNada(MixinAnda(MixinVoa(Animal))))({ nome: "Bruce", idadeEmMeses: 6 })

//se preferir atribuir dessa maneira
const pato2 = new AnimalVoadorAndadorNadador({ nome: "Paulão", idadeEmMeses: 10})

// Testes:
cachorro.comer();
mosca.comer();
mosca.voa();
pato.voa()
pato.anda()
pato.nada()

pato2.voa()
pato2.anda()
pato2.nada()
