
import { FaUserTie } from 'react-icons/fa'; 
import {RiDashboardFill,RiLogoutBoxFill} from 'react-icons/ri'
import {FaUsers} from  'react-icons/fa'
import { Doughnut, Bar } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);
const AdminHomeComponent = () => {
  const Doughnutdata = {
    labels: ['Non-Premium users', 'Premium users'],
    datasets: [
        {
            data: [10,20],
            backgroundColor: ['#FF6384', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#FFCE56'],
        },
    ],
};

const BarData = {
    labels: ["One","Two"],
    datasets: [
        {
            label: 'Sales',
            data: [1,2],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
        },
    ],
};
const options = {
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};
  return (
    <div className=" flex w-full min-h-full">
      <div className="w-1/5 ">
        <div className=" bg-white mt-6 shadow-2xl  ">

          <div className='flex flex-col justify-center items-center text-6xl pt-10 pb-10 '>
            <div className=' '><FaUserTie/></div>
            <div className='text-3xl'>name</div>
            <div className='text-lg'>Admin</div>
          </div>

          
          <div className='flex justify-center border-b-2 border-black text-xl  '>
            
            <div className='w-1/4 '></div>
            <div className='w-3/4 flex gap-3' >
             <div className='mt-1 text-2xl'><RiDashboardFill/></div>
             <div className=" "> Dashboard</div>
            </div>

          </div>
          <div className='flex justify-center border-b-2 border-black text-xl '>
            
            <div className='w-1/4 '></div>
            <div className='w-3/4 flex gap-3' >
             <div className='mt-1 text-3xl '><FaUsers/></div>
             <div className=" "> Users</div>
            </div>

          </div>
          <div className='flex justify-center border-b-2 border-black text-xl '>
            
            <div className='w-1/4 '></div>
            <div className='w-3/4 flex gap-3' >
             {/* <div className='mt-1 '><FaUsers/></div> */}
             <div className=" "> Experts</div>
            </div>

          </div>
          <div className='flex justify-center  text-xl '>
            
            <div className='w-1/4 '></div>
            <div className='w-3/4 flex gap-3' >
             <div className='mt-1 text-3xl'><RiLogoutBoxFill/></div>
             <div className=" "> Logout</div>
            </div>

          </div>



          
         
          

        </div>
      </div>

      <div className="w-4/5 h-32   ">
        
           <div className=" mt-14 text-xl pl-8 mb-6">Dashboard</div>

           <div className="flex gap-2 px-8">
          <div className="bg-amber-100 w-1/4 shadow-2xl">
            <div className="flex flex-col p-4">
              <p>kkkkkkkkkkkkkk</p>
              <p>Total Rescued pets</p>

            </div>
          </div>

          <div className="bg-amber-100 w-1/4 shadow-2xl">
            <div className="flex flex-col p-4">
              <p>kkkkkkkkkkkkkk</p>
              <p>Total Rescued pets</p>

            </div>
          </div>

          <div className="bg-amber-100 w-1/4 shadow-2xl">
            <div className="flex flex-col p-4">
              <p>kkkkkkkkkkkkkk</p>
              <p>Total Rescued pets</p>

            </div>
          </div>

          <div className="bg-amber-100 w-1/4 shadow-2xl">
            <div className="flex flex-col p-4">
              <p>kkkkkkkkkkkkkk</p>
              <p>Total Rescued pets</p>

            </div>
          </div>
           </div>
          
       
       
       <div className='flex  gap-2 p-7'>

        <div className='bg-red-200 flex flex-col  w-2/5 shadow-2xl '>
          <div><Doughnut data={Doughnutdata} className='my-3' /></div>
         
           </div>
        <div className='bg-green-200 w-3/5'>
          <div>Monthly rescued pets</div>
          
          <div><Bar data={BarData} options={options} /></div>
          </div>

       </div>
       
        
      </div>

    </div>
  );
};

export default AdminHomeComponent;
