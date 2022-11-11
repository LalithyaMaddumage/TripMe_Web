import React , {useState ,useEffect}from 'react'
import axios from 'axios';
import MaterialTable from "material-table";
import { Row , Col,Card,Form,Button ,Modal} from 'react-bootstrap';
import { CusHeader } from '../Header/cusHeader';
import { Footer } from '../Footer/Footer';
import UpdateBooking from './updateBooking';

export default function Booking() {

  const[bookingData,setBData]=useState([]);

  const [StateUpdate, setStateUpdate] = useState(false)
  const [BookingUpdate, setBookinUpdate] = useState()




  useEffect(()=>{
    axios.get("http://localhost:8070/booking/allBookings").then((res)=>{
        console.log(res.data);
        setBData(res.data);
    }).catch((err)=>{
        alert(err.msg);
    })
      },[])


  return (
    <div >
      
        <CusHeader></CusHeader>
        <div className='container'>

        <div className=' container-fluid mt-5 '>
        <MaterialTable  style={{background:"#E3ECFF"}}

          title="All Ticket Bookings "

          columns={[
            { title: "Status", field: "Status" },
            { title: "Customer Name", field: "CustomerName" },
            // { title: "Customer ID", field: "id" },
            { title: "Bus Service", field: "BusService" },
            { title: "Time", field: "Time" },
            { title: "Entry", field: "PickUp" },
            { title: "Exit", field: "Destination"},
            
          ]}

          data={bookingData}
        


          actions={[
            {
                icon: () => <button class="btn btn-sm btn-outline-warning">Approve Now</button>,
                onClick: (event, rowData) => {
                  setBookinUpdate(rowData); //setTransportDetailswithID
                  setStateUpdate(true); //setStatetrue//setStatetrue
                }
            },

          ]}
          options={{
            // selection: true,
            exportButton: true,
            sorting: true,
            search:true,
            filtering : false,
            actionsColumnIndex: -1,
         
        }}
         
        />

         {/* update modal */}
         <Modal show={StateUpdate} size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
          >
                    <Modal.Body>
                        <UpdateBooking data={BookingUpdate} cl={() => setStateUpdate(false)} />
                    </Modal.Body>
          </Modal>
      </div>
    
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer></Footer>

    </div>
  )
}
