"use client"
import {Button, Card, FormControl, Input, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {HouseworkFormValues} from "@/components/common/react-hook-form/type";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';


import "@/styles/housework/detail/form.scss"
import "@/styles/common.scss"
import {RHFTextField} from "@/components/common/react-hook-form/TextField";
import {RHFTextarea} from "@/components/common/react-hook-form/Textarea";

const Page = () => {
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
        <Card className={"card_common"}>
            <h1 className={"title_common"}>家事作成</h1>
            <form className={"form_common"} onSubmit={handleSubmit(onSubmit)}>
                <FormControl className={"form_control_common"} fullWidth>
                    {/*家事*/}
                    <RHFTextField
                        name={"housework_title"}
                        labelName={labels.housework_title.label}
                        control={control}
                        validateRules={validateRules}
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
                    />
                </FormControl>
                {/*作業者*/}
                <FormControl className={"form_control_common"} fullWidth>
                    <Controller
                        name={"work_user_id"}
                        control={control}
                        rules={validateRules}
                        render ={({ field, fieldState }) => (
                            <FormControl error={fieldState.invalid}>
                                <InputLabel id={labels.work_user_id.id}>{labels.work_user_id.label}</InputLabel>
                                <Select
                                    labelId={labels.work_user_id.id}
                                    {...field}>
                                    {Object.keys(work_users).map((key) => (
                                        <MenuItem key={key} value={key}>
                                            {work_users[key]}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        )}
                    >
                    </Controller>
                </FormControl>
                <FormControl className={"form_control_common date_area_common"}>
                    {/*開始日時*/}
                    <div className={"controller_date_common"}>
                        <Controller
                            name={"start_date"}
                            control={control}
                            rules={validateRules}
                            render={({field, fieldState}) => (
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DateTimePicker
                                        className={"date_time_picker_common"}
                                        label={labels.start_at.label}
                                        error={fieldState.invalid}
                                        helperText={fieldState.error?.message}
                                        viewRenderers={{
                                            hours: renderTimeViewClock,
                                            minutes: renderTimeViewClock,
                                            seconds: renderTimeViewClock
                                        }}
                                        {...field}
                                    />
                                </LocalizationProvider>
                            )}
                        />
                    </div>
                    {/*終了日時*/}
                    <div className={"controller_date_common"}>
                        <Controller
                            name={"end_date"}
                            control={control}
                            rules={validateRules}
                            render={({field, fieldState}) => (
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DateTimePicker
                                        className={"date_time_picker_common"}
                                        label={labels.end_at.label}
                                        error={fieldState.invalid}
                                        helperText={fieldState.error?.message}
                                        viewRenderers={{
                                            hours: renderTimeViewClock,
                                            minutes: renderTimeViewClock,
                                            seconds: renderTimeViewClock
                                        }}
                                        {...field}
                                    />
                                </LocalizationProvider>
                            )}
                        />
                    </div>
                </FormControl>
                <FormControl className={"form_control_common button_area"}>
                    <Button className={"submit_button"} type={"submit"}>送信</Button>
                </FormControl>

            </form>

        </Card>
    )
}

export default Page;