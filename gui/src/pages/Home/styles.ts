import styled from 'styled-components';

export const Container = styled.div`
    width: 98%;
    max-width: 1336px;
    margin: 0 auto;
`;

export const Pagination = styled.ul`
    padding: 20px 0;

    list-style: none;

    display: flex;
    justify-content: center;
    gap: 10px;

    li {
        border: 1px solid #666;
        width: 40px;
        height: 40px;
        
        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;

        &.active {
            background-color: #666;
            color: #fff;
        }
    }
`;

export const Grid = styled.div`
    padding: 40px 0;
    display: grid;    
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-row-gap: 20px;
    grid-column-gap: 20px;
`;

export const Product = styled.div`
    h1, p {
        color: #000;
    }

    p {
        margin: 5px 0;
        color: #666;
    }

    button {
        color: #fff;
    }
`;