import FeedbackStyled from './FeedbackStyle';

interface FeedbackProps {
  cor: 'success' | 'error' | 'info' | 'warning' | '';
  texto: string;
  show?: boolean;
}

function Feedback(props: FeedbackProps) {
  return (
    <FeedbackStyled color={props.cor} mostrar={props.show}>
      <p>{props.texto}</p>
    </FeedbackStyled>
  );
}

export default Feedback;
