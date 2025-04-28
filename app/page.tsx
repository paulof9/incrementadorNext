'use client';

import { useState, useRef } from 'react';
import { HistoricoItem } from '../../types/historicoItem';


const Incrementador = () => {
  const [contador, setContador] = useState(0);  // Inicializa o contador com 0
  const [historico, setHistorico] = useState<HistoricoItem[]>([]);  // Inicializa o historico como um array de numeros
  const nextId = useRef(0);

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

  // Função localStorage
  

  // Função de exclusão (idExclusão vem do id passado no HTML, em outras palavras, um 'x', variavel...)
  const excluirHistorico = (idExclusao: number) => {
    setHistorico(historicoAnterior => historicoAnterior.filter(item => item.id !== idExclusao));
  };

  return (
    <div className="row flex rounded-lg bg-slate-800 shadow-sm max-w-fit max-h-fit p-8 my-6 border border-slate-600 items-center">
      {/* DISPLAY */}
      <p className="rounded-md bg-white py-2 px-4 border border-transparent text-center text-sm text-black transition-all shadow-md hover:shadow-lg focus:bg-gray-100 focus:shadow-none active:bg-gray-100 hover:bg-gray-100 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 flex-grow">
        {contador}
      </p>

      {/* Botão INCREMENTAR */}
      <button
        onClick={incrementarContador}
        className="w-10 h-10 rounded-md bg-green-600 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 flex items-center justify-center"
      >
        +1
      </button>

      {/* Botão DIMINUIR */}
      <button
        onClick={diminuirContador}
        className="w-10 h-10 rounded-md bg-red-600 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 flex items-center justify-center"
      >
        -1
      </button>
      {/* Botão RESETAR */}
      <button
        onClick={resetarContador}
        className="rounded-md bg-blue-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-700 hover:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
      >
        resetar
      </button>

      {/* Histórico */}
      <div className="w-24 h-fit rounded-md bg-white text-black border border-transparent text-center text-sm transition-all shadow-md disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 flex flex-col items-center">
        <p className="mb-1">Histórico:</p>
        <ul className="px-2 max-h-28 overflow-y-auto text-xs">
          {historico.map(item => (
            <li key={item.id} className="flex items-center justify-between py-1">
              <span className="mr-2">{item.valor}</span>
              {/* Botão EXCLUIR */}
              {/* Aqui passamos o id do item na função excluirHistorico */}
              <button
                onClick={() => excluirHistorico(item.id)}
                className="rounded bg-red-600 px-1 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Incrementador;