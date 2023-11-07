import {TextField} from "@mui/material";
import {Controller} from "react-hook-form";
import {HouseworkFormValues} from "@/components/common/react-hook-form/type";

const RHFTextarea = <T extends HouseworkFormValues>(
    name: string,
    validateRules: { [key: string]: any },
    labels: { id: string, label: string },
    properties: {rows: number},
    control: Control<T>
) => {
    return (
        <>
            <Controller
                name={name}
                control={control}
                rules={validateRules}
                render={({field, fieldState}) => (
                    <TextField
                        label={labels.label}
                        error={fieldState.invalid}
                        helperText={fieldState.error?.message}
                        muiline
                        rows={properties.rows ?? 4}
                        {...field}
                    />
                )}
            >
            </Controller>
        </>
    )
}

export default RHFTextField;