import {AddProjectForm} from "@/app/add-projects/addProject";
import {MyHeaders} from "@/components/headers";
import {MyLogin} from "@/components/forms/login";
import MyFooter from "@/components/footers";


export default async function addProjectsPage () {
    return(
        <>
            <header>
                <MyHeaders headers={['portfolio']}/>
            </header>
            <AddProjectForm />
            <footer>
                <MyFooter />
            </footer>
        </>
    )
}