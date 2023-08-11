import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
 
} from "react-icons/ai";

import elon from "../public/elon.jpg";
import sundar from "../public/sundar.jpg";
import sam from "../public/sam-altman.gif";
import selfDrive from "../public/self.jpeg";
import PNEUMONIA from "../public/PNEUMONIA-1.png";
import signature from "../public/signature-1.webp"

import Image from "next/image";


import UserForm from "./form";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nx Developer</title>
        <meta name="description" content="Generated by sameer maknojiya" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <nav className="py-10 flex justify-between align-middle md:mt-20 ">
            <h1 className="font-burtons text-xl ">Nx Developer</h1>
            <h1 className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white text-sm rounded-xl p-2">call +91 7486803805</h1>
          </nav>
        <section>
          <div className="text-center p-10 py-10 sm:p-3">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl sm:p-5">
              Sameer Maknojiya
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              AI/ML Engineer and Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Advocacy & Teaching Academy for Upcoming Aspirants.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://twitter.com/maknojiyasamee1" target="_blank" rel="noopener noreferrer">
                <AiFillTwitterCircle/>
              </a>
              <a href="https://www.linkedin.com/in/samir-maknojiya-a47b5b1b8/" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin />
              </a>
            </div>
            {/* <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96  sm:self-start">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div> */}
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white mb-7">What is AI</h3>
            <p className="py-1 text-6xl bg-gradient-to-r from-gray-400 to-gray-900 bg-clip-text text-transparent leading-12 text-gray-800">
              Artificial Inteligence enables machines to imitate human like intelligence from Data 
            </p>
            
            {/* <p className="text-md py-2 leading-8 text-teal-600 dark:text-gray-200">
              I will help Aspiring Computer Science students to learn about Full-stack development using AI and Teach How AI works and how you can trained AI With your Data.
            </p> */}
          </div>
          <div className="lg:flex gap-3 text-gray-600">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
              <h2 className="py-2 font-semibold">
                Natural Langauge Processing
              </h2>
              <p>analyzing, understanding and generating human language interactions."</p>
              <p><span className="text-red-900">Tools :</span> ChatGPT, Bard, Med-Palm-2, LLama</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
              <h2 className="py-2 font-semibold">
                Computer Vision
              </h2>
              <p>interpreting and processing visual information from images/videos</p>
              <p><span className="text-red-900">Tools :</span> Mid-Journey, Bard, Med-Palm-2, LLama</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
              <h2 className="py-2 font-semibold">
                Supervised Learning
              </h2>
              <p>Training AI with labeled data for accurate pattern recognition and prediction.</p>
              <p><span className="text-red-900">Tools :</span> Loan Approval, Stock-market Prediction</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
              <h2 className="py-2 font-semibold">
                Unsupervised Learning
              </h2>
              <p>AI finding patterns in unlabeled data without explicit guidance or labels.</p>
              <p><span className="text-red-900">Tools :</span> EarthQuake Prediction, Rare Event Detection</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
              <h2 className="py-2 font-semibold">
                Reinforcement Learning
              </h2>
              <p>AI learning through actions, rewards, optimizing decisions in dynamic environments</p>
              <p><span className="text-red-900">Tools :</span> Alpha-Go, Alpha-Fold</p>
            </div>
          </div>
            
          <h3 className="text-3xl py-1 dark:text-white ">What People Think</h3>
          <div className="lg:flex gap-5 text-gray-900">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={elon} width={350} height={450} objectFit="cover" className="rounded-3xl" />
              <p className="py-2 font-semibold">
                AI is far more Dengerous than Nukes
              </p>
              <span className="text-teal-700 text-center">Elon Musk </span> <br/>
              <span className="text-teal-500">Founder of Spacex,Tesla</span>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={sundar} width={350} height={450} objectFit="cover" className="rounded-3xl" />
              <p className="py-2 font-semibold">
                AI will have a more profound impact on humans more than Fire, Electricity and the Enternet
              </p>
              <span className="text-teal-700 text-center">Sundar Pichai </span> <br/>
              <span className="text-teal-500">CEO of Google</span>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={sam} width={350} height={450} objectFit="cover" className="rounded-3xl" />
              <p className="py-2 font-semibold">
                AI is going to be more significant development in human history
              </p>
              <span className="text-teal-700 text-center">Sam Altman </span> <br/>
              <span className="text-teal-500">CEO of OpenAI(ChatGPT)</span>
            </div>
          </div>
        </section>


        <section className="py-10">
          <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
          <div className="lg:flex gap-5 text-gray-900">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={selfDrive} width={350} height={450} objectFit="cover" className="rounded-3xl" />
              <p className="py-2 font-semibold text-slate-600">
                Object Detection Using CNN(Self Driving)
              </p>
              <ul className="flex items-center py-5 mb-3">
                <li>
                  <a
                    className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 sm:text-xl sm:bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white"
                    href="https://colab.research.google.com/drive/16leOVz0t9J5vQwiMRA45MgCl5VaAZZ0i?usp=sharing"
                    target="_blank"
                  >
                  Code
                  </a>
                </li>
                <li>
                  <a
                    className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 sm:text-xl sm:bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white"
                    href="https://drive.google.com/file/d/1EMsSekjT5Ly8SUu5SfXm3kb0_sfLOjnX/view?usp=sharing"
                    target="_blank"
                  >
                  Demo
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={PNEUMONIA} width={350} height={450} objectFit="cover" className="rounded-3xl" />
              <p className="py-2 font-semibold text-slate-600">
                PNEUMONIA Detection using Mobile-net.
              </p>
              <ul className="flex items-center py-5">
                <li>
                  <a
                    className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 sm:text-xl sm:bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white"
                    href="https://colab.research.google.com/drive/1PGa0WXeTi-XrN3y1fFu2L1XOupdzGvER?usp=sharing"
                    target="_blank"
                  >
                  Code
                  </a>
                </li>
                <li>
                  <a
                    className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 sm:text-xl sm:bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white"
                    href="https://drive.google.com/file/d/1UFjnhv4CI6NdDPFwUysY1cVr0bZMOsQl/view?usp=sharing"
                    target="_blank"
                  >
                  Demo
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={signature} width={350} height={450} objectFit="cover" className="rounded-3xl" />
              <p className="py-2 font-semibold text-slate-600">
                Signature Verification using Seimese Networks
              </p>
              <ul className="flex items-center py-5">
                <li>
                  <a
                    className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 sm:text-xl sm:bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white"
                    href="https://colab.research.google.com/drive/1JqOlU82ziqFqErEQVEADYp6ie-QXBNCl?usp=sharing"
                    target="_blank"
                  >
                  Code
                  </a>
                </li>
                <li>
                  <a
                    className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 sm:text-xl sm:bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white"
                    href="https://drive.google.com/file/d/1vmF8X7lum-DUH3Ih8R0XhGq8zg4OoN4P/view?usp=sharing"
                    target="_blank"
                  >
                  Demo
                  </a>
                </li>
              </ul>
            </div>
          </div>
          

          
          <div>
            <h3 className="text-3xl py-1 dark:text-white mb-10">About Me</h3>
            <h2 className="text-6xl bg-gradient-to-r from-gray-400 to-gray-900 bg-clip-text text-transparent leading-12 text-gray-800 mb-5">
              Hi, I'm <br/>
              Sameer
            </h2>
            <h4 className="text-xl font-bold text-slate-500 mb-10">I Teach Aspiring Students About AI and Development</h4>
            <p className="text-slate-700 bg-clip-text leading-12 text-gray-800 mb-12">
              I'm AI Engineer and Developer for last 3 years, I'm studing Master of Science in Artificial Inteligence and 
              Machine Learning From Woolf University(Europe) and done Internship as Data Scientist in Scaler DSML, before 
              that I've done B.tech from Parul University.
            </p>
            <p className="text-xl font-bold text-slate-500 mb-12">I have Passion of teaching young minds about AI and FullStack Development </p>
          </div>


          <div>
            <h3 className="text-3xl py-1 md:mb-10">Get In Touch</h3>
              <UserForm/>
            
          </div>
        </section>
      </main>
          <div className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white">
            <div>
            <h2 className="text-2xl text-center pt-2 ">
              Nx Developer
            </h2>
            <p className="text-md text-center pt-1">Copyright @2023 Nx Developer</p>
            <p className="text-sm text-center pt-1 pb-2 mb-3">Mail : maknojiyasameer2000@gmail.com</p>
            </div>
          </div>
      
    </div>
  );
}