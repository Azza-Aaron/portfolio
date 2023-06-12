import {MyHeaders} from "@/components/headers";
import MyFooter from "@/components/footers";
import {bodyClass} from "@/app/tailWindClasses";

export default function Home(){
    return(
        <>
            <header>
                <MyHeaders headers={['portfolio']}/>
            </header>
            <div className={bodyClass}>
                <p>Body</p>
            </div>
            <footer>
                <MyFooter />
            </footer>
        </>
    )
}