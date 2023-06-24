import {MyHeaders} from "@/components/headers";
import MyFooter from "@/components/footers";
import {AboutBody, aboutHomePageText} from "@/components/bodies/about";

export default function Home(){
    return(
        <>
            <header>
                <MyHeaders headers={['portfolio']}/>
            </header>
            <div className="bg-gray-900 rounded-lg shadow-lg p-4 mx-4 md:mx-auto max-w-screen-md border-2 border-slate-400">
                <h2 className="text-lg font-medium text-gray-100 text-center mb-4 max-w-3xl mx-auto">Aaron Winfield</h2>
                <div className="text-gray-100 text-sm md:text-base">
                    < AboutBody text={aboutHomePageText}/>
                </div>
            </div>
            <footer>
                <MyFooter />
            </footer>
        </>
    )
}