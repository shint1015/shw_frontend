"use client"
import {Card} from "@mui/material";
import "@/styles/housework/detail/form.scss"
import "@/styles/common.scss"
import HouseworkForm from "@/components/housework/form";

const Page = () => {
    return (
        <Card className={"card_common"}>
            <h1 className={"title_common"}>家事作成</h1>
            <HouseworkForm/>
        </Card>
    )
}

export default Page;