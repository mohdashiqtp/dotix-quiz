import Image from 'next/image'

export default function Home() {
  return (
    <div className=' flex justify-center items-center w-full h-full'>
      <div className="relative rounded-11xl bg-white w-full h-[680px] overflow-hidden text-center text-mini text-gray-100 font-poppins">
        <div className="absolute top-[0px] left-[0px] bg-yellow-300 rounded-md bg-gold-100 w-[337px] h-[680px]" />
        <div className="header">
          
        <a href='/' className="absolute top-[29px] left-[274px] rounded-[50%] bg-gray-300 w-11 h-11" />
        <img
              className="absolute top-[32px] left-[277px] rounded-[50%] w-[38px] h-[38px] object-cover"
              alt=""
              src="/ellipse-13@2x.png"
            />
          <div className="absolute top-[32px] left-[15px] flex flex-col items-start justify-start p-[5px]">
            
            <img className="relative w-[22px] h-5" alt="" src="/vector.svg" />
            
          </div>

        </div>
        <div className='heading'>
          <button className="absolute top-[72px] left-[13px] text-[24px] text-white">
            Today
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[76px] left-[110px] text-xl font-poppins text-white text-center inline-block">
            Month
          </button>
          <button className="absolute top-[76px] left-[187px] text-xl text-white">
            All Times
          </button>
        </div>
        <div className='toper'>
          <img
            className="absolute top-[114px] left-[140px] rounded-[50%] w-14 h-[53px] object-cover"
            alt=""
            src="/ellipse-21@2x.png"
          />
          <img
            className="absolute top-[157px] left-[244px] rounded-[50%] w-14 h-[53px] object-cover"
            alt=""
            src="/ellipse-22@2x.png"
          />
          <img
            className="absolute top-[157px] left-[40px] rounded-[50%] w-14 h-[53px] object-cover"
            alt=""
            src="/ellipse-23@2x.png"
          />
          <img
            className="absolute top-[167px] left-[128px] w-[98px] h-[211px]"
            alt=""
            src="/rectangle-8.svg"
          />
          <img
            className="absolute top-[220.74px] left-[26.21px] w-[122.38px] h-[163.32px]"
            alt=""
            src="/rectangle-9.svg"
          />
          <img
            className="absolute top-[200.64px] left-[202.55px] w-[110.49px] h-[185px]"
            alt=""
            src="/rectangle-10.svg"
          />
          <b className="absolute top-[200px] left-[151px] text-[80px] inline-block text-white w-[34px] h-[104px]">
            1
          </b>
          <b className="absolute top-[216.14px] left-[55px] text-56xl inline-block text-white w-[34px] h-[104px] [transform:_rotate(-6.99deg)] [transform-origin:0_0]">
            2
          </b>
          <b className="absolute top-[207px] left-[254.67px] text-56xl inline-block text-white w-[34px] h-[104px] [transform:_rotate(10.9deg)] [transform-origin:0_0]">
            3
          </b>
          <div className="absolute top-[294px] left-[157px] text-white">453pt</div>
          <div className="absolute top-[294px] left-[237px] text-white">433pt</div>
          
          <div className="absolute top-[299px] left-[67px] text-white">442pt</div>
          

        </div>

        <div className="absolute top-[88px] left-[279px] rounded-[50%] bg-gray-200 w-[90px] h-[90px] mix-blend-soft-light" />
        <div className="absolute top-[-34px] left-[78px] rounded-[50%] bg-gray-200 w-[90px] h-[90px] mix-blend-soft-light" />
        <div className="absolute top-[16px] left-[207px] rounded-[50%] bg-gray-200 w-10 h-10 mix-blend-soft-light" />
        <div className="absolute top-[69px] left-[-45px] rounded-[50%] bg-gray-200 w-[90px] h-[90px] mix-blend-soft-light" />

        <div className="absolute top-[326px] left-[0px] rounded-[25px] bg-white w-[337px] h-[356px]" />

        <div className='text-black other-topers'>
          <div className="absolute top-[360px] left-[22px]">04</div>
          <img
            className="absolute top-[350px] left-[63px] rounded-[50%] w-12 h-12 object-cover"
            alt=""
            src="/ellipse-24@2x.png"
          />
          <div className="absolute top-[360px] left-[140px]">Moni</div>
          <div className="absolute top-[362px] left-[260px] w-[60px] h-[27px]">
            <div className="absolute top-[0px] left-[0px] rounded-xl bg-gold-200 w-[60px] h-[26px]" />
            <div className="absolute top-[4px] left-[10px]">223pt</div>
          </div>

        </div>
      </div>

    </div>
  )
}
