'use client';
import {Box, Card} from "@mui/material";
import {useForm} from "react-hook-form";
import {HouseworkTemplateFormValues} from "@/components/common/react-hook-form/type";
import {RHFTextField} from "@/components/common/react-hook-form/TextField";


const Page = () => {
    const {
        // register,
        handleSubmit,
        formState: { errors },
        getValues,
        control,
        setError,
        clearErrors,
    } = useForm<HouseworkTemplateFormValues>();

    const validateRules = {
        housework_title: {
            required: '家事名を入力してください',
        },
        housework_detail: {

        },
    }

    const labels = {
        housework_title: {id: "housework_title", label: "家事名"},
        housework_detail: {id: "housework_detail", label: "詳細"},
    }


    return (
        <Card className={"card_common"}>
            <div className={"title_common"}>家事テンプレート作成</div>
            <Box className={"flex flex-wrap justify-between"}>
                <form className={"form_common"} onSubmit={handleSubmit()}>
                    <RHFTextField
                        name="housework_title"
                        validateRules={validateRules.housework_title}
                        labelName={labels.housework_title.label}
                        control={control}
                    />
                </form>
            </Box>
        </Card>
    );
};

export default Page;