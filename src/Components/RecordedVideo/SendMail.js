
const  SendMail = ({email, closeModal}) => {

    return (
        <div className="w-full h-screen bg-[#000]/20 flex justify-center absolute top-0 left-0 font-workSans">
        <div className="bg-[#F2F4F7] rounded-3xl sticky h-fit mt-[300px] pt[20px] pb-[50px]  flex flex-col justify-center items-center text-center">
            <svg
                onClick={closeModal}
                className="absolute top-16 right-16 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none">
                <path d="M19.9997 37.4166C10.3925 37.4166 2.58301 29.6071 2.58301 19.9999C2.58301 10.3927 10.3925 2.58325 19.9997 2.58325C29.6069 2.58325 37.4163 10.3927 37.4163 19.9999C37.4163 29.6071 29.6069 37.4166 19.9997 37.4166ZM19.9997 4.08325C11.2235 4.08325 4.08301 11.2238 4.08301 19.9999C4.08301 28.7761 11.2235 35.9166 19.9997 35.9166C28.7758 35.9166 35.9163 28.7761 35.9163 19.9999C35.9163 11.2238 28.7758 4.08325 19.9997 4.08325Z" fill="#292D32" stroke="#120B48" /><path d="M15.8127 25.2465L15.8066 25.2526L15.8007 25.2589C15.6772 25.3913 15.485 25.4668 15.2829 25.4668C15.0917 25.4668 14.9045 25.3978 14.7532 25.2465C14.4651 24.9585 14.4651 24.4751 14.7532 24.187L24.1865 14.7537C24.4746 14.4656 24.958 14.4656 25.2461 14.7537C25.5341 15.0417 25.5341 15.5251 25.2461 15.8132L15.8127 25.2465Z" fill="#292D32" stroke="#120B48" /><path d="M24.7163 25.4668C24.5251 25.4668 24.3378 25.3978 24.1865 25.2465L14.7532 15.8132C14.4651 15.5251 14.4651 15.0417 14.7532 14.7537C15.0412 14.4656 15.5247 14.4656 15.8127 14.7537L25.2461 24.187C25.5341 24.4751 25.5341 24.9585 25.2461 25.2465C25.0948 25.3978 24.9075 25.4668 24.7163 25.4668Z" fill="#292D32" stroke="#120B48" />
            </svg>
            <img src='./images/email.png' alt="email sent gif" className="w-14 h-14 mb-10 mt-28"/>
            <p className="w-[70%] text-primary-900 text-2xl">Your video link has been sent to <span className="text-#120B48 font-medium">johnmark@gmail.com</span></p>
            <p className="w-[65%] text-[18px] mt-[50px]">
                <span>Would you need to view this video later?</span>
                <span>Save to your account now!</span>
            </p>
            <button type="button" className="text-white font-workSans px-8 py-4 rounded-lg  bg-buttonColor text-base w-fit mx-auto mt-6">Save Video</button>
            <p className="font-semibold text-[#7E7E7E] mt-10">Don’t have an account? <span className="text- colorBlack">Create account</span></p>
        </div>
  </div>

    )
}


export default SendMail ;