import styled from 'styled-components'

export default function Button(props) {
  return <StyledButton {...props} />
}

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px;
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.primary};
  }
  &:active {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
  }
`
