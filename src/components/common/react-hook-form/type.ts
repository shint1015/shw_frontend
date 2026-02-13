import {Dayjs} from "dayjs";

export type HouseworkFormValues = {
    id: string
    family_id: string
    title: string
    detail: string
    work_user: Record<string, any>
    started_at: Dayjs | null
    ended_at: Dayjs | null
}

enum ScheduleRepeatType {
    Unspecified,
    Weekly,
    Monthly,
}

export type HouseworkScheduleFormValues = {
    id: string
    is_active: boolean
    family_id: string
    title: string
    detail: string
    asignee: Record<string, any>
    schedule_started_at: Dayjs | null
    schedule_ended_at: Dayjs | null
    remind_minute_before: number | null
    schedule_repeat_type: ScheduleRepeatType
    weekdays: number[] | null
    week_of_month: number[] | null
    weekday_in_month: number[] | null
}

export type HouseworkTemplateFormValues = {
    housework_title: string
    housework_detail: string
}