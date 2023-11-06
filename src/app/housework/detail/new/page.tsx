import {Card, FormControl, Input} from "@mui/material";
import {SubmitHandler, useForm} from "react-hook-form";


const Page = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({ resolver });

    const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
        console.log(`submit: ${data.area}`)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

            </form>
            <FormControl>
                {/*家事*/}
                <Input
                {/*詳細*/}
                {/*作業者*/}
                {/*開始日時*/}
                {/*終了日時*/}
            </FormControl>
        </div>
    )
}

export default Page;