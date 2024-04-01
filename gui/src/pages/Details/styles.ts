import styled from 'styled-components';

export const Container = styled.div`
    width: 98%;
    max-width: 1336px;
    margin: 0 auto;
`;

export const Grid = styled.div`
    padding: 40px 0;
    
    display: grid;    
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
    grid-column-gap: 20px;

    @media (min-width: 69em) {
        grid-template-columns: 1fr 1fr;
    }

    h1 {
        font-size: 2em;
    }

    p {
        margin: 10px 0;
    }
`;

export const Product = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    gap: 10px;

    input {
        width: 40px;
        height: 35px;
        text-align: center;
    }
`;