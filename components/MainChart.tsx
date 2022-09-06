import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import tw from "twin.macro";
import styled from "@emotion/styled";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

interface Props {}

ChartJS.register(ArcElement, Tooltip, Legend);

const MainChart: NextPage<Props> = () => {
    const [value1, setValue1] = useState<number>(5874);
    const [value2, setValue2] = useState<number>(5874);

    useEffect(() => {
        const interval = setInterval(() => {
            setValue1(Math.floor(Math.random() * 10000));
            setValue2(Math.floor(Math.random() * 10000));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const Fomatnumber = (value: number) => {
        return new Intl.NumberFormat("th-TH").format(value);
    };

    const data = {
        labels: ["ภาคปก", "ภาคเป"],
        datasets: [
            {
                label: "# of Votes",
                data: [value1, value2],
                backgroundColor: [
                    "#FFFFFF",
                    "#FFFFFF",
                ],
                borderColor: ["#1F2937", "#1F2937"],
                borderWidth: 5,
            },
        ],
    };

    return (
        <>
            <div className="flex flex-col">
                <div className="flex flex-col gap-3 md:gap-10 md:flex-row justify-center items-center">
                    <div className="max-w-[13rem] relative">
                        <Doughnut
                            options={{
                                plugins: {
                                    legend: {
                                        display: false,
                                    },
                                },
                            }}
                            data={data}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="stats shadow border-4 border-black">
                            <div className="stat">
                                <div className="stat-figure">
                                    <AccountBalanceWalletIcon />
                                </div>
                                <div className="stat-title font-bold">ภาคปก</div>
                                <div className="stat-value">
                                    {Fomatnumber(value1)}
                                </div>
                            </div>
                        </div>
                        <div className="stats shadow border-4 border-black">
                            <div className="stat">
                                <div className="stat-figure">
                                    <AccountBalanceWalletIcon />
                                </div>
                                <div className="stat-title font-bold">ภาคเป</div>
                                <div className="stat-value">
                                    {Fomatnumber(value2)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainChart;
