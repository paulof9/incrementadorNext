'use client';
import { useState, useEffect, useRef } from 'react';
import { HistoricoItem } from '../types/HistoricoItem';
// Componentes
import Historico from '../app/components/historico'
import Display from '../app/components/display'
import Botoes from '../app/components/botoes'

const Incrementador = () => {
  const [historico, setHistorico] = useState<HistoricoItem[]>([]); // Inicializa como vazio
  const [contador, setContador] = useState(0);
  const nextId = useRef(0);
  const [isClient, setIsClient] = useState(false); // Serve para verificar se está no client-side

  // LocalStorage (useEffect pois é uma função clientSide)
  useEffect(() => {
    setIsClient(true); // Renderiza PRIMEIRAMENTE no server-side e já TORNA client-side para evitar erros!
    const historicoSalvo = localStorage.getItem('historico');
    if (historicoSalvo) {
      setHistorico(JSON.parse(historicoSalvo));
    }
  }, []);

  useEffect(() => {
    if (isClient) { // Salva apenas no cliente, para evitar erros!
      console.log("Salvando histórico no localStorage", historico);
      localStorage.setItem('historico', JSON.stringify(historico));
    }
  }, [historico, isClient]); 

  // Função de incrementar
  const incrementarContador = () => {
    setContador(contadorAnterior => contadorAnterior + 1);
  };

  // Função de diminuir
  const diminuirContador = () => {
    setContador(contadorAnterior => {
      const novoContador = contadorAnterior - 1;
      return novoContador < 0 ? 0 : novoContador;
    });
  };

  // Função de resetar contador E adicionar ao histórico (array) ao resetar
  const resetarContador = () => {
    if (contador != 0) {
      // Adiciona valor do 'contador' ao Array
      setHistorico(historicoAnterior => [...historicoAnterior, { id: nextId.current++, valor: contador }]);
    }
    // Reseta contador
    setContador(0);
  };

  // Função de exclusão (idExclusão vem do id passado no HTML, em outras palavras, um 'x', variavel...)
  const excluirHistorico = (idExclusao: number) => {
    setHistorico(historicoAnterior => historicoAnterior.filter(item => item.id !== idExclusao));
  };

  return (
    <div className="row flex rounded-lg bg-slate-800 shadow-sm max-w-fit max-h-fit p-8 my-6 border border-slate-600 items-center">

      <Display contador={contador} />

      <Botoes
        incrementarContador={incrementarContador}
        diminuirContador={diminuirContador}
        resetarContador={resetarContador}
      />

      <Historico historico={historico} excluirHistorico={excluirHistorico} />
    </div>
  );
};

export default Incrementador;