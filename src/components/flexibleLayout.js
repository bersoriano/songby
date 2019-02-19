import styled from 'styled-components';

const FlexibleLayout = styled.div`
    display: flex;
    padding: 10px;
    ${props => props.row && 'flex-direction:row'};
    ${props => props.column && 'flex-direction:column'};
`;

export default FlexibleLayout;