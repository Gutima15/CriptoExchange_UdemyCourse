import styled from "@emotion/styled";
//Style BEGIN
const ErrorDiv = styled.div`
    background-color:#b7322C;
    color: #FFFFFF;
    padding: 10px;
    font-size: 18px;
    font-family:'Poppins',sans-serif;
    font-weight: 600;
    text-align:center;
    border-radius:10px;
`;
//Style END

const Error = ({children}) => {
    return (
        <ErrorDiv>
            {children}
        </ErrorDiv>
    )
}

export default Error
