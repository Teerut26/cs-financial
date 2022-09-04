import { NextPage } from "next";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import tw from "twin.macro"
import styled from "@emotion/styled";

interface Props {}

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ["ภาคปก", "ภาคเป"],
    datasets: [
        {
            label: "# of Votes",
            data: [1987, 2013],
            backgroundColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
            borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
            borderWidth: 1,
        },
    ],
};

const ContainerCenter = styled.div(tw`absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center`)

const MainChart: NextPage<Props> = () => {
    return (
        <ContainerCenter>
            <div className="flex flex-col">
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="max-w-[13rem] relative">
                        <Doughnut data={data} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="p-3 border">ภาคปก</div>
                        <div className="p-3 border">ภาคเป</div>
                    </div>
                </div>
            </div>
        </ContainerCenter>
    );
};

export default MainChart;
