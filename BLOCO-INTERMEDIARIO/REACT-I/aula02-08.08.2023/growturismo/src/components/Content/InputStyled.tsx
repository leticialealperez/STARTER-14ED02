import styled from 'styled-components';

const InputStyled = styled.div`
  margin: 14px 0;

  label {
    display: block;
    font-size: 1.2rem;
    margin-bottom: 4px;
  }

  input {
    padding: 8px;
    border-radius: 12px;
    width: 100%;
    border: 2px solid #122a57;
  }

  textarea {
    padding: 8px;
    border-radius: 12px;
    width: 100%;
    border: 2px solid #122a57;
    height: 60px;
    resize: none;
  }

  button {
    padding: 8px;
    border-radius: 12px;
    width: 100%;
    border: 2px solid #122a57;
    background-color: #122a57;
    color: #ffff;
    cursor: pointer;
  }

  button:hover {
    background-color: #4b5f87;
    border: 2px solid #4b5f87;
    font-weight: bold;
  }
`;

export default InputStyled;
