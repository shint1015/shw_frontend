import {SubmitHandler, useForm} from "react-hook-form";
import {HouseworkFormValues} from "@/components/common/react-hook-form/type";
import {Button, FormControl} from "@mui/material";
import {RHFTextField} from "@/components/common/react-hook-form/TextField";
import {RHFTextarea} from "@/components/common/react-hook-form/Textarea";
import {RHFDatetime} from "@/components/common/react-hook-form/DateTimeInput";
import RHFSelect from "@/components/common/react-hook-form/Select";


const HouseworkForm = (props: {defaultData?: HouseworkFormValues}) => {
    let defaultData = {}
    if (props.defaultData) {
        defaultData = props.defaultData;
    }
    const {
        // register,
        handleSubmit,
        formState: { errors },
        getValues,
        control,
        setError,
        clearErrors,
    } = useForm<HouseworkFormValues>();

    const validateRules = {
        housework_title: {
            required: '家事名を入力してください',
        },
        housework_detail: {

        },
        work_user_id: {
            required: '作業者を選択してください',
        },
        start_at: {
            required: '開始日時を入力してください',
        },
        end_at: {
            required: '終了日時を入力してください',
        },
    }
    const labels = {
        housework_title: {id: "housework_title", label: "家事名"},
        housework_detail: {id: "housework_detail", label: "詳細"},
        work_user_id: {id: "work_user_id", label: "作業者"},
        start_at: {id: "start_at", label: "開始日時"},
        end_at: {id: "end_at", label: "終了日時"},
    }
    const work_users = {
        1: "ユーザー1",
        2: "ユーザー2",
        3: "ユーザー3",
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
                    name={"housework_title"}
                    labelName={labels.housework_title.label}
                    control={control}
                    validateRules={validateRules}
                    defaultValue={defaultData.housework_title ?? ''}
                />
            </FormControl>
            {/*詳細*/}
            <FormControl className={"form_control_common"} fullWidth>
                <RHFTextarea
                    name={"housework_detail"}
                    control={control}
                    validateRules={validateRules}
                    labels={labels.housework_detail}
                    properties={{rows: 4}}
                    defaultValue={defaultData.housework_detail ?? ''}
                />
            </FormControl>
            {/*作業者*/}
            <FormControl className={"form_control_common"} fullWidth>
                <RHFSelect
                    name={"work_user_id"}
                    values={work_users}
                    validateRules={validateRules}
                    labels={labels.work_user_id}
                    control={control}
                    defaultValue={defaultData.work_user_id ?? ''}
                />
            </FormControl>
            <FormControl className={"form_control_common date_area_common"}>
                {/*開始日時*/}
                <div className={"controller_date_common"}>
                    <RHFDatetime
                        name={'start_date'}
                        labels={labels.start_at}
                        control={control}
                        validateRules={validateRules}
                        defaultValue={defaultData.start_at ?? ''}
                    />
                </div>
                {/*終了日時*/}
                <div className={"controller_date_common"}>
                    <RHFDatetime
                        name={'end_date'}
                        labels={labels.end_at}
                        control={control}
                        validateRules={validateRules}
                        defaultValue={defaultData.end_at ?? ''}
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