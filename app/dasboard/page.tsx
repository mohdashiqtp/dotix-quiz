import type { NextPage } from "next";

const QuizAppUIDesign: NextPage = () => {
  return (
    <div className="rounded-11xl bg-white w-[337px] h-[680px] overflow-hidden text-center text-xl text-orange font-poppins">
      <div className="absolute top-[-34px]   left-[-45px] w-[414px] h-[445px] overflow-hidden">
        <div className="absolute top-[90px] left-[127px] rounded-[50%] bg-gray-200 w-[175px] h-[175px]" />
        <div className="absolute top-[34px] bg-yellow-400 rounded-lg left-[45px] rounded-11xl  w-[337px] h-[334px]" />
        <div className="absolute top-[0px] left-[123px] rounded-[50%] bg-gray-300 w-[90px] h-[90px] mix-blend-soft-light" />
        <div className="absolute top-[50px] left-[252px] rounded-[50%] bg-gray-300 w-10 h-10 mix-blend-soft-light" />
        <div className="absolute top-[103px] left-[0px] rounded-[50%] bg-gray-300 w-[90px] h-[90px] mix-blend-soft-light" />
        <div className="absolute top-[119px] left-[156px] rounded-[50%] bg-white w-[116px] h-[116px]" />
        <div className="absolute bg-white top-[108px] left-[145px] rounded-[50%]  w-[139px] h-[139px]" />
        <div className="absolute top-[147px] text-yellow-400 left-[161px] font-medium">
          your Score
        </div>
        <div className="absolute top-[181px] text-yellow-400 left-[235px] font-medium">pt</div>
        <b className="absolute top-[167px] text-yellow-400 left-[175px] text-[32px]">100</b>
        <div className="absolute top-[286px] left-[61px] rounded-[22px] bg-white shadow-[0px_6px_19px_rgba(0,_0,_0,_0.12)] w-[305px] h-[159px] text-gold">
          <div className="absolute top-[23px] left-[13px] w-[110px] h-[49px]">
            <div className="absolute bg-yellow-400 top-[8px] left-[0px] rounded-[50%] bg-gold w-3 h-3" />
            <div className="absolute top-[0px] text-yellow-400 left-[20px] font-medium">
              100%
            </div>
            <div className="absolute top-[25px] left-[16px] text-base text-black">
              Completion
            </div>
          </div>
          <div className="absolute top-[99px] left-[13px] w-[76px] h-[50px] text-forestgreen">
            <div className="absolute  bg-green-400 top-[7px] left-[0px] rounded-[50%] bg-forestgreen w-3 h-3" />
            <div className="absolut text-green-400 top-[0px] left-[18px] font-medium">13</div>
            <div className="absolute top-[26px] text-green-400 left-[16px] text-base text-gray-100">
              Correct
            </div>
          </div>
          <div className="absolute top-[98px] left-[169px] w-[71px] h-[51px] text-tomato">
            <div className="absolute bg-red-400 top-[8px] left-[0px] rounded-[50%] bg-tomato w-3 h-3" />
            <div className="absolute  text-red-400 top-[0px] left-[21px] font-medium">07</div>
            <div className="absolute  top-[27px] left-[18px] text-red-400 text-base ">
              Wrong
            </div>
          </div>
          <div className="absolute top-[23px] left-[169px] w-[131px] h-[49px]">
            <div className="absolute bg-yellow-400 top-[8px] left-[0px] rounded-[50%] bg-gold w-3 h-3" />
            <div className="absolute text-yellow-400 top-[0px] left-[21px] font-medium">20</div>
            <div className="absolute top-[25px] left-[15px] text-base text-black">
              Total Question
            </div>
          </div>
        </div>
        <div className="absolute top-[66px] left-[60px] flex flex-col items-start justify-start p-[5px]">
          <img className="relative w-[22px] h-5" alt="" src="/vector.svg" />
        </div>
      </div>
      <div className="absolute text-black top-[456px] left-[19px] w-[308px] h-[75px] overflow-hidden">
        <button className="cursor-pointer text-center text-black [border:none] p-0 bg-[transparent] absolute top-[52px] left-[100px] text-mini font-poppins  text-center inline-block">
          Review 
        </button>
        <button className="cursor-pointer text-center text-black [border:none] p-0 bg-[transparent] absolute top-[52px] left-[218px] text-mini font-poppins  text-center inline-block">
          Share Score
        </button>
        <div className="absolute top-[0px] left-[0px] w-[79px] h-[75px]">
          <img
            className="absolute top-[0px] left-[15px] w-[45px] h-[45px]"
            alt=""
            src="/ellipse-13.svg"
          />
          <img
            className="absolute h-[28%] w-[26.58%] top-[16%] right-[39.24%] bottom-[56%] left-[34.18%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector1.svg"
          />
          <button className=" text-black cursor-pointer text-center [border:none] p-0 bg-[transparent] absolute top-[52px] left-[0px] text-mini font-poppins  text-center inline-block">
            Play Again
          </button>
        </div>
        <img
          className="absolute top-[0px] left-[137px] w-[45px] h-[45px]"
          alt=""
          src="/group-5.svg"
        />
        <img
          className="absolute top-[0px] left-[245px] w-[45px] h-[45px]"
          alt=""
          src="/group-6.svg"
        />
      </div>
      <div className="absolute top-[564px] left-[16px] w-[322px] h-[76px] overflow-hidden text-mini ">
        <button className="text-black cursor-pointer [border:none] text-center p-0 bg-[transparent] absolute top-[53px] left-[141px] text-mini font-poppins  text-center inline-block">
          Home
        </button>
        <button className="text-black cursor-pointer [border:none] text-center p-0 bg-[transparent] absolute top-[53px] left-[225px] text-mini font-poppins text-center inline-block">
          Leaderboard
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[30px] left-[46px] text-mini font-dm-sans text-center inline-block">{` `}</button>
        <div className="absolute top-[0px] left-[0px] w-[102px] h-[76px]">
          <img
            className="absolute top-[0px] left-[18px] w-[45px] h-[45px]"
            alt=""
            src="/group-7.svg"
          />
          <div className="absolute top-[53px] text-center text-black left-[0px]">Generate PDF</div>
        </div>
        <img
          className="absolute top-[5px] left-[140px] w-[45px] h-[45px]"
          alt=""
          src="/group-3.svg"
        />
        <img
          className="absolute top-[4px] left-[247px] w-[45px] h-[45px]"
          alt=""
          src="/group-4.svg"
        />
      </div>
    </div>
  );
};

export default QuizAppUIDesign;
