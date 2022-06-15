import styled from 'styled-components';

    export const LoginBtn = styled.button`
        background: var(--colorPrimary);
        color: var(--background);
        border: none;
        border-radius: 10px;
        padding: 10px;
        justify-self: flex-end;
        margin-right: 40px;
        font-size: 1.5rem;
        font-weight: bold;
        &:hover {
            cursor: pointer;
            opacity: 0.7;
        }
        @media (max-width: 451px) {
            justify-self: center;
            margin-right: 0;
        }
    `;