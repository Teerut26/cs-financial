import styled from "@emotion/styled";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import tw from "twin.macro";

interface Props {}

const Button = styled.button(
    tw`px-3 py-1 border-4 border-black rounded-xl font-bold`
);

const Navbar: NextPage<Props> = () => {
    return (
        <div className="flex gap-2">
            <Link href="/">
                <Button>หน้าหลัก</Button>
            </Link>
            <Link href="/transaction">
                <Button>รายการธุรกรรม</Button>
            </Link>
        </div>
    );
};

export default Navbar;
