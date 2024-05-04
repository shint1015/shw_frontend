'use client';
import {Box, Card} from "@mui/material";
import {useForm} from "react-hook-form";
import {HouseworkTemplateFormValues} from "@/components/common/react-hook-form/type";
import {RHFTextField} from "@/components/common/react-hook-form/TextField";
import HouseworkForm from "@/components/housework/form";
import HouseworkTemplateForm from "@/components/housework/template/form";
import {Suspense} from "react";
import LoadingScreen from "@/components/common/Loading";


const Page = () => {

    const createHouseworkTemplateForm = () => {
        return <HouseworkTemplateForm />;
    }
    return (
        <Card className={"card_common"}>
            <div className={"title_common"}>家事テンプレート作成</div>
            <Box className={"flex flex-wrap justify-between"}>
                <Suspense fallback={<LoadingScreen />}>
                    {createHouseworkTemplateForm()}
                </Suspense>
            </Box>
        </Card>
    );
};

export default Page;