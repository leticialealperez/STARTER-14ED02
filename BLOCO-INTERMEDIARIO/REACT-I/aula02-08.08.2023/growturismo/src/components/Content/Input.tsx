import InputStyled from './InputStyled';

interface InputProps {
  valor: string;
  funcaoOnChange: (evento: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  textoLabel: string;
  tipoInput?: React.HTMLInputTypeAttribute;
  nomeInput?: string;
  elemento: 'input' | 'textarea';
}

function Input({
  elemento: Elemento,
  funcaoOnChange,
  textoLabel,
  valor,
  nomeInput,
  tipoInput
}: InputProps) {
  return (
    <InputStyled>
      <label>{textoLabel}: </label>
      <Elemento type={tipoInput} name={nomeInput} value={valor} onChange={funcaoOnChange} />
    </InputStyled>
  );
}

export default Input;
