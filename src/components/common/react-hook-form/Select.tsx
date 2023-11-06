import {Controller} from "react-hook-form";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";


type InputType = string | number

const InputRHFSelect = (
    values: {[key: InputType]: string},
    selectType:string,
    validateRules: {[key: string]: any},
    labels: {id: string, label: string}
) => {
    return (
        <Controller
            name={selectType}
            control={control}
            rules={validateRules}
            render ={({ field, fieldState }) => (
                <FormControl error={fieldState.invalid}>
                    <InputLabel id={labels.id}>{labels.labels}</InputLabel>
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
        >
        </Controller>
    );
}

export default InputRHFSelect;
