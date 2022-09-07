import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import Button from "./styled-components/Button";

interface Props {}

const Navbar: NextPage<Props> = () => {
    return (
        <div className="flex gap-2">
            <Link href="/">
                <Button>หน้าหลัก</Button>
            </Link>
            <Link href="/transaction">
                <Button>รายการธุรกรรม</Button>
            </Link>
            <Link href="/sign-in">
                <Button>Sign In</Button>
            </Link>
        </div>
    );
};

export default Navbar;
