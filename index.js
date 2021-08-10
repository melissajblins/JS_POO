import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";

const cliente1 = new Cliente("Melissa", 9490184659);

const ContaCorrenteMelissa = new ContaCorrente(1001, cliente1);

const ContaPoupancaMelissa = new ContaPoupanca(cliente1, 1001, 50);

console.log(ContaPoupancaMelissa);
console.log(ContaCorrenteMelissa)
