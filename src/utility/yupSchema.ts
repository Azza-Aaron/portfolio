import {object, string, boolean, Schema} from 'yup';

export let editProjectSchema:Schema<object> = object({
    id: string().required(),
    title: string().required(),
    body: string().required(),
    languages: string().required(),
    link: string().url().required(),
    complete: boolean().required(),
    createdAt: string().required(),
}).noUnknown();

export const validatedEdit = async (data: FormData) => {
    let completion:string|object|undefined|boolean = data.get("default-radio")?.valueOf() ?? false
    completion === "1" ? completion = true : completion=false;
    const editedProject = {
        id: data.get("pressed-button")?.valueOf() ?? null,
        title: data.get("title")?.valueOf() ?? null,
        body: data.get("body")?.valueOf() ?? null,
        languages: data.get("languages")?.valueOf() ?? null,
        link: data.get("link")?.valueOf() ?? null,
        complete: completion,
        createdAt: data.get("date")?.valueOf()  ?? null,
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
    return editedProject
}