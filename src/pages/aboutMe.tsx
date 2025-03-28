export const AboutMe = () => {
return (
    <>
    <div className="h-96 flex w-screen items-center justify-center">
        <div className="flex flex-col sm:p-0 text-center sm:text-left sm:flex-row gap-5" style={{fontFamily:'Ubuntu mono'}}>
            <div className="flex flex-col">
                <div className="text-4xl">Hi!! I'm Rohit</div>
               
                <div className="w-96">and I love building stuff that can be used by real users. Sometimes I create websites but most of the times mobile apps.
                </div>
            </div>
            <div>
                <img src="https://avatars.githubusercontent.com/u/94440631?v=4" className="h-44 w-44 rounded-md"/>
                
            </div>
        </div>
    </div>
    </>
)
}