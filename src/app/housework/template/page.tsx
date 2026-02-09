"use client";
import {Box, Card} from "@mui/material";
import TemplateCard from "@/components/housework/templateCard";

const Page = () => {
    const data = [
        {id: 1, title: "洗濯物", detail: "洋服"},
        {id: 2, title: "トイレ掃除", detail: "トイレ"},
        {id: 3, title: "風呂掃除", detail: "風呂掃除"},
    ]


    return (
        <Card className={"card_common"}>
            <div className={"title_common"}>家事テンプレート</div>
            {/*テンプレート作成*/}
            <Box className={"flex flex-wrap justify-between"}>
                {data.map((item) => (
                    <TemplateCard key={`housework_template_${item.id}`} id={item.id} title={item.title} detail={item.detail} />
                ))}
                <TemplateCard key={`housework_template_new`} id={0} title={""} detail={""} />
            </Box>
        </Card>
    )
}


export default Page;