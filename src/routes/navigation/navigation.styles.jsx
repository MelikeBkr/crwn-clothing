import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const NavigationContainer = styled.div`
height: 50px;
width: 100%;
justify-content: space-between;
margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
height: 100%;
width: 70px;
padding: 25px;
`;

export const NavLinks = styled.div`
position:absolute;
width: 100px;
height: 20px;
border-radius: 100px;
top: 10px;
right: 170px;
margin: 1px;
box-sizing: border-box;
`;

export const NavLink = styled(Link)`
padding: 200px 25px;
cursor:pointer;
white-space:nowrap;
overflow:hidden;
text-overflow:ellipsis;
`;

  