import {ReactElement} from "react";

export const aboutHomePageText: string[] = [
    "Welcome to my programming portfolio. I'm Aaron Winfield, a self-taught full-stack developer with extensive experience in HTML, CSS, JavaScript, React, and SQL, particularly PostgreSQL. I seek to stay updated with the latest industry trends and enhance my skills by learning Next.js and TypeScript.",

    "As a family man with three children, I uphold values such as hard work and dedication, which I apply to my work as a Digital Operations Executive. My coding skills have enabled me to streamline operations and deliver results-driven solutions.",

    "In my personal projects, I've demonstrated my ability to handle front-end design and database management. My ultimate goal is to leverage my skills to develop software solutions that can positively impact people's lives.",

    "I look forward to collaborating with like-minded professionals and learning from them. Please feel free to contact me for any further information or potential opportunities. Thank you for visiting my portfolio."
]

export const AboutBody = ({text}:{text: string[]}) => {
    const mapped: ReactElement[] = text.map((paragraph: string) => {
        return(
            <li className={"mt-6 mb-1"} key={"body"}>
                <div className={"flex text-center"}>
                    <p>{paragraph}</p>
                </div>
            </li>
        )
    })
    return(
        <ul>
            {mapped}
        </ul>
    )
}