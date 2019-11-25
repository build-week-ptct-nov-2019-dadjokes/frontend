import styled from 'styled-components';


const Label = styled.label`
  display: block;
  font-family: Helvetica;
  font-size: 13px;
  color: #000;
  margin: 10px 0 0;
`;


Label.defaultProps = {
	for: '',
};

export default Label;