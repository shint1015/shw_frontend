"use client"
import {Card} from "@mui/material";
import "@/styles/housework/detail/form.scss"
import "@/styles/common.scss"
import HouseworkForm from "@/components/housework/form";

const Page = () => {
    return (
        <Card className={"card_common"}>
            <h1 className={"title_common"}>家事作成</h1>
            <HouseworkForm
                // defaultData={{
                //     housework_title: "aaa",
                //     housework_detail: "bbb",
                //     work_user_id: 1,
                //     start_at: new Date("2023-11-01T17:00"),
                //     end_at: new Date("2023-11-01T17:30"),
                // }}
            />
        </Card>
    )
}

export default Page;