import {boolean, InferType, string} from "yup";
import {addProjectSchema} from "@/utility/yupSchema";

type ValidatedAddResponse = InferType<typeof addProjectSchema> | false
export const validatedAdd = async (data: FormData):Promise<ValidatedAddResponse> => {
    let completion:string|object|undefined|boolean = data.get("default-radio")?.valueOf() ?? false
    completion === "1" ? completion = true : completion=false;
    const addedProject = {
        title: data.get("title")?.valueOf(),
        body: data.get("body")?.valueOf(),
        languages: data.get("languages")?.valueOf(),
        link: data.get("link")?.valueOf(),
        complete: completion,
    }
    try {
        const valid = await addProjectSchema.validate(addedProject)
        console.log('valid? ', valid)
        if(!valid){return false}
    } catch (e) {
        // @ts-ignore
        console.log('not valid to yup schema ', e.errors)
        console.log(addedProject)
        return false
    }
    return addedProject as ValidatedAddResponse
}