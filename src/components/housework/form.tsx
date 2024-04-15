import {SubmitHandler, useForm} from "react-hook-form";
import {HouseworkFormValues} from "@/components/common/react-hook-form/type";
import {Button, FormControl} from "@mui/material";
import {RHFTextField} from "@/components/common/react-hook-form/TextField";
import {RHFTextarea} from "@/components/common/react-hook-form/Textarea";
import {RHFDatetime} from "@/components/common/react-hook-form/DateTimeInput";
import RHFSelect from "@/components/common/react-hook-form/Select";
import {useEffect, useState} from "react";
import LoadingScreen from "@/components/common/Loading";
import '@/styles/housework/detail/form.scss';
import Family from "@utils/api/family";


const HouseworkForm = (props: {defaultData?: HouseworkFormValues}) => {
    const data = props.defaultData
    console.log('data', data)
    const {
        // register,
        handleSubmit,
        formState: { errors },
        getValues,
        control,
        setError,
        clearErrors,
    } = useForm<HouseworkFormValues>();

    const [workUsers, setWorkUsers] = useState<Record<number, string>>({});

    useEffect(() => {
        (async () => {
            const res = await Family.getBelongToUserArr('1');
            console.log(res)
            setWorkUsers(res);
        })();
    }, []);

    const validateRules = {
        title: {
            required: '家事名を入力してください',
        },
        detail: {

        },
        work_user_id: {
            required: '作業者を選択してください',
        },
        startedAt: {
            required: '開始日時を入力してください',
        },
        endedAt: {
            required: '終了日時を入力してください',
        },
    }
    const labels = {
        title: {id: "title", label: "家事名"},
        detail: {id: "detail", label: "詳細"},
        work_user_id: {id: "work_user_id", label: "作業者"},
        startedAt: {id: "startedAt", label: "開始日時"},
        endedAt: {id: "endedAt", label: "終了日時"},
    }

    const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
        let jsonTxt = JSON.stringify(data, null, 2);
        console.log(`submit: ${jsonTxt}`);
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
                    defaultValue={data.title}
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
                    defaultValue={data.detail}
                />
            </FormControl>
            {/*作業者*/}
            <FormControl className={"form_control_common"} fullWidth>
                <RHFSelect
                    name={"work_user_id"}
                    values={workUsers}
                    validateRules={validateRules}
                    labels={labels.work_user_id}
                    control={control}
                    defaultValue={data.workUser.id}
                />
            </FormControl>
            <FormControl className={"form_control_common date_area_common"}>
                {/*開始日時*/}
                <div className={"controller_date_common"}>
                    <RHFDatetime
                        name={'start_date'}
                        labels={labels.startedAt}
                        control={control}
                        validateRules={validateRules}
                        defaultValue={data.startedAt}
                    />
                </div>
                {/*終了日時*/}
                <div className={"controller_date_common"}>
                    <RHFDatetime
                        name={'end_date'}
                        labels={labels.endedAt}
                        control={control}
                        validateRules={validateRules}
                        defaultValue={data.endedAt}
                    />
                </div>
            </FormControl>
            <FormControl className={"form_control_common button_area"}>
                <Button className={"submit_button"} type={"submit"}>送信</Button>
            </FormControl>
        </form>
    );
}

export type HouseworkFormData = {
    housework_id: number;
    housework_title: string;
    housework_detail: string;
    work_user_id: number;
    start_at: string;
    end_at: string;
}

export default HouseworkForm;