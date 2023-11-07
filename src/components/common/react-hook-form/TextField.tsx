import {TextField} from "@mui/material";
import {Control, Controller} from "react-hook-form";
import {HouseworkFormValues} from "@/components/common/react-hook-form/type";


const RHFTextField = <T extends HouseworkFormValues>(
    name: string,
    validateRules: { [key: string]: any },
    labels: { id: string, label: string },
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
                        {...field}
                    />
                )}
            >
            </Controller>
        </>
    )
}

export default RHFTextField;