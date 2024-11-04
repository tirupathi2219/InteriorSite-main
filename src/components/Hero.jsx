const Hero = () => {
    return (
        <main className="hero_main flex items-center justify-center sm:flex-col xs:flex-col m-auto p-12">
            <div className="grid grid-cols-2 items-center justify-center space-y-4 text-center sm:max-w-full max-w-[80%]">
                <h1 className=" m-auto  text-white text-[32px] sm:text-[28px] font-bold italic w-[50%]">
                    Welcome to <strong className="text-orange-600 text-[36px] sm:text-[32px]">Halchemy Interior</strong>  Design
                </h1>
                <p className=" text-white  mt-2 italic leading-6 tracking-wider sm:leading-relaxed">
                    Welcome to Halchemy Interior's , we believe in transforming spacious to reflect the unique personalities of clinge. With years of experince in interior design we are dedicated to creating visually stunning and functional interiors  that blend aesthetics with practicality where you're looking for a complete home make over, a stylish office revamp or a small room redesign. Our team bring creativity precision and attention to detail into every project.
                </p>
            </div>
        </main>
    )
}
export default Hero