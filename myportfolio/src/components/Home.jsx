import billede from "../assets/billede.png"
export const Home = () => {

return(
    <div name="home" className="h-screen w-full bg-gradient-to-b from-zinc-700 to-gray-800 text-white">

        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className=" flex flex-col justify-center h-full flex gap-4">
                <h2 className="text-5xl mt-2">
                    Asger Birk
                </h2>
                <h3 className=" p4-6 max-w-md text-3xl mt-2">
                    Studying Computer Science at KEA
                </h3>
                <p className="max-w-md mx-auto mt-2">
                    I am 25 years old, living in Nørrebro in Copenhagen and I'm searching for a student-job. I just finished my internship in TopTutors where i worked as an full-stack developer. In my spare time I like to hang out with my friends, family and girlfriend.
                    I am a competitive person and I enjoy all kind of sports and especially football.
                    In addition i enjoy playing computer games and chess.
                </p>
            </div>
            <div>
                <img src={billede} alt="billede" className="h-auto max-w-lg ml-auto rounded-lg"/>
            </div>
        </div>
    </div>
)


}