import {object, string, boolean, Schema, InferType} from 'yup';

export let editProjectSchema= object({
    id: string().required(),
    title: string().required(),
    body: string().required(),
    languages: string().required(),
    link: string().required(),
    complete: boolean().required(),
    createdAt: string().required(),
}).noUnknown();

export let addProjectSchema= object({
    title: string().required(),
    body: string().required(),
    languages: string().required(),
    link: string().required(),
    complete: boolean().required(),
}).noUnknown();

export let userSchema= object({
    username: string().required(),
    password: string().required(),
}).noUnknown();