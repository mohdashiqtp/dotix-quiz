import type { NextPage } from "next";
import Image from 'next/image'
import Link from 'next/link'

const QuizAppUIDesign2: NextPage = () => {
  return (
    <div className="flex flex-col w-[350px] h-[650px] bg-white">
      <div className="bg-yellow-500 rounded-[10%] h-[280px]">
        <div className="flex justify-between">
          
          <a href='/' className="absolute top-[29px] left-[274px] rounded-[50%] bg-gray-300 w-11 h-11" />
          <h1 className="text-1xl absolute left-[140px] top-[35px] text-white font-bold">Hello Kirat</h1>
          <div className="logo">
            <Image className="absolute top-[32px] left-[277px]" src='/ellipse-13@2x.png' alt="logo" width={38} height={38} />
          </div>
        </div>
        <h1 className="absolute top-[110px] left-[20px] text-white font-semibold">Popular</h1>
        <div className="flex p-5 mt-[130px] justify-between items-center">
          <div className="flex p-5 flex-col items-center justify-center w-[100px] h-[100px] bg-white rounded-md">
            <h2 className="font-semibold">Space</h2>
            <Image src='/frame.svg' alt='space' width={80} height={80} />
          </div>
          <div className="flex p-5 flex-col items-center justify-center w-[100px] h-[100px] bg-white rounded-md">
            <h2 className="font-semibold">History</h2>
            <Image src='/frame1.svg' alt='space' width={80} height={80} />
          </div>
          <div className="flex p-5 flex-col items-center justify-center w-[100px] h-[100px] bg-white rounded-md">
            <h2 className="font-semibold">Sports</h2>
            <Image src='/frame2.svg' alt='space' width={80} height={80} />
          </div>

        </div>
      </div>
      <div className="bg-yello-400">

        <div className="flex justify-between p-5">
          <h3 className="font-semibold">Explore</h3>
          <p>view all</p>
        </div>
        <div className="flex p-5 justify-between items-center">

          
        <Link href='/quiz'><div className="flex p-5 flex-col items-center justify-center w-[100px] h-[100px] border-sm border-yellow-300 rounded-md">
          <h2 className="text-black font-semibold">Space</h2>
            <Image src='/frame.svg'  alt='space' width={80} height={80} />
        </div></Link>
          
          <div className="flex p-5 flex-col items-center justify-center w-[100px] h-[100px]  rounded-md">
            <h2 className="font-semibold">History</h2>
            <Image src='/frame1.svg' alt='space' width={80} height={80} />
          </div>
          <div className="flex p-5 flex-col items-center justify-center w-[100px] h-[100px] rounded-md">
            <h2 className="font-semibold">Sports</h2>
            <Image src='/frame2.svg' alt='space' width={80} height={80} />
          </div>

        </div>

      </div>
    </div>
  );
};

export default QuizAppUIDesign2;
