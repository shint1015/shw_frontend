import React, {useEffect} from 'react';
import { Controller, Control } from 'react-hook-form';
import TextField from '@mui/material/TextField';

interface RHFTextFieldProps {
    name: string;
    labelName: string;
    control: Control | any;
    validateRules: {[key: string]: any}
    defaultValue?: string;
}

export const RHFTextField = (props: RHFTextFieldProps) => {
    const { name, labelName, control, validateRules, defaultValue = [] } = props
    useEffect(() => {}, [defaultValue]);
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            rules={validateRules}
            render={({ field, fieldState }) => (
                <TextField
                    {...field}
                    error={fieldState.invalid}
                    helperText={fieldState.error?.message}
                    label={labelName}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
            )}
        />
    );
};
