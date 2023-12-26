import { RiStarSFill } from "react-icons/ri";
import CTA from "../components/CTA";

export default function Home() {

        return (
            <div className="bg-[#c5e4f8] py-10">
            <section className="bg-[#d0edff]  flex flex-col justify-between min-h-screen max-container">
                <div className="container mx-auto px-6 ">
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-10">
                        <div className="flex flex-col items-center">
                            <img src="pfp.jpeg" alt="Profile" className="w-64 h-64 object-cover rounded-full shadow-lg"/>
                            <div className="flex gap-20 text-lg font-medium">
                    <div className="flex items-center"><RiStarSFill color="#80ceff" /><span>Designer</span></div>
                    <div className="flex items-center"><RiStarSFill color="#80ceff" /><span>Engineer</span></div>
                    <div className="flex items-center"><RiStarSFill color="#80ceff" /><span>Developer</span></div>
                        </div>
                        </div>
                        
                        <div className="max-w-lg">
                        <h1 className="uppercase text-5xl blue-gradient_text font-semibold drop-shadow">Majd Khawaldeh</h1>
                        <p className="mt-4 text-lg text-[#05143086]">
                            Junior Computer Science Student at Georgia Tech<br/>
                            Actively seeking Summer/Fall 2024 Internship Opportunities
                        </p>
                        </div>
                    </div>
                </div>
                <hr className='border-slate-300' />
                <CTA />
            </section>
            </div>
        );
}

