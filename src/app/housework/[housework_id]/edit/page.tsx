import {Card, Box} from "@mui/material";


const Page = ({params}: {params: {housework_id: string}}) => {
    return (
        <Card className={"card_common"}>
            <div className={"title_common"}>家事編集</div>
            <Box className={"flex flex-wrap justify-between"}>
                edit <br />
                housework_id: {params.housework_id}
            </Box>
        </Card>
    );
}

export default Page;