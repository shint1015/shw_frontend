import {Control, Controller} from "react-hook-form";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DateTimePicker} from "@mui/x-date-pickers/DateTimePicker";
import {renderTimeViewClock} from "@mui/x-date-pickers/timeViewRenderers";
import React, {useEffect} from "react";
import dayjs, {Dayjs} from "dayjs";


interface RHFDatetimeProps {
    name: string;
    labels: {id: string, label: string};
    control: Control | any;
    validateRules: {[key: string]: any}
    defaultValue?: Dayjs | null;
}

export const RHFDatetime: React.FC<RHFDatetimeProps> = ({
    name,
    labels,
    control,
    validateRules,
    defaultValue,
}) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={validateRules}
            {...(defaultValue && {defaultValue: dayjs.unix(Number(defaultValue))})}
            render={({field, fieldState}) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                        className={"date_time_picker_common"}
                        label={labels.label}
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
    );
}
