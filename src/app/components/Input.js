import styled from 'styled-components'

export default styled.input`
  display:inline-block;
  padding: 9px 18px;
  margin-left: 1px;
  font-style: italic;
  background: ${p => p.isActive ? '#7ec4ce;' : '#555' };
  color: ${p => p.isActive ? '#000' : '#fff' };
  outline:none;
  border: none;
  width:120px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${p => p.isActive ? '#666' : '#fff' };
  }
  @media screen and (min-width:240px) and (max-width:615px) {
    display: block;
    margin: 10px auto;
    min-width:240px;
  }

`