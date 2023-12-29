import { RiStarSFill } from "react-icons/ri";
import CTA from "../components/CTA";
import pfp from '../public/pfp.jpeg'


export default function Home() {

        return (

            <section className=" flex flex-col justify-between min-h-screen max-container">
                <div className="container mx-auto px-6 ">
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-10">
                        <div className="flex flex-col  items-center">
                        <img src={pfp} alt="Profile" className=" w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover rounded-full shadow-lg"/>                            <div className="mt-4 flex gap-6 md:gap-12 lg:gap-20 text-lg font-medium">
                            <div className="flex items-center"><RiStarSFill color="#80ceff" /><span>Designer</span></div>
                            <div className="flex items-center"><RiStarSFill color="#80ceff" /><span>Engineer</span></div>
                            <div className="flex items-center"><RiStarSFill color="#80ceff" /><span>Developer</span></div>
                </div>
                        </div>
                        
                        <div className="max-w-lg">
                                <h1 className="uppercase text-5xl text-justify blue-gradient_text font-semibold drop-shadow">Majd Khawaldeh</h1>
                            <p className="mt-4  text-lg text-[#05143086]">
                                Computer Science at Georgia Tech<br/>
                                Seeking 2024 Internships
                            </p>
                        </div>
                    </div>
                </div>
                <hr className='border-slate-300' />
                <CTA />
            </section>
        );
}

