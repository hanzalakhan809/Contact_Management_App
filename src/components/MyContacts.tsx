import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {  message, Popconfirm } from 'antd';
import { PencilSquareIcon, TrashIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline'
import Modal from './Modal'
import { Contact } from '../interfaces/contact';
import { Contacts } from '../interfaces/contact';



export default function MyContacts() {

  const navigate = useNavigate();

  // HERE I USED DUMMY DATA TO BECAUSE OF BACKEND API WAS NOT CREATED
  // IF I HAVE API FOR TO GET DATA THEN I HAVE USED THAT DATA GETTING FROM API INSTEAD OF DUMMY DATA
  const dummyContacts: Contacts = [
    {
      firstName: "Rahul",
      lastName: "Kumar",
      mobileNumber: '8090677346',
      email: "hanzal@gmail.com",
      relation: "friend",
      status: "Active",
      profilePhotoUrl: ""
    },
    {
      firstName: "Priya",
      lastName: "Sharma",
      mobileNumber: '8023677356',
      email: "priya@gmail.com",
      relation: "colleague",
      status: "Inactive",
      profilePhotoUrl: ""
    },
    {
      firstName: "Amit",
      lastName: "Singh",
      mobileNumber: '8090677546',
      email: "amit@gmail.com",
      relation: "family",
      status: "Active",
      profilePhotoUrl: ""
    },
    {
      firstName: "Deepak",
      lastName: "Verma",
      mobileNumber: '8090677888',
      email: "deepak@gmail.com",
      relation: "friend",
      status: "Inactive",
      profilePhotoUrl: ""
    },
    {
      firstName: "Anjali",
      lastName: "Deshmukh",
      mobileNumber: '8090677111',
      email: "anjali@gmail.com",
      relation: "family",
      status: "Active",
      profilePhotoUrl: ""
    },
    {
      firstName: "Karan",
      lastName: "Thakur",
      mobileNumber: '8090677222',
      email: "karan@gmail.com",
      relation: "colleague",
      status: "Active",
      profilePhotoUrl: ""
    },
    {
      firstName: "Lakshmi",
      lastName: "Roy",
      mobileNumber: '8090677333',
      email: "lakshmi@gmail.com",
      relation: "friend",
      status: "Inactive",
      profilePhotoUrl: ""
    },
    {
      firstName: "Varun",
      lastName: "Dutta",
      mobileNumber: '8090677444',
      email: "varun@gmail.com",
      relation: "family",
      status: "Active",
      profilePhotoUrl: ""
    },
    {
      firstName: "Meera",
      lastName: "Pandey",
      mobileNumber: '8090677555',
      email: "meera@gmail.com",
      relation: "colleague",
      status: "Inactive",
      profilePhotoUrl: ""
    },
    {
      firstName: "Rohit",
      lastName: "Mehra",
      mobileNumber: '8090677666',
      email: "rohit@gmail.com",
      relation: "family",
      status: "Active",
      profilePhotoUrl: ""
    },
    {
      firstName: "Sakshi",
      lastName: "Gupta",
      mobileNumber: '8090677777',
      email: "sakshi@gmail.com",
      relation: "friend",
      status: "Active",
      profilePhotoUrl: ""
    },
    {
      firstName: "Aarav",
      lastName: "Malik",
      mobileNumber: '8090677888',
      email: "aarav@gmail.com",
      relation: "family",
      status: "Inactive",
      profilePhotoUrl: ""
    },
    {
      firstName: "Sanjana",
      lastName: "Kapoor",
      mobileNumber: '8090677999',
      email: "sanjana@gmail.com",
      relation: "colleague",
      status: "Active",
      profilePhotoUrl: ""
    },
    {
      firstName: "Ravi",
      lastName: "Patel",
      mobileNumber: '8090677000',
      email: "ravi@gmail.com",
      relation: "friend",
      status: "Active",
      profilePhotoUrl: ""
    },
    {
      firstName: "Poonam",
      lastName: "Kumari",
      mobileNumber: '8090677112',
      email: "poonam@gmail.com",
      relation: "family",
      status: "Inactive",
      profilePhotoUrl: ""
    }
  ];

  // LOCAL TYPES
  type ModalPassingType = string | null
  type ModalPassingContact = Contact | false

  const [contacts, setContacts] = useState(dummyContacts);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalPassingType, setModalPassingType] = useState<ModalPassingType>(null);
  const [modalPassingContact, setModalPassingContact] = useState<ModalPassingContact>(false);


  // BUTTONS ON CARD
  const handleCreateNewContact = () => {
    setModalPassingType("createNewContact");
    setIsModalVisible(true);
  }

  const handleViewContact = (contact: any | Contact) => {
    navigate('/ViewContactDetails', { state: contact })
  }
  const handleEditContact = (contact: Contact) => {
    setModalPassingType("editContact");
    setModalPassingContact(contact);
    setIsModalVisible(true);
  }

  const handleDeleteContact = (contact: Contact) => {
    const afterDeletingContact = contacts.filter(item => item.mobileNumber !== contact.mobileNumber);
    setContacts(afterDeletingContact);
  }



  // POPCONFIRM HANDLE ANTD
  const confirm = (contact: Contact) => {
    handleDeleteContact(contact);
    message.success('Contact Deleted Successfully');
  };

  const cancel = () => {
  };


  return (

    <main className='w-full min-h-screen bg-[#f8fafe]'>

      {/* CARD HEAD COVER */}
      <div className='h-[71px]  mx-4 w-auto bg-[#1E2875] rounded-[2.78px]  md:rounded-lg md:p-4 p-3'>
        <p className='text-white text-xs md:text-lg font-medium'>My Connections</p>
      </div>

      {/* CARD CONTAINER 1 */}
      <div className="w-full flex flex-wrap gap-6 md:p-4 p-3 justify-center md:justify-start ">
        {/* CONNECTION CARD1 */}
        <div className='w-full flex'>
          <button className=' bg-[#BAB6EB]   rounded-[64.587px] px-2 py-1 h-min text-xs font-medium'
            onClick={() => handleCreateNewContact()} >Create New Contact</button>
        </div>

        <Modal
          title={modalPassingType === "createNewContact" ? "Create New Contact" : "Edit Contact"}
          openModal={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          onClose={() => setIsModalVisible(false)}
          type={modalPassingType}
          contacts={contacts}
          setContacts={setContacts}
          contact={modalPassingContact}
          setModalPassingType={setModalPassingType}
          setModalPassingContact={setModalPassingContact}
        />

        {
          contacts.map((contact, index) => {
            return (
              <div className="flex w-[250px] h-[119px] rounded-md shadow-sm border border-[#CECECE] text-sm " key={index}>
                <div className="w-[65%] flex flex-col gap-2 p-2 m-auto">
                  <h1>{`${contact.firstName} ${contact.lastName}`}</h1>
                  <p className="text-xs text-slate-500">{contact.status}</p>
                  <p className="text-xs text-slate-500"><b>Mobile.</b> {contact.mobileNumber}</p>
                  {/* VIEW DETAILS BUTTON */}
                  <div className='flex gap-3  '>
                    <div className=' flex bg-[#BAB6EB] rounded-[50%] w-6 h-6 cursor-pointer' onClick={() => handleViewContact(contact)} >
                      <ExclamationCircleIcon className='w-4 text-white m-auto' />
                    </div>
                    {/* EDIT BUTTON */}
                    <div className=' flex bg-[#B6EBD3] rounded-[50%] w-6 h-6 cursor-pointer' onClick={() => handleEditContact(contact)} >
                      <PencilSquareIcon className='w-4 m-auto text-black' />
                    </div>
                    {/* DELETE BUTTON */}

                    <Popconfirm
                      title="Delete the Contact"
                      description="Are you sure to delete this contact?"
                      onConfirm={() => confirm(contact)}
                      onCancel={() => cancel}
                      okText="Yes"
                      cancelText="No"
                    >
                      <div className=' flex bg-[#EBB6BA] rounded-[50%] w-6 h-6 cursor-pointer' >
                        <TrashIcon className='w-4 text-white m-auto' />
                      </div>
                    </Popconfirm>
                  </div>

                </div>
                <div className="w-[35%] m-auto">
                  {/* <img src={contacts.profilePhotoUrl} alt="" className="w-full h-full bg-contain " /> */}
                  <img src="/assets/profilePhoto.svg" alt="" className="w-full h-full bg-contain " />
                </div>
              </div>
            )
          })
        }
      </div>

    </main>
  )
}
