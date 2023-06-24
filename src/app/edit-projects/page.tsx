import {MyHeaders} from "@/components/headers";
import {bodyClass, headerClass, linkClass} from "@/app/tailWindClasses";
import MyFooter from "@/components/footers";
import {prisma} from "@/db";
import {auth} from "@/utility/authentication";
import {MyLogin} from "@/components/forms/login";
import {MyProjectsForm} from "@/app/edit-projects/projects";
import {getProjects} from "@/model/getProjects";
import {Projects} from ".prisma/client";
import React, { FC } from 'react';
import {AddProjectForm} from "@/app/add-projects/addProject";


export default async function newProjectPage(){
    const addButton:React.JSX.Element = <a href={"/add-projects"}> <button className={linkClass}> Add Project</button> </a>
    let projects: Projects[]
    try{
        projects = await getProjects()
    } catch (e) {
        return(
            <>
                <header>
                    <MyHeaders headers={['portfolio']}/>
                </header>
                <div className={bodyClass}>
                    {addButton}
                </div>
                <div className={bodyClass}>
                    <h1>No Projects To Edit, Add A New Project</h1>
                </div>
            </>
        )
    }
    return(
        <>
            <header>
                <MyHeaders headers={['portfolio']}/>
            </header>
            <div className={bodyClass}>
                {addButton}
            </div>
            <div className={bodyClass}>
                <MyProjectsForm projects={projects} />
            </div>
        </>
    )
}

//export const getServerSideProps = requirePageAuth