import styled from 'styled-components'

export default styled.button`
  display:inline-block;
  outline:none;
  padding: 9px 18px;
  margin-right: 2px;
  border: 1px solid #222;
  font-style: italic;
  background:${p => p.isActive ? '#7ec4ce' : '#7ec4ce' };
  color:${p => p.isActive ? '#d4e6e9' : '#333' };
  img{
    width: 18px;
    margin-left:10px;
  }
  &:hover{
    background:${p => p.isActive ? '#7ec4ce' : '#218ea1' };
  }
`