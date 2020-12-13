import styled from 'styled-components'

export const Input = styled.input`
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

export const Form = styled.form`
  height:50px;
  & span {
    padding: 1px 40px 1px 10px;
    display:inline-block;
    width:40px;
  }
`

export const Button = styled.button`
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

export const Notice = styled.div`
  display: ${(p) => p.display ? 'block' : 'none'};
  padding: 14px 0;
  max-width: 540px;
  margin: 0 auto;
  margin-bottom: 1.0rem;
  background-color: rgba(153, 66, 51, 0.452);
`


/* Mobile
---------------------------------- */
/* @media screen and (min-width:240px) and (max-width:615px) {
	
	input, button{
	display: block;
	margin: 10px auto;
}
	
	input{min-width:220px;}
	
} */