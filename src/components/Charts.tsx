import LineChartComponent from './LineChartComponent';
import Map from './Map'


export default function Charts() {

  return (
    <main className='w-full min-h-screen bg-[#f8fafe]'>

      {/* CARD HEAD COVER */}
      <div className='h-[71px]  mx-4 w-auto bg-[#1E2875] rounded-[2.78px]  md:rounded-lg md:p-4 p-3'>
        <p className='text-white text-xs md:text-lg font-medium'>{"My Connections"}</p>
      </div>

      <div>
        {/* CARD CONTAINER 1 */}
        <div className="w-full flex flex-wrap    md:p-4 p-3 justify-center md:justify-center  ">
          {/* CONNECTION CARD1 */}
          <h1 className="  mx-auto md:ml-5 mt-10 text-xl mb-5 ">{"Charts"}</h1>

          <div className="flex w-full m-3 h-auto p-5 rounded-md shadow-sm border border-[#CECECE] text-sm " >
            <LineChartComponent />
          </div>
        </div>


        {/* CARD CONTAINER 2 */}
        <div>
          <div className="w-full flex flex-wrap    md:p-4 p-3 justify-center md:justify-center">
            <h1 className="  mx-auto md:ml-5 mt-10 text-xl ">{"Maps"}</h1>
          </div>
          <div className="flex w-auto m-5 h-auto p-5 rounded-md shadow-sm border border-[#CECECE] text-sm " >
            <Map />
          </div>

        </div>
      </div>






    </main>
  )
}
