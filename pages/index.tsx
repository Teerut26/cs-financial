import type { NextPage } from "next";
import MainChart from "../components/MainChart";
import Container from "../components/styled-components/Container";
import WithNavbar from "../layouts/WithNavbar";

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
