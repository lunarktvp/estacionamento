import { Cliente } from './cliente.model';

   export class Ticket{  
      public id: any
      public placa: any
      public entrada:any
      public saida: any    
      public valor: number
      public cliente:Cliente
      public permanencia: number
      public tipoPagamento: any
      public situacao: any
   }