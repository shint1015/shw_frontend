import React from 'react';
import { Controller, Control } from 'react-hook-form';
import TextField from '@mui/material/TextField';

interface RHFTextFieldProps {
    name: string;
    labelName: string;
    control: Control;
    validateRules: {[key: string]: any}
    defaultValue?: string;
}

export const RHFTextField: React.FC<RHFTextFieldProps> = ({
    name,
    labelName,
    control,
    validateRules,
    defaultValue = '',
}) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            rules={validateRules}
            render={({ field }) => (
                <TextField
                    {...field}
                    label={labelName}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
            )}
        />
    );
};
