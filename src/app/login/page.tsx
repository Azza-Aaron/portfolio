import {MyHeaders} from "@/components/headers";
import {MyLogin} from "@/components/forms/login";
import React from "react";

export default async function loginPage(){
    return(
        <>
            <header>
                <MyHeaders headers={['portfolio']}/>
            </header>
            <MyLogin />
        </>
    )
}