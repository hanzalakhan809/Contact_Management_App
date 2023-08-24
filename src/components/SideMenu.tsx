import { useLocation, useNavigate } from 'react-router-dom';

export default function SideMenu() {

    const path = useLocation();
    const navigate = useNavigate();


    return (
        <>
            <section className="w-[350px] cursor-pointer md:flex flex-col gap-8 hidden">

                <div className="flex ">
                    <img src="/assets/chevronRight.svg" alt="" className="w-[14px] -mr-8 ml-auto" />
                    <div className={`flex active:border-3  w-[183px] h-[47px] mx-auto rounded-[8.889px] cursor-pointer ${path.pathname === '/' ? "border border-[#413B89] px-7  " : ""}    `} onClick={() => navigate('/')}>
                        <div className="m-auto h-auto text-5 font-normal ml-4" >{"My Contacts"}</div>
                    </div>
                </div>


                <div className="flex">
                    <img src="/assets/chevronRight.svg" alt="" className="w-[14px] -mr-8 ml-auto" />
                    <div className={`flex active:border-3  w-[183px] h-[47px] mx-auto rounded-[8.889px] cursor-pointer ${path.pathname === '/ChartsAndMaps' ? "border border-[#413B89] px-4  " : ""}   `} onClick={() => navigate('/ChartsAndMaps')} >
                        <div className="m-auto h-auto text-5 font-normal ml-4">{"Charts and Maps"}</div>
                    </div>
                </div>

            </section>
        </>
    )
}
