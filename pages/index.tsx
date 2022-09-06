import styled from "@emotion/styled";
import type { NextPage } from "next";
import tw from "twin.macro";
import MainChart from "../components/MainChart";
import Navbar from "../components/Navbar";
import WithNavbar from "../layouts/WithNavbar";

const Container = styled.div(
    tw`absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center`
);

const Home: NextPage = () => {
    return (
        <Container>
            <WithNavbar>
                <MainChart />
            </WithNavbar>
        </Container>
    );
};

export default Home;
