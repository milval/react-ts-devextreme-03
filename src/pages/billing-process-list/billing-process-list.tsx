
import { DataGrid } from 'devextreme-react';
import { Column } from 'devextreme-react/data-grid';
import React, { useState } from 'react';

import './billing-process-list.scss';

const dataSource = [{
    Id: 1,
    Name: 'Milton5',
    LastName: 'Perez',
    Age: 33
},
{
    Id: 2,
    Name: 'Milton5',
    LastName: 'Perez',
    Age: 33
},
{
    Id: 3,
    Name: 'Milton5',
    LastName: 'Perez',
    Age: 33
},
{
    Id: 4,
    Name: 'Milton5',
    LastName: 'Perez',
    Age: 33
},
{
    Id: 5,
    Name: 'Milton5',
    LastName: 'Perez',
    Age: 33
}];

const columns = ['Id', 'Name', 'LastName', 'Age'];

const BillingPprocessList = () => {

    const [data, setData] = useState(dataSource);


  return (
      <React.Fragment>
            <h2 className={'content-block'}>Billing Process List</h2>

            <DataGrid                             
                className={'dx-card wide-card'}
                dataSource={data}
                keyExpr="Id"
                defaultColumns={columns}
                showBorders={true}
            >
                <Column         
                    dataField={'Id'}
                    caption={'ID'}
                />
                 <Column         
                    dataField={'Name'}
                    caption={'Full Name'}
                />
                <Column         
                    dataField={'LastName'}
                    caption={'Last Name'}
                />
                 <Column         
                    dataField={'Age'}
                    caption={'Full Age'}
                />
            </DataGrid>


      </React.Fragment>    
  )
}

export default BillingPprocessList;