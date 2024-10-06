import styled from "styled-components";

const MyH1 = styled.h1`
    color: lightcoral;
    text-align: center;
    font-family: Impact;
    margin: 5vh auto;
    text-shadow:
            -1px -1px 0 white,
            1px -1px 0 white,
            -1px 1px 0 white,
            1px 1px 0 white;
`

export default function MyHeader() {
    return (
        <MyH1>
            The Amazing Art from the Art Institute of Chicago
        </MyH1>
    );
}