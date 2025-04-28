import { historicoProps } from '../../types/historicoProps';

const Historico = ({ historico, excluirHistorico }: historicoProps ) => {
    return(
        <div className="w-24 h-fit rounded-md bg-white text-black text-center text-sm shadow-md ml-2 flex flex-col items-center">
        <p className="mb-1">Histórico:</p>
        <ul className="px-2 max-h-28 overflow-y-auto text-xs">
          {historico.map(item => (
            <li key={item.id} className="flex items-center justify-between py-1">
              <span className="mr-2">{item.valor}</span>
              <button
                onClick={() => excluirHistorico(item.id)}
                className="rounded bg-red-600 px-1 text-white"
              >
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Historico;