function BannerPage() {
    return (
        <>
            <section className="relative w-full">
                <div>
                    <img 
                    src="src/assets/banner.png" 
                    alt="Banner" 
                    className="w-full h-[300px] object-cover" 
                    />
                </div>

                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center">
                <h1 className="text-4xl font-semibold mb-2 text-yellow-500">&#9650;</h1>
                <h1 className="text-4xl font-semibold mb-2">???</h1>
                <p>
                    <span className="font-semibold">Home</span> 
                    <span className="mx-2"> &gt; </span> 
                    <span>???</span>
                </p>
                </div>
            </section>
        </>
    );
}

export default BannerPage