'use client';
import {Box, Card} from "@mui/material";
import {useRouter} from "next/navigation";


const Page = ({params}: {params: {template_id: string}}) => {
    const router = useRouter()

    return (
        <Card className={"card_common"}>
            <div className={"title_common"}>家事テンプレート編集</div>
            <Box className={"flex flex-wrap justify-between"}>
                edit <br />
                template_id: {params.template_id}
            </Box>
        </Card>
    );
};

export default Page;