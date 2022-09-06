import { NextPage } from "next";
import React from "react";
import Navbar from "../components/Navbar";

interface Props {
    children: React.ReactNode;
}

const WithNavbar: NextPage<Props> = ({ children }) => {
    return (
        <div className="flex flex-col gap-5 items-center">
            <Navbar />
            {children}
        </div>
    );
};

export default WithNavbar;
