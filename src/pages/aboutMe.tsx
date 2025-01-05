export const AboutMe = () => {
return (
    <>
    <div className="h-96 flex w-screen items-center justify-center">
        <div className="flex flex-col sm:p-0 text-center sm:text-left sm:flex-row items-center justify-center gap-5" style={{fontFamily:'Ubuntu mono'}}>
            <div className="flex flex-col">
                <div className="text-4xl">Hi!! I'm Rohit</div>
                <div className="w-96">and I like building stuff especially websites and
                                    mobile apps. I mostly work with typescript for frontend
                                    and golang for backend. I'm pretty fast at learning new
                                    technology, as you can see my projects are diverse from
                                    web app to games and desktop apps.
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