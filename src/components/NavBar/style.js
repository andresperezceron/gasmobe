import styled from 'styled-components'
import {Link} from "react-router-dom";

export const Ul = styled.ul`
  background-color: #a32330;
  list-style-type: none;
  overflow: hidden;
  margin: 0;
  padding: 0;
`;

export const Li = styled.li`
  font: 24px "Century Gothic", Futura, sans-serif;
  float: left;
  padding: 15px 0;
  text-align: center;
  text-decoration: none;
`;

export const A = styled(Link)`
  color: white;
  padding: 15px 60px 12px;
  text-decoration: none;
  :hover{border-bottom: 3px solid #41c9f8; color: #41c9f8; background-color: #ac313d}
`;