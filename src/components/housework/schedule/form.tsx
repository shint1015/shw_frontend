import {SubmitHandler, useForm} from "react-hook-form";
import {HouseworkScheduleFormValues} from "@/components/common/react-hook-form/type";
import {Button, FormControl, Select} from "@mui/material";
import {RHFTextField} from "@/components/common/react-hook-form/TextField";
import {RHFTextarea} from "@/components/common/react-hook-form/Textarea";
import {RHFDatetime} from "@/components/common/react-hook-form/DateTimeInput";
import RHFSelect from "@/components/common/react-hook-form/Select";
import {useContext, useEffect, useState} from "react";
import "@/styles/commonForm.css";
import {endpoint} from "@utils/api/common";
import {CommonInfoContext} from "@/context/CommonContext";


const HouseworkScheduleForm = (props: {defaultData?: Record<string, any>}) => {
    const template = [
        {id: 1, title: "ゴミ出し", description: "燃えるゴミを出す"},
        {id: 2, title: "掃除", description: "部屋を掃除する"},
        {id: 3, title: "洗濯", description: "洗濯物を洗う"},
    ]
    const data = props.defaultData
    const {
        // register,
        handleSubmit,
        formState: { errors },
        getValues,
        setValue,
        control,
        setError,
        clearErrors,
    } = useForm<HouseworkScheduleFormValues>();
    const commonInfo = useContext(CommonInfoContext);


    const validateRules = {
        title: {
            required: '家事名を入力してください',
        },
    }
    const labels = {
        title: {id: "title", label: "家事名"},
        detail: {id: "detail", label: "詳細"},
        is_active: {id: "is_active", label: "有効"},
        work_user_id: {id: "work_user_id", label: "担当"},
        schedule_started_at: {id: "schedule_started_at", label: "予定開始日時"},
        schedule_ended_at: {id: "schedule_ended_at", label: "予定終了日時"},
        remind_minute_before: {id: "remind_minute_before", label: "リマインド（分前）"},
        schedule_repeat_type: {id: "schedule_repeat_type", label: "繰り返しタイプ"},
        weekdays: {id: "weekdays", label: "曜日"},
        week_of_month: {id: "week_of_month", label: "月の週"},
        weekday_in_month: {id: "weekday_in_month", label: "月の曜日"},
    }

    const onSubmit: SubmitHandler<Inputs> = async (inputData: Inputs) => {
        let postData: Record<string, any> = {
            familyId: commonInfo.family_id,
            title: inputData.title,
            detail: inputData.detail,
            scheduleStartedAt: inputData.scheduleStartedAt.unix(),
            scheduleEndedAt: inputData.scheduleEndedAt.unix(),
            workUser: {
                id: inputData.work_user_id,
            },
        }
        let method = 'POST';
        if (data?.id !== undefined) {
            postData['id'] = data.id
            method = 'PUT'
        }
        const res = await fetch(`${endpoint}/housework/schedules`, {
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
    const reflectTemplateToForm = (templateId: number) => {
        const selectedTemplate = template.find((t) => t.id === templateId);
        if (selectedTemplate) {
            // フォームの値をテンプレートの内容に更新
            // 例えば、タイトルと詳細を更新する場合
            setValue('title', selectedTemplate.title);
            setValue('detail', selectedTemplate.description);
        }
    }

    return (
        <form className={"form_common"} onSubmit={handleSubmit(onSubmit)}>
            {/*template*/}
            <Select
                onChange={(e)=>reflectTemplateToForm(Number(e.target.value))}
                className={"template_select_common"}
            >
                {template.map((item) => (
                    <option key={`template_${item.id}`} value={item.id}>{item.title}</option>
                ))}
                {/*登録されている家事のテンプレートを選択できるようにする。選択すると、タイトルと詳細に反映される。*/}
            </Select>
            {/*家事*/}
            <FormControl className={"form_control_common"} fullWidth>
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
                    values={commonInfo?.work_users ?? []}
                    validateRules={validateRules}
                    labels={labels.work_user_id}
                    control={control}
                    defaultValue={data?.work_user?.id ?? ''}
                />
            </FormControl>
            <FormControl className={"form_control_common date_area_common"}>
                {/*予定開始日時*/}
                <div className={"controller_date_common"}>
                    <RHFDatetime
                        name={'schedule_started_at'}
                        labels={labels.schedule_started_at}
                        control={control}
                        validateRules={validateRules}
                        defaultValue={data?.schedule_started_at ?? null}
                    />
                </div>
                {/*予定終了日時*/}
                <div className={"controller_date_common"}>
                    <RHFDatetime
                        name={'schedule_ended_at'}
                        labels={labels.schedule_ended_at}
                        control={control}
                        validateRules={validateRules}
                        defaultValue={data?.schedule_ended_at ?? null}
                    />
                </div>
            </FormControl>
            <FormControl>
            {/*リマインド*/}
                <RHFSelect
                    name={"remind_minute_before"}
                    values={{0: "なし", 5: "5分前", 10: "10分前", 30: "30分前", 60: "1時間前"}}
                    validateRules={validateRules}
                    labels={labels.remind_minute_before}
                    control={control}
                    defaultValue={data?.remind_minute_before ?? 0}
                />
            </FormControl>
            <FormControl>
                {/*繰り返しタイプ*/}
                <RHFSelect
                    name={"schedule_repeat_type"}
                    values={{0: "なし", 1: "毎日", 2: "毎週", 3: "毎月"}}
                    validateRules={validateRules}
                    labels={labels.schedule_repeat_type}
                    control={control}
                    defaultValue={data?.schedule_repeat_type ?? 'none'}
                />
            </FormControl>
            { getValues("schedule_repeat_type").toString() === 'weekly' ? (
                <FormControl>
                    {/*曜日*/}
                    <RHFSelect
                        name={"weekdays"}
                        values={{1: "月", 2: "火", 3: "水", 4: "木", 5: "金", 6: "土", 0: "日"}}
                        validateRules={validateRules}
                        labels={labels.weekdays}
                        control={control}
                        defaultValue={data?.weekdays ?? ''}
                    />
                </FormControl>
            ) : (
                <FormControl>
                    {/*月の週*/}
                    <RHFSelect
                        name={"week_of_month"}
                        values={{1: "第1週", 2: "第2週", 3: "第3週", 4: "第4週", 5: "第5週"}}
                        validateRules={validateRules}
                        labels={labels.week_of_month}
                        control={control}
                        defaultValue={data?.week_of_month ?? ''}
                    />
                    {/*月の曜日*/}
                    <RHFSelect
                        name={"weekday_in_month"}
                        values={{1: "月", 2: "火", 3: "水", 4: "木", 5: "金", 6: "土", 0: "日"}}
                        validateRules={validateRules}
                        labels={labels.weekday_in_month}
                        control={control}
                        defaultValue={data?.weekday_in_month ?? ''}
                    />
                </FormControl>
            )}
            <FormControl className={"form_control_common button_area"}>
                <Button className={"submit_button"} type={"submit"}>送信</Button>
            </FormControl>
        </form>
    );
}

export default HouseworkScheduleForm;
