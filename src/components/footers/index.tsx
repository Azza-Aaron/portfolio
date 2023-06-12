import Link from "next/link";
import {linkClass} from "@/app/tailWindClasses";

export default function MyFooter(){

    const editLink : JSX.Element = <Link href={"edit-projects"} className={linkClass}>Edit Projects</Link>
    return(
        <div className={"flex justify-center mt-24"}>
            {editLink}
        </div>
    )
}