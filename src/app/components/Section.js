import styled from 'styled-components'

export default styled.div`
  font-family: 'Noto Sans', sans-serif;
  padding:20px 0;
  text-align:center;
  background:#333;
  & h2 {
    font-size: 30px;
    font-weight:700;
    font-family: 'Marck Script', sans-serif;
    a{
      margin-left: 16px;
      color:#9bb9c4;
      &:hover{
        color: #fff;
        cursor:pointer;
      }
    }
  }
`