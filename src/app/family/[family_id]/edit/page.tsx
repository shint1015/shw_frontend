import {Card} from "@mui/material";

const Page = ({params}: {params: {family_id: string}}) => {
    return (
        <Card className={"card_common"}>
            edit page <br />
            family_id: {params.family_id}
        </Card>
    );
}

export default Page;