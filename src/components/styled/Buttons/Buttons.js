import styled from 'styled-components';


export const Button = styled.button`
  padding: 8px 10px;
  font-size: 14px;
  background: red;
  border: none;
  color: white;
  cursor: pointer;
  width: ${ props  => props.width };
  box-shadow: ${ props => props.shadow ? '1px 1px 2px rgba(0,0,0,0.5)' : 'none' }
  height: 20px;
  text-align: center;

  &:disabled {
    background: lightgrey;
    color: black;
  }
`;


export const CloseButton = styled(Button)`
  position: absolute;
  right: 0;
  top: 0;
  width: 30px;
  height: 30px;
  text-align: center;
`;

export const SubmitButton = styled(Button)`
  margin: 20px auto 0;
  width: 200px;
  background: green;
  display: block;
  height: 40px;

  &:hover {
    box-shadow: none;
  }
`;