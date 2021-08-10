import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import {Gerente} from "./Funcionario/Gerente.js";
import {Diretor} from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const cliente1 = new Cliente("Melissa", 5554678);

const ContaCorrenteMelissa = new ContaCorrente(1001, cliente1);

const ContaPoupancaMelissa = new ContaPoupanca(cliente1, 1001, 50);

const gerente = new Gerente("Bernardo", 93900323, 5000);
gerente.cadastrarSenha("123");

const diretor = new Diretor("Juliana", 65325532, 10000);
diretor.cadastrarSenha("33434");

const estaLogado = SistemaAutenticacao.login(gerente, "123")

console.log(estaLogado);

