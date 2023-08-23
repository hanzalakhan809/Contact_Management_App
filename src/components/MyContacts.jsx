import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { PencilSquareIcon, TrashIcon, PencilIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline'



export default function MyContacts() {
  const navigate = useNavigate();
  // const [show, setShow] = useState(AuthService.isAuthenticated())
  // if (show === false) {
  //   router.push('/')
  // }


  const dummyData = {
    name: "Hanzala Khan",
    email: "han@gmail.com",
    phone: "+91 49652845732",
    about: "Lorem ipsum dolor sit amet consectetur Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur",
    skills: ["Next Js", "Typescript"],
    professionalDetails: "This are the professional details shown to users in the app.",
    certification: { certificationName: "Python", certificationInstitute: "Coding Ninjas" },
    experiences: [{
      fromYearToYear: "7 Years (2014-2021) Full-time",
      organizationWithRole: "Oruphones -- Full Stack Developer"
    },
    {
      fromYearToYear: "7 Years (2014-2021) Full-time",
      organizationWithRole: "Oruphones -- Full Stack Developer"
    }],
    higherEducation: {
      higherEducationInstitute: "IIT HYDERABAD",
      fromYearToYear: "(2010-2914)",
      course: "Btech",
      aboutEducation: "Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur."
    },
    myConnections: [{
      connectionName: "Rahul",
      connectionPosition: "App Developer @ Mobilicis"
    },
    {
      connectionName: "Cristian",
      connectionPosition: "Software Engineer @ Mindtrot"
    },
    {
      connectionName: "Andrew",
      connectionPosition: "App Developer @ BlackCoffer"
    },
    {
      connectionName: "Sophia",
      connectionPosition: "UI/UX Designer @ Creatify"
    },
    {
      connectionName: "Alex",
      connectionPosition: "Backend Developer @ Datawise"
    },
    {
      connectionName: "Emma",
      connectionPosition: "Data Scientist @ Analytica"
    },
    {
      connectionName: "Michael",
      connectionPosition: "Cloud Engineer @ CloudSafe"
    },
    {
      connectionName: "Isabella",
      connectionPosition: "DevOps Engineer @ Pipeline"
    },
    {
      connectionName: "Daniel",
      connectionPosition: "QA Tester @ BugHunter"
    },
    {
      connectionName: "Olivia",
      connectionPosition: "Product Manager @ Productify"
    }],
    suggestionConnectins: [
      {
        connectionName: "David",
        connectionPosition: "Cybersecurity Expert @ SecureNet"
      },
      {
        connectionName: "Mia",
        connectionPosition: "Frontend Developer @ Webify"
      },
      {
        connectionName: "Samuel",
        connectionPosition: "Database Administrator @ DBMasters"
      }]
  }

  const dummyContacts = [
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




  const [myProfileData, setMyProfileData] = useState(dummyData)
  const [updateMyprofileData, setUpdateMyProfileData] = useState();

  const [contacts, setContacts] = useState(dummyContacts);


  // useEffect(() => {
  //   AuthService.getMyProfileData().then((data) => {
  //     setMyProfileData(data)
  //   })
  // }, [])


  // useEffect(() => {
  //   if (!updateMyprofileData) return;
  //   setMyProfileData(updateMyprofileData);
  //   AuthService.updateUserProfile(updateMyprofileData).then((response) => {
  //     console.log(response);
  //   });

  // }, [updateMyprofileData]);


  const handleRemoveConnection = (myConnectionIndex) => {
    const afterRemovingConnection = myProfileData.myConnections.filter((connection, index) => index !== myConnectionIndex);
    setUpdateMyProfileData({ ...myProfileData, myConnections: afterRemovingConnection })
  }


  const handleToConnect = (suggestionConnectionsIndex) => {
    // Get connection object from suggestionConnections
    const connectionToAdd = myProfileData.suggestionConnectins[suggestionConnectionsIndex];

    //  Remove the connection obj from suggestionConnections
    const updatedSuggestionConnections = myProfileData.suggestionConnectins.filter((_, index) => index !== suggestionConnectionsIndex);

    // Append the Remove connection object to myConnections
    const updatedMyConnections = [...myProfileData.myConnections, connectionToAdd];

    // Update state with the new added and Remove Connection
    setUpdateMyProfileData(prevState => ({
      ...prevState,
      suggestionConnectins: updatedSuggestionConnections,
      myConnections: updatedMyConnections
    }));
  }


  const handleViewContact = (contact) => {

  }
  const handleEditContact = (contact) => {

  }
  const handleDeleteContact = (contact) => {
    const afterDeletingContact = contacts.filter(item => item.mobileNumber !== contact.mobileNumber);
    setContacts(afterDeletingContact)
  }

  return (
    // show &&
    <main className='w-full min-h-screen bg-[#f8fafe]'>

      {/* CARD HEAD COVER */}
      <div className='h-[71px]  mx-4 w-auto bg-[#1E2875] rounded-[2.78px]  md:rounded-lg md:p-4 p-3'>
        <p className='text-white text-xs md:text-lg font-medium'>My Connections</p>
      </div>

      {/* CARD CONTAINER 1 */}
      <div className="w-full flex flex-wrap gap-6    md:p-4 p-3 justify-center md:justify-start ">
        {/* CONNECTION CARD1 */}
        <div className='w-full flex'>
          <button className=' bg-[#BAB6EB]   rounded-[64.587px] px-2 py-1 h-min text-xs font-medium'>Create New Contact</button>
        </div>
        {
          contacts.map((contact, index) => {
            return (
              <div className="flex w-[250px] h-[119px] rounded-md shadow-sm border border-[#CECECE] text-sm " key={index}>
                <div className="w-[65%] flex flex-col gap-2 p-2 m-auto">
                  <h1>{`${contact.firstName} ${contact.lastName}`}</h1>
                  <p className="text-xs text-slate-500">{contact.status}</p>
                  <p className="text-xs text-slate-500"><b>Mobile.</b> {contact.mobileNumber}</p>
                  {/* <button className=' bg-[#BAB6EB]   rounded-[64.587px] px-4 py-1 h-min text-xs font-medium' onClick={() => handleRemoveConnection(index)}>
                    Remove Connection
                  </button> */}
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
                    <div className=' flex bg-[#EBB6BA] rounded-[50%] w-6 h-6 cursor-pointer' onClick={() => handleDeleteContact(contact)} >
                      <TrashIcon className='w-4 text-white m-auto' />
                    </div>
                  </div>

                </div>
                <div className="w-[35%] m-auto">
                  <img src="/assets/profilePhoto.svg" alt="" className="w-full h-full bg-contain " />
                </div>
              </div>
            )
          })
        }
      </div>





      {/* CARD CONTAINER 2 */}
      <div className="w-full flex">
        <h1 className="  mx-auto md:ml-5 mt-10 text-xl ">People You can Also Connect</h1>
      </div>
      <div className="w-full flex flex-wrap gap-6    md:p-4 p-3 justify-center md:justify-start ">


        {
          myProfileData.suggestionConnectins.map((connection, index) => {
            return (
              <div className="flex w-[250px] h-[119px] rounded-md shadow-sm border border-[#CECECE] text-sm " key={index}>
                <div className="w-[65%] flex flex-col gap-3 p-2 m-auto">
                  <h1>{connection.connectionName}</h1>
                  <p className="text-xs text-slate-500">{connection.connectionPosition}</p>
                  <button className=' bg-[#BAB6EB]   rounded-[64.587px] px-2 py-1 h-min text-xs font-medium' onClick={() => handleToConnect(index)}>Connect</button>
                </div>
                <div className="w-[35%] m-auto">
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
