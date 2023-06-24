import {bodyClass, inputClassEdit, linkClass, radioClass, textAreaClass} from "@/app/tailWindClasses";
import {newProject} from "@/model/addProject";

export const AddProjectForm = () => {
    return (
        <div className={'mt-8 rounded-2xl border-2 border-slate-400 bg-gray-900 text-center'}>
            <form className={'p-3'} action={newProject}>
                <div className={'max-w-md mx-auto'}>
                    <label className={`block mt-4 text-sm font-medium text-gray-200 text-left ${bodyClass}`}>Title*</label>
                    <textarea name={'title'} required placeholder={'Title'} className={`w-full text-2xl ${inputClassEdit} mx-auto mt-3`} />

                    <label className={`block mt-4 text-sm font-medium text-gray-200 text-left ${bodyClass}`}>Body*</label>
                    <textarea name={'body'} required className={`${textAreaClass} w-full`}
                              rows={5} placeholder={'Body'} />

                    <label className={`block mt-4 text-sm font-medium text-gray-200 text-left ${bodyClass}`}>Languages*</label>
                    <textarea name={'languages'} required className={`${textAreaClass} w-full`}
                              rows={1} placeholder={'Languages'} />

                    <label className={`block mt-4 text-sm font-medium text-gray-200 text-left ${bodyClass}`}>Github Link*</label>
                    <textarea name={'link'} required className={`${textAreaClass} w-full mb-4`}
                              placeholder={'Github Link'} />

                    <label className={`block mt-4 text-sm font-medium text-gray-200 text-left ${bodyClass}`}>Status*</label>
                    <div className="mt-1 mb-4 flex justify-center space-x-4">
                        <div className="flex items-center">
                            <input required id="default-radio-1" type="radio" value="0" name="default-radio"
                                   className={radioClass} />
                            <label htmlFor="default-radio-1"
                                   className="ml-2 text-sm font-medium text-gray-200 dark:text-gray-300">Incomplete</label>
                        </div>
                        <div className="flex items-center">
                            <input required id="default-radio-2" type="radio" value="1" name="default-radio"
                                   className={radioClass} />
                            <label htmlFor="default-radio-2"
                                   className="ml-2 text-sm font-medium text-gray-200 dark:text-gray-300">Complete</label>
                        </div>
                    </div>
                    <button type={'submit'} name={'pressed-button'} className={`mt-4 ${linkClass} text-center w-full`} >Submit Project</button>
                </div>
            </form>
        </div>
    )
}