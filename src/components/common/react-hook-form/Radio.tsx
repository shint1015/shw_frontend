import React, {useEffect} from "react";
import {Control, Controller} from "react-hook-form";
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";

type InputType = string | number

interface RHFRadioProps {
    name: string;
    values: {[key: InputType]: string};
    validateRules: {[key: string]: any};
    labels: {id: string, label: string};
    control: Control | any;
}

export const RHFRadio: React.FC<RHFRadioProps> = ({
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
                    <FormLabel id={labels.id}>{labels.label}</FormLabel>
                    <RadioGroup
                        aria-labelledby={labels.id}
                        value={field.value}
                        name={name}
                    >
                        {Object.keys(values).map((key) => (
                            <FormControlLabel
                                key={key}
                                control={<Radio/>}
                                label={values[key]}
                                {...field}
                            />
                        ))}
                    </RadioGroup>
                </FormControl>
            )}
        />
    );
}
export default RHFRadio;
