import React from 'react';
import { TextField } from '@mui/material';
import { Controller, Control } from 'react-hook-form';


interface RHFTextareaProps {
    name: string;
    validateRules: { [key: string]: any };
    labels: { id: string, label: string };
    properties?: {rows: number};
    control: Control;
}

export const RHFTextarea: React.FC<RHFTextareaProps> = ({
    name,
    labels,
    validateRules,
    properties,
    control,
}) => {
    if (properties === undefined) {
    }
    return (
        <Controller
            name={name}
            control={control}
            rules={validateRules}
            render={({field, fieldState}) => (
                <TextField
                    label={labels.label}
                    multiline
                    rows={(properties && properties.rows) ?? 4}
                    {...field}
                />
            )}
        />
    )
}