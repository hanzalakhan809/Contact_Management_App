import { useLocation, useNavigate } from 'react-router-dom';
import { Contact } from '../interfaces/contact';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

export default function ViewContactDetails() {

  const location = useLocation();
  const navigate = useNavigate()
  const contact: Contact = location.state;


  return (
    <main className='w-full  bg-[#f8fafe] h-screen'>
      {/* CARD HEAD COVER */}
      <div className='flex h-[71px] md:h-[169px] mx-4 w-auto bg-[#1E2875] rounded-[2.78px]  md:rounded-lg md:p-4 p-3 justify-between items-start'>
        <p className='text-white  text-xs  md:text-lg font-medium  '>{`${contact.firstName} ${contact.lastName}`}</p>
        <ArrowLeftIcon className='text-white  w-4 md:w-5  font-medium cursor-pointer' onClick={() => navigate(-1)} />

      </div>




      <div className='flex   m-[40px]  rounded-[7.125px] bg-[#FFF] border border-[#EBEBEE]   -mt-[30px] md:-mt-20 p-5 md:m-16 shadow-lg mb-10'>

        <div className='flex flex-col gap-5'>
          <p><b>First Name</b> {contact.firstName}</p>
          <p><b>Last Name</b> {contact.lastName}</p>
          <p><b>Mobile. No.</b> {contact.mobileNumber}</p>
          <p><b>Relation</b> {contact.relation}</p>
          <p><b>Status</b> {contact.status}</p>
        </div>

        <div className="w-[35%] m-auto">
          {/* <img src={contacts.profilePhotoUrl} alt="" className="w-full h-full bg-contain " /> */}
          <img src="/assets/profilePhoto.svg" alt="" className="w-full h-full bg-contain " />
        </div>
      </div>




    </main>
  )
}
