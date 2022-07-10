// Como podemos melhorar o esse código usando TS?  (Desafio 2)
interface IPessoa {
    nome: string;
    idade: number | string;
    profissao: Trabalho
}

enum Trabalho {
    Atriz,
    Padeiro
}

let pessoa1: IPessoa = {
    nome: "maria",
    idade: 29,
    profissao: Trabalho.Atriz
};

let pessoa2: IPessoa = {
    nome: "roberto",
    idade: 19,
    profissao: Trabalho.Padeiro
}

let pessoa3: IPessoa = {
    nome: "laura",
    idade: "32",
    profissao: Trabalho.Atriz
};

let pessoa4: IPessoa = {
    nome: "carlos",
    idade: 19,
    profissao: Trabalho.Padeiro
}