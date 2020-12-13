import styled from 'styled-components'

export default styled.input`
  display:inline-block;
  padding: 9px 18px;
  margin-left: 1px;
  font-style: italic;
  background: #7ec4ce;
  outline:none;
  border: none;
  width:120px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #333;
  }
`