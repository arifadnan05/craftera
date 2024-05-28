import { Link } from "react-router-dom"

const CraftCategory = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 space-y-4 md:space-y-0 lg:space-y-0">
            <Link to='/categories/landscape_painting'>
                <div className="da relative overflow-hidden bg-gray-50">
                    <div className="absolute inset-0 bg-center dark:bg-black"></div>
                    <div className="group relative m-0 flex h-72 w-96 rounded-2xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                        <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                            <img src="https://images.unsplash.com/photo-1506187334569-7596f62cf93f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3149&q=80" className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
                        </div>
                        <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                            <h1 className="font-serif text-2xl font-bold text-white shadow-xl">Azores</h1>
                            <h1 className="text-sm font-light text-gray-200 shadow-xl">A Little Paradise in Portugal</h1>
                        </div>
                    </div>
                </div>
            </Link>
            <div className="da relative overflow-hidden bg-gray-50">
                <div className="absolute inset-0 bg-center dark:bg-black"></div>
                <div className="group relative m-0 flex h-72 w-96 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                    <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                        <img src="https://images.unsplash.com/photo-1506187334569-7596f62cf93f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3149&q=80" className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
                    </div>
                    <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                        <h1 className="font-serif text-2xl font-bold text-white shadow-xl">Azores</h1>
                        <h1 className="text-sm font-light text-gray-200 shadow-xl">A Little Paradise in Portugal</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CraftCategory
