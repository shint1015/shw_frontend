import {SubmitHandler, useForm} from "react-hook-form";
import {HouseworkFormValues} from "@/components/common/react-hook-form/type";
import {Button, FormControl} from "@mui/material";
import {RHFTextField} from "@/components/common/react-hook-form/TextField";
import {RHFTextarea} from "@/components/common/react-hook-form/Textarea";
import {RHFDatetime} from "@/components/common/react-hook-form/DateTimeInput";
import RHFSelect from "@/components/common/react-hook-form/Select";
import {useContext, useEffect, useState} from "react";
import "@/styles/commonForm.css";
import Family from "@utils/api/family";
import {endpoint} from "@utils/api/common";
import {CommonInfoContext} from "@/context/CommonContext";


const HouseworkForm = (props: {defaultData?: Record<string, any>}) => {
    const data = props.defaultData
    const {
        // register,
        handleSubmit,
        formState: { errors },
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
        detail: {

        },
        work_user_id: {
            required: '担当を選択してください',
        },
        started_at: {
            required: '開始日時を入力してください',
        },
        ended_at: {
            required: '終了日時を入力してください',
        },
    }
    const labels = {
        title: {id: "title", label: "家事名"},
        detail: {id: "detail", label: "詳細"},
        work_user_id: {id: "work_user_id", label: "担当"},
        started_at: {id: "started_at", label: "開始日時"},
        ended_at: {id: "ended_at", label: "終了日時"},
    }

    const onSubmit: SubmitHandler<Inputs> = async (inputData: Inputs) => {
        let postData: Record<string, any> = {
            familyId: commonInfo.family_id,
            title: inputData.title,
            detail: inputData.detail,
            startedAt: inputData.started_at.unix(),
            endedAt: inputData.ended_at.unix(),
            workUser: {
                id: inputData.work_user_id,
            },
            status: inputData.status,
        }
        let method = 'POST';
        if (data?.id !== undefined) {
            postData['id'] = data.id
            method = 'PUT'
        }
        const res = await fetch(`${endpoint}/housework`, {
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
            <FormControl className={"form_control_common"} fullWidth>
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
            <FormControl className={"form_control_common"} fullWidth>
                <RHFTextarea
                    name={"detail"}
                    control={control}
                    validateRules={validateRules}
                    labels={labels.detail}
                    properties={{rows: 4}}
                    defaultValue={data?.detail ?? ''}
                />
            </FormControl>
            {/*担当*/}
            <FormControl className={"form_control_common"} fullWidth>
                <RHFSelect
                    name={"work_user_id"}
                    values={commonInfo?.work_users}
                    validateRules={validateRules}
                    labels={labels.work_user_id}
                    control={control}
                    defaultValue={data?.workUser?.id ?? ''}
                />
            </FormControl>
            <FormControl className={"form_control_common date_area_common"}>
                {/*開始日時*/}
                <div className={"controller_date_common"}>
                    <RHFDatetime
                        name={'started_at'}
                        labels={labels.started_at}
                        control={control}
                        validateRules={validateRules}
                        defaultValue={data?.started_at ?? null}
                    />
                </div>
                {/*終了日時*/}
                <div className={"controller_date_common"}>
                    <RHFDatetime
                        name={'ended_at'}
                        labels={labels.ended_at}
                        control={control}
                        validateRules={validateRules}
                        defaultValue={data?.ended_at ?? null}
                    />
                </div>
            </FormControl>
            <FormControl className={"form_control_common button_area"}>
                <Button className={"submit_button"} type={"submit"}>送信</Button>
            </FormControl>
        </form>
    );
}

export default HouseworkForm;
