import {Control, Controller} from "react-hook-form";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {HouseworkFormValues} from "@/components/common/react-hook-form/type";
import React from "react";


type InputType = string | number

interface InputRHFSelectProps {
    name: string;
    values: {[key: InputType]: string};
    validateRules: {[key: string]: any};
    labels: {id: string, label: string};
    control: Control | any;
}

export const RHFSelect: React.FC<InputRHFSelectProps> = ({
    name,
    values,
    validateRules,
    labels,
    control
}) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={validateRules}
            render ={({ field, fieldState }) => (
                <FormControl error={fieldState.invalid}>
                    <InputLabel id={labels.id}>{labels.label}</InputLabel>
                    <Select
                        labelId={labels.id}
                        {...field}>
                        {Object.keys(values).map((key) => (
                            <MenuItem key={key} value={key}>
                                {values[key]}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            )}
        />
    );
}
export default RHFSelect;
