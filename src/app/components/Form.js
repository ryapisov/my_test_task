import styled from 'styled-components'

export default styled.form`
  margin-bottom:22px;
  & span {
    padding: 1px 40px 1px 10px;
    display:inline-block;
    width:40px;
  }
  @media screen and (min-width:240px) and (max-width:615px) {
    margin-bottom:40px;
    & span {
      display: block;
      margin: 10px auto;
      min-width:240px;
    }
  }
`