import styled from "@emotion/styled";
import { NextPage } from "next";
import React from "react";
import tw from "twin.macro";
import WithNavbar from "../layouts/WithNavbar";

interface Props {}

const Container = styled.div(
    tw`absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center`
);

const TransactionComponent = styled.div(
    tw`w-[20rem] border-4 border-black rounded-lg p-2`
);

const Transaction: NextPage<Props> = () => {
    return (
        <Container>
            <WithNavbar>
                <div className="flex flex-col gap-2 overflow-auto max-h-[30rem]">
                    {[...new Array(10)].map((_, index) => (
                        <TransactionComponent>
                            <div className="flex justify-between w-full">
                                <div>รายการเงินเข้า</div>
                                <div>22:17 น.</div>
                            </div>
                            <div className="flex gap-1">
                                <div className="text-lg font-bold">200</div>
                                <div>บาท</div>
                            </div>
                        </TransactionComponent>
                    ))}
                </div>
            </WithNavbar>
        </Container>
    );
};

export default Transaction;
