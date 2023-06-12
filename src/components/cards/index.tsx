import Link from "next/link";

// @ts-ignore
export const ProjectCard = ({projects}) => {
    console.log(projects)
    console.log('made it here')
    // @ts-ignore
    const myProjects = projects?.map((project) => {
        return(
            <li>
                <div className="max-w-sm rounded overflow-hidden shadow-lg" id={project.id}>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{project.title}</div>
                        <p className="text-base">
                            {project.body}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                    <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{project.languages}</span>
                        <span
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{project.complete ? 'Project is Complete' : 'Project is Incomplete'}</span>
                    </div>
                    <div className="flex items-center">
                        <div className="text-sm">
                            <Link className="text-gray-900 leading-none" href={project.link}>Click for GitHub</Link>
                            <p className="text-gray-600">Last Updated {project.updatedAt.toString()}</p>
                        </div>
                    </div>
                </div>
            </li>
            )
    })
    console.log('then here')
    return (
        <ul>
            {myProjects}
        </ul>
    )
}