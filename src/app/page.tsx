import {MyHeaders} from "@/components/headers";
import MyFooter from "@/components/footers";
import {AboutBody, aboutHomePageText} from "@/components/bodies/about";

export default function Home(){
    return(
        <>
            <header>
                <MyHeaders headers={['portfolio']}/>
            </header>
            <div className="bg-gray-900 rounded-lg shadow-lg p-4 mx-4 md:mx-auto max-w-screen-md">
                <h2 className="text-lg font-medium text-gray-100 text-center">Aaron Winfield</h2>
                < AboutBody text={aboutHomePageText} />
            </div>
            <footer>
                <MyFooter />
            </footer>
        </>
    )
}