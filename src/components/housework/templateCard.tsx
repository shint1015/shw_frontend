'use client';
import { Box, Button } from "@mui/material";
import "@/styles/housework/template/card.css"
import AddIcon from '@mui/icons-material/Add';
import Link from "next/link";

const templateCard = (props: {id :number, title: string, detail: string}) => {

    return (
        (props.id !== 0) ? (
            <Box className={"template_box"}>
                <div className={"template_block"}>
                    <div className={"template_column"}>家事名</div>
                    <div className={"template_content"}>{props.title}</div>
                </div>
                <div className={"template_block"}>
                    <div className={"template_column"}>詳細</div>
                    <div className={"template_content"}>{props.detail}</div>
                </div>
                <Link className={"template_block edit_btn_area"} href={`/housework/template/${props.id}`}>
                    <Button className={"common_btn"}>編集</Button>
                </Link>
            </Box>
        ) : (
            <Link className={"template_add_box"} href={"/housework/template/new"}>
                <div className={"add_btn_area"}>
                    <Button className={"flex text-button"}>
                        <AddIcon />追加
                    </Button>
                </div>
            </Link>
        )
    );
}

export default templateCard;