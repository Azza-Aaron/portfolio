import {boolean, InferType, string} from "yup";
import {editProjectSchema} from "@/utility/yupSchema";


type ValidatedEditResponse = InferType<typeof editProjectSchema> | false
export const validatedEdit = async (data: FormData):Promise<ValidatedEditResponse> => {
    let completion:string|object|undefined|boolean = data.get("default-radio")?.valueOf() ?? false
    completion === "1" ? completion = true : completion=false;
    const editedProject = {
        id: data.get("pressed-button")?.valueOf(),
        title: data.get("title")?.valueOf(),
        body: data.get("body")?.valueOf(),
        languages: data.get("languages")?.valueOf(),
        link: data.get("link")?.valueOf(),
        complete: completion,
        createdAt: data.get("createdAt")?.valueOf()
    }
    try {
        const valid = await editProjectSchema.validate(editedProject)
        console.log('valid? ', valid)
        if(!valid){return false}
    } catch (e) {
        console.log('not valid to yup schema')
        console.log(editedProject)
        return false
    }
    return editedProject as ValidatedEditResponse
}