import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Melissa","09490184659" );

const cliente2 = new Cliente("Bernardo", 986054381);

const ContaCorrenteMelissa = new ContaCorrente(1001, cliente1);

ContaCorrenteMelissa.depositar(500);

ContaCorrenteMelissa.cliente = cliente1;

const ContaCorrenteBernardo = new ContaCorrente(1002, cliente2);

ContaCorrenteMelissa.transferir(200, ContaCorrenteBernardo);

console.log(ContaCorrenteBernardo);
