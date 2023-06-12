import Link from "next/link"
import {headerClass, linkClass} from "@/app/tailWindClasses";

// @ts-ignore
export const MyHeaders = ({headers}) => {
    const myHeaders = headers.map((header: string) => {
        return(
            <Link key={header} className={`${linkClass}`} href={`/${header}`}>
                <h1>{header.toUpperCase()}</h1>
            </Link>
        )
    })
    const homeLink: JSX.Element = <Link href={'/'}>Home</Link>
    return(
        <header className={`flex justify-between items-center mb-4`}>
            <h1 className={headerClass}>{homeLink}</h1> {myHeaders}
        </header>
    )
}