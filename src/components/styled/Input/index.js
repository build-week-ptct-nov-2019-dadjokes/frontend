import styled from 'styled-components';


const Input = styled.input`
  padding: 8px 10px;
  font-size: 16px;
  width: calc(100% - 20px);
  margin: 12px auto 0;
  box-sizing: border-box;
  border: 1px solid lightestgrey;
  z-index: 1;

  &.invalid {
    border: 1px solid red;
  }
`;


Input.defaultProps = {
	type: 'auto',
	min: '',
	max: '',
    placeholder: '',
    disabled: false,
    required: false,
};

export default Input;