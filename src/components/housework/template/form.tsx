import {useForm} from "react-hook-form";
import {HouseworkFormValues} from "@/components/common/react-hook-form/type";
import {useContext} from "react";
import {CommonInfoContext} from "@/context/CommonContext";
import {Button, FormControl} from "@mui/material";
import {RHFTextField} from "@/components/common/react-hook-form/TextField";
import {RHFTextarea} from "@/components/common/react-hook-form/Textarea";
import {endpoint} from "@utils/api/common";
import "@/styles/commonForm.css"

const HouseworkTemplateForm = (props: {defaultData?: Record<string, any>}) => {
    const data = props.defaultData
    const {
        // register,
        handleSubmit,
        formState: {errors},
        getValues,
        control,
        setError,
        clearErrors,
    } = useForm<HouseworkFormValues>();
    const commonInfo = useContext(CommonInfoContext);

    const validateRules = {
        title: {
            required: '家事名を入力してください',
        },
    }

    const labels = {
        title: {id: "title", label: "家事名"},
        detail: {id: "detail", label: "詳細"},
    }

    const onSubmit = async (inputData: HouseworkFormValues) => {
       let postData: Record<string, any> = {
            familyId: commonInfo.familyId,
            title: inputData.title,
            detail: inputData.detail,
       }
        let method = 'POST';
        if (data?.id !== undefined) {
            postData['id'] = data.id
            method = 'PUT'
        }
        const res = await fetch(`${endpoint}/housework/template`, {
            method: method,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        });
    }


    return (
        <form className={"form_common"} onSubmit={handleSubmit(onSubmit)}>
            <FormControl margin="normal" className={"form_control_common"} fullWidth>
                {/*家事*/}
                <RHFTextField
                    name={"title"}
                    labelName={labels.title.label}
                    control={control}
                    validateRules={validateRules}
                    defaultValue={data?.title ?? ''}
                />
            </FormControl>
            {/*詳細*/}
            <FormControl margin="normal" className={"form_control_common"} fullWidth>
                <RHFTextarea
                    name={"detail"}
                    control={control}
                    validateRules={validateRules}
                    labels={labels.detail}
                    properties={{rows: 6}}
                    defaultValue={data?.detail ?? ''}
                />
            </FormControl>
            <FormControl margin="normal" className={"form_control_common button_area"} fullWidth>
                <Button className={"submit_button"} type={"submit"}>送信</Button>
            </FormControl>
        </form>
    )
}

export default HouseworkTemplateForm;