import { useEffect } from "react";
import {Control, Controller} from "react-hook-form";
import {Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, Select} from "@mui/material";


type InputType = string | number

interface RHFCheckboxProps {
    name: string;
    values: {[key: InputType]: string};
    validateRules: {[key: string]: any};
    labels: {id: string, label: string};
    control: Control | any;
    defaultValue?: InputType[];
}

export const RHFCheckbox = (props: RHFCheckboxProps) => {
    const { name, values, validateRules, labels, control, defaultValue = [] } = props
    useEffect(() => {}, [defaultValue]);

    return (
        <Controller
            name={name}
            control={control}
            rules={validateRules}

            render ={({ field, fieldState }) => (
                <FormControl error={fieldState.invalid}>
                    <FormLabel id={labels.id}>{labels.label}</FormLabel>
                    <FormGroup aria-label="position" row>
                        {Object.keys(values).map((key) => (
                            <FormControlLabel
                                key={key}
                                control={<Checkbox checked={defaultValue.includes(key)} />}
                                label={values[key]}
                                {...field}
                            />
                        ))}
                    </FormGroup>
                </FormControl>
            )}
        />
    )
}