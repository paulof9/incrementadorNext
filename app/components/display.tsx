import { displayProps } from '../../../types/displayProps';

const ContadorDisplay = ({ contador }: displayProps) => {
  return (
    <p className="rounded-md bg-white py-2 px-4 border border-transparent text-center text-sm text-black transition-all shadow-md hover:shadow-lg focus:bg-gray-100 focus:shadow-none active:bg-gray-100 hover:bg-gray-100 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 flex-grow">
      {contador}
    </p>
  );
};

export default ContadorDisplay;
