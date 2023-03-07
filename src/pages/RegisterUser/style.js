import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100vh;
`;

export const ContentLeft = styled.div`
    width: 50%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.categoryContainer};

    display: flex;
    justify-content: center;
    align-items: center;

    text-align: left;
    color: #ffffff;

    div {
        padding: 0 60px;

        h1 {
            color: var(--branco);
            font-size: 2.5rem;
            margin-bottom: 28px;
        }

        p {
            color: var(--brando-escuro);
            font-size: 1.5rem;
        }
    }

    @media screen and (max-width: 800px) {
        display: none;
    }
`;

export const ContentRight = styled.div`
    width: 50%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.background};

    display: flex;
    flex-direction: column;
    align-items: center;

    form {
        flex: 1;
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;

        padding: 0 15px;

        max-width: 550px;
        width: 100%;

        > p {
            margin-top: 10px;
            font-size: 13px;
            color: ${({ theme }) => theme.colors.textBody};

            a {
                color: ${({ theme }) => theme.colors.textTitle};
                text-decoration: underline;
            }
        }

        h2 {
            color: #7A46DB;
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 1rem;

            display: none;
        }

    }

    button {
        height: 40px;
        grid-area: botao;
    }

    @media screen and (max-width: 800px) {
        width: 100%;
        position: relative;

        form {
            max-width: 100%;

            > p {
                display: none;
            }

            h2 {
                display: block;
            }
        }

    }
`;

 export const BoxInputs = styled.div`
    max-width: inherit;
    width: 100%;
    margin-bottom: 1rem;


    display: grid;
    gap: 18px 10px;
    grid-template-areas:'nome sobrenome'
                        'cpf whats'
                        'email email'
                        'senha senha'
                        'confirmar confirmar';

    > p {
        font-size: 13px;
    }

    label#box_nome {
        grid-area: nome;
    }

    label#box_sobrenome {
        grid-area: sobrenome;
    }

    label#box_cpf {
        grid-area: cpf;
    }

    label#box_whatsapp {
        grid-area: whats;
    }

    label#box_email {
        grid-area: email;
    }

    label#box_senha {
        grid-area: senha;
    }

    label#box_confirmar {
        grid-area: confirmar;
    }
 `;

 export const Footer = styled.footer`
    width: 100%;
    height: 70px;
    background-color: #7A46DB;

    display: none;
    justify-content: center;
    align-items: center;

    color: #FFFFFF;  

    > p a {
        text-decoration: underline;
    }

    @media screen and (max-width: 800px) {
        display: flex;
    }
 `;

 export const BoxError = styled.div`
    width: 100%;
    background-color: #FFE1E1;
    padding: 10px 0;

    margin-bottom: 1rem;

    font-size: 13px;

    color: ${({ theme }) => theme.colors.red};
    border-radius: 5px;
    text-align: center;
 `;

export const Button = styled.button`
    width: 100%;
    height: 40px;
    grid-area: botao;
    background-color: var(--verde);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-weight: 700;
    color: #FFFFFF;

    position: relative;

    #box_disabled {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.3);

        width: 100%;
        height: 100%;

        z-index: 2;
    }

    &:disabled {
        cursor: default;
        filter: brightness(0.7);
    }
`;