import styled from "styled-components";
const CustomDiv = styled.div`
    display: flex;
    margin: 5vh auto;
    flex-direction: column;
    text-align: center;

`
const MyH1 = styled.h1`
    color: lightcoral;
    text-align: center;
    font-family: Impact;
    margin: 2vh auto;
    text-shadow:
            -1px -1px 0 white,
            1px -1px 0 white,
            -1px 1px 0 white,
            1px 1px 0 white;
`
const MyP = styled.p`
    color: white;
    font-family: Impact;
    text-shadow:
            -1px -1px 0 lightcoral,
            1px -1px 0 lightcoral,
            -1px 1px 0 lightcoral,
            1px 1px 0 lightcoral;
`
const MyA = styled.a`
    color: yellowgreen;
`

export default function Footer() {
    return (
        <CustomDiv>
            <MyH1>
                Goodbye!
            </MyH1>
            <MyP>
                All rights reserved by Artemios Kayas &copy;
            </MyP>
            <MyP>
                Thank you to the <MyA href={"https://www.artic.edu"}>art institue of chicago</MyA> for their resources.
            </MyP>
        </CustomDiv>
    );
}