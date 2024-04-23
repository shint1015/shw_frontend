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

export type HouseworkTemplateFormValues = {
    housework_title: string
    housework_detail: string
}