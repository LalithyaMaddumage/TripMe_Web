import React from 'react'
import MaterialTable from "material-table";
import { Row , Col,Card,Form,Button} from 'react-bootstrap';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export default function Booking() {
  return (
    <div >
      
        <Header></Header>
        <div className='container'>

        <div className=' container-fluid mt-5 '>
        <MaterialTable  style={{background:"#E3ECFF"}}

          title="All Ticket Bookings "

          columns={[
            { title: "Action", field: "act" },
            { title: "Customer Name", field: "name" },
            { title: "Customer ID", field: "id" },
            { title: "Bus Service", field: "bServ" },
            { title: "Time", field: "time" },
            { title: "Entry", field: "entry" },
            { title: "Exit", field: "exit"},
            

            // {
            //   title: "Time",
            //   field: "time",
            //   lookup: { 8: "8.00 am", 9: "9.00 am" },
            // },
          ]}
          data={[
            {
             act : <Form>
              <Form.Check 
                type="switch"
                id="custom-switch"
                label="Accept"
              /></Form>,
              name: "Mehmet",
              id: "C001",
              bServ: "Tarindu Travels",
              time:"8",
              entry:"Colombo",
              exit:"Kandy",
              
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
