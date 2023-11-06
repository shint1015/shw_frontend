import {Card} from "@mui/material";


const Page = ({params}: {params: {housework_id: string}}) => {
    return (
        <div>
            <Card>
                params: {params.housework_id}
            </Card>
        </div>
    )
}

export default Page;

