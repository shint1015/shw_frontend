"use client"
import {Card, FormControl, Input, TextField} from "@mui/material";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import RHFTextField from "@/components/common/react-hook-form/TextField";
import RHFSelect from "@/components/common/react-hook-form/Select";
import RHFTexarea from "@/components/common/react-hook-form/Textarea";
import RHFRadio from "@/components/common/react-hook-form/Radio";
import {HouseworkFormValues} from "@/components/common/react-hook-form/type";

const Page = () => {
    const {
        // register,
        handleSubmit,
        formState: { errors },
        getValues,
        control,
        setError,
        clearErrors,
    } = useForm<HouseworkFormValues>();

    const validateRules = {
        housework_title: {
            required: '家事名を入力してください',
        },
        housework_detail: {

        }
    }
    const labels = {
        housework_title: {id: "housework_title", label: "家事名"},
        housework_detail: {id: "housework_detail", label: "詳細"},
    }

    const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
        console.log(`submit: ${data.area}`)
    }

    console.log(control)

    return (
        <Card>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl fullWidth>
                    {/*家事*/}
                    <Controller
                        name={"housework_title"}
                        control={control}
                        rules={validateRules}
                        render={({field, fieldState}) => (
                            <TextField
                                label={labels.housework_title.label}
                                error={fieldState.invalid}
                                helperText={fieldState.error?.message}
                                {...field}
                            />
                        )}
                    />
                </FormControl>
                {/*詳細*/}
                <FormControl fullWidth>
                    <Controller
                        name={"housework_detail"}
                        control={control}
                        rules={validateRules}
                        render={({field, fieldState}) => (
                            <TextField
                                label={labels.housework_detail.label}
                                error={fieldState.invalid}
                                helperText={fieldState.error?.message}
                                {...field}
                            />
                        )}
                    />
                </FormControl>
                {/*作業者*/}
                <FormControl fullWidth></FormControl>
                {/*開始日時*/}
                <FormControl fullWidth></FormControl>
                {/*終了日時*/}
                <FormControl fullWidth></FormControl>
            </form>

        </Card>
    )
}

export default Page;