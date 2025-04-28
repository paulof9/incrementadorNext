import { HistoricoItem } from './HistoricoItem';

export interface historicoProps{   // Número de funções que o componente possui
    historico: HistoricoItem[];
    excluirHistorico: (id:number) => void; // Não retorna um numero ou coisa do tipo, retorna uma função
}