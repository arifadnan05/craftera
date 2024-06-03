import { Link } from "react-router-dom"

const CraftCategory = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-4 space-y-4 md:space-y-0 lg:space-y-0">
            <Link to='/categories/landscape_painting'>
                <div className="da relative overflow-hidden bg-gray-50">
                    <div className="absolute inset-0 bg-center dark:bg-black"></div>
                    <div className="group relative m-0 flex h-72 w-96 rounded-2xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                        <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                            <img src="https://cdn.britannica.com/60/95760-050-899F8959/River-Landscape-canvas-oil-Adriaen-van-de-1663.jpg" className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" />
                        </div>
                        <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                            <h1 className="font-serif text-2xl font-bold text-white shadow-xl">Landscape Painting</h1>
                            <h1 className="text-sm font-light text-gray-200 shadow-xl">A Little Paradise in Portugal</h1>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to='/categories/charcoal_sketching'>
                <div className="da relative overflow-hidden bg-gray-50">
                    <div className="absolute inset-0 bg-center dark:bg-black"></div>
                    <div className="group relative m-0 flex h-72 w-96 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                        <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                            <img src="https://thumbs.dreamstime.com/b/sad-troubled-school-boy-teenager-wearing-hoodie-posing-thinking-his-own-thoughts-close-up-charcoal-sketch-copy-spa-127583386.jpg" className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" />
                        </div>
                        <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                            <h1 className="font-serif text-2xl font-bold text-black shadow-xl">Charcoal Sketching</h1>
                            <h1 className="text-sm font-light text-black shadow-xl">A Little Paradise in Portugal</h1>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to='/categories/portrait_drawing'>
                <div className="da relative overflow-hidden bg-gray-50">
                    <div className="absolute inset-0 bg-center dark:bg-black"></div>
                    <div className="group relative m-0 flex h-72 w-96 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                        <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/a4cdbb47765147.58848aa69efd1.jpg" className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" />
                        </div>
                        <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                            <h1 className="font-serif text-2xl font-bold text-black shadow-xl">Portrait Drawing</h1>
                            <h1 className="text-sm font-light text-black shadow-xl">A Little Paradise in Portugal</h1>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to='/categories/watercolour_painting'>
                <div className="da relative overflow-hidden bg-gray-50">
                    <div className="absolute inset-0 bg-center dark:bg-black"></div>
                    <div className="group relative m-0 flex h-72 w-96 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                        <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                            <img src="https://nenearts.in/cdn/shop/files/CityReflectionsOriginalWatercolorPaintingForSaleByMilindMulick_864x.jpg?v=1690215243" className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" />
                        </div>
                        <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                            <h1 className="font-serif text-2xl font-bold text-black shadow-xl">Watercolor Painting</h1>
                            <h1 className="text-sm font-light text-black shadow-xl">A Little Paradise in Portugal</h1>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to='/categories/oil_painting'>
                <div className="da relative overflow-hidden bg-gray-50">
                    <div className="absolute inset-0 bg-center dark:bg-black"></div>
                    <div className="group relative m-0 flex h-72 w-96 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                        <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                            <img src="https://georgemillerart.com/cdn/shop/products/il_fullxfull.3850519341_s4u3.jpg?v=1674955655&width=1946" className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" />
                        </div>
                        <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                            <h1 className="font-serif text-2xl font-bold text-black shadow-xl">Oil Painting</h1>
                            <h1 className="text-sm font-light text-black shadow-xl">A Little Paradise in Portugal</h1>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to='/categories/cartoon_drawing'>
                <div className="da relative overflow-hidden bg-gray-50">
                    <div className="absolute inset-0 bg-center dark:bg-black"></div>
                    <div className="group relative m-0 flex h-72 w-96 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                        <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhu1brCBwTNdUN2zfvDCZNqJyUDbE7YbgLxuaulApncwgUacloVLPiISIDDT18vtEMs4pGJhBW0oQA_jsb4VKER4XljX9ReAQ_BDi7kFEJrIjAYZF1Z7G0JO5iSUR27HwLB_H3XYNen_e-z/s1600/pencil_drawing.jpg" className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" />
                        </div>
                        <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                            <h1 className="font-serif text-2xl font-bold text-black shadow-xl">Cartoon Drawing</h1>
                            <h1 className="text-sm font-light text-black shadow-xl">A Little Paradise in Portugal</h1>
                        </div>
                    </div>
                </div>
            </Link>

        </div>
    )
}

export default CraftCategory
