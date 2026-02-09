import {Dayjs} from "dayjs";

export type HouseworkFormValues = {
    id: string
    familyId: string
    title: string
    detail: string
    workUser: Record<string, any>
    startedAt: Dayjs | null
    endedAt: Dayjs | null
}

enum ScheduleRepeatType {
    Unspecified,
    Weekly,
    Monthly,
}

export type HouseworkScheduleFormValues = {
    id: string
    isActive: boolean
    familyId: string
    title: string
    detail: string
    workUser: Record<string, any>
    scheduleStartedAt: Dayjs | null
    scheduleEndedAt: Dayjs | null
    remindMinuteBefore: number | null
    scheduleRepeatType: ScheduleRepeatType
    weekdays: number[] | null
    weekOfMonth: number[] | null
    weekdayInMonth: number[] | null
}

export type HouseworkTemplateFormValues = {
    housework_title: string
    housework_detail: string
}