import React from 'react';

const HowitWorks = () => {
  return (
    <div>
              <div className="bg-[#404040] bg-opacity-[10%] h-12"></div>
      <section className=" flex flex-col w-full items-center py-[6.4rem]">
        <h2 className="font-sora font-[700] text-[2.5rem] leading-[3.15rem] text-[#141414]">
          How it works
        </h2>
        <div className="mt-[6rem] flex gap-x-[5.88rem] px-[6.25rem]">
          <div className="flex flex-col gap-y-[2rem] items-center">
            <div className="w-[3.625rem] h-[3.563rem] rounded-[3.75rem] bg-[#120B48] flex items-center justify-center">
              <p className=" font-inte font-[700] text-[2rem] leading-[2.421rem] text-white">
                1
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-inter font-[600] text-[1.75rem] leading-[2.118] text-[#1B233D]">
                Record Screen
              </h3>
              <p className="text-center font-workSans font-[400] text-[1.25rem] leading-[1.891rem] text-[#616163]">
                Click the "Start Recording" button in our extension. choose
                which part of your screen to capture and who you want to send it
                to.
              </p>
              <img src='./images/record.png' alt="record " className="mt-6" />
            </div>
          </div>
          <div className="flex flex-col gap-y-[2rem] items-center">
            <div className="w-[3.625rem] h-[3.563rem] rounded-[3.75rem] bg-[#120B48] flex items-center justify-center">
              <p className=" font-inte font-[700] text-[2rem] leading-[2.421rem] text-white">
                2
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-inter font-[600] text-[1.75rem] leading-[2.118] text-[#1B233D]">
              Share Your Recording
              </h3>
              <p className="text-center font-workSans font-[400] text-[1.25rem] leading-[1.891rem] text-[#616163]">
              We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.
              </p>
              <img src='./images/record.png' alt="record " className="mt-6" />
            </div>
          </div>
          <div className="flex flex-col gap-y-[2rem] items-center">
            <div className="w-[3.625rem] h-[3.563rem] rounded-[3.75rem] bg-[#120B48] flex items-center justify-center">
              <p className=" font-inte font-[700] text-[2rem] leading-[2.421rem] text-white">
                3
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-inter font-[600] text-[1.75rem] leading-[2.118] text-[#1B233D]">
              Learn Effortlessly
              </h3>
              <p className="text-center font-workSans font-[400] text-[1.25rem] leading-[1.891rem] text-[#616163]">
              Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.
              </p>
              <img src='./images/record.png' alt="record" className='mt-6' />
            </div>
          </div>
        </div>
      </section>

</div>


  );
};

export default HowitWorks ;
