import {Control, Controller} from "react-hook-form";
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import {HouseworkFormValues} from "@/components/common/react-hook-form/type";

type InputType = string | number

const RHFInputRadio = <T extends HouseworkFormValues>(
    name: string,
    validateRules: { [key: string]: any },
    labels: { id: string, label: string },
    values: {[key: InputType]: string},
    control: Control<T>
) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={validateRules}
            render={({field, fieldState}) => (
                <FormControl error={fieldState.invalid}>
                    <FormLabel id={labels.id}>{labels.labels}</FormLabel>
                    <RadioGroup
                        aria-labelledby={labels.id}
                        value={field.value}
                        name={name}
                    >
                        {Object.keys(values).map((key) => (
                            <FormControlLabel
                                key={key}
                                value={key}
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

export default RHFInputRadio;