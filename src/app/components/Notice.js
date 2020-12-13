import styled from 'styled-components'

export default styled.div`
  display: ${(p) => p.display ? 'block' : 'none'};
  padding: 14px 0;
  max-width: 540px;
  margin: 0 auto;
  margin-bottom: 1.0rem;
  background-color: rgba(153, 66, 51, 0.452);
`