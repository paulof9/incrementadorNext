import { botoesProps } from '../../../types/botoesProps';

const Incrementador = ({ incrementarContador, diminuirContador, resetarContador }: botoesProps) => {
    return(
        <div className="flex">
            <button
                onClick={incrementarContador}
                className="w-10 h-10 rounded-md bg-green-600 text-white ml-2 flex items-center justify-center"
            >
                +1
            </button>

            <button
                onClick={diminuirContador}
                className="w-10 h-10 rounded-md bg-red-600 text-white ml-2 flex items-center justify-center"
            >
                -1
            </button>

            <button
                onClick={resetarContador}
                className="rounded-md bg-blue-600 py-2 px-4 text-white ml-2"
            >
                resetar
            </button>
            </div>
    );
    };

export default Incrementador;