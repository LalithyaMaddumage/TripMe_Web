import React from 'react'
import MaterialTable from "material-table";
import { Row , Col,Card,Form,Button} from 'react-bootstrap';

export default function BusService() {
  return (
    <div className='container'>busService
        <div className=' container-fluid mt-5 '>
        <MaterialTable  style={{background:"#E3ECFF"}}

          title="All Transport Details "

          columns={[
            { title: "Action", field: "act" },
            { title: "Adi", field: "name" },
            { title: "Soyadi", field: "surname" },
            { title: "Doğum Yili", field: "birthYear", type: "numeric" },
            {
              title: "Doğum Yeri",
              field: "birthCity",
              lookup: { 34: "İstanbul", 63: "san" },
            },
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
              surname: "Baran",
              birthYear: 1987,
              birthCity: 63,
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
  )
}
