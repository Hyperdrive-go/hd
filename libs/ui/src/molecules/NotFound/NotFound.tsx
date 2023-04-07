

const NotFound = () => {

    return (
        <div className="h-96 mx-auto bg-gray-900 py-32">
            <div className="mx-auto bg-gray-900 text-center">
                <h1 className="text-white  text-2xl md:text-4xl lg:text-6xl font-bold mb-8">
                    404 Not Found
                </h1>
                <div className="text-gray-400 text-md">
                    <p>This page is lost. Please go back!</p>
                    <p>We can't find the page you were looking for.</p>
                </div>
                <div className="py-8 justify-center flex">
                <a href="/" type="button" className="text-white bg-red-700 px-6 py-3 lg:px-8 lg:py-4 rounded-xl font-bold">
                    Navigate back home
                </a>
                </div>
            </div>
        </div>
    )
}

export default NotFound;