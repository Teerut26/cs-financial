import { NextPage } from "next";
import React from "react";
import Button from "../components/styled-components/Button";
import Container from "../components/styled-components/Container";
import LoginIcon from "@mui/icons-material/Login";

interface Props {}

const SignIn: NextPage<Props> = () => {
    return (
        <>
            <Container>
                <div className="flex flex-col gap-2 max-w-xl">
                    <Button className="flex gap-2">
                        <LoginIcon />
                        Sign With Google
                    </Button>
                </div>
            </Container>
        </>
    );
};

export default SignIn;
