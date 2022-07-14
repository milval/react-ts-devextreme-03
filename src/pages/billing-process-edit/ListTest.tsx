import React from "react";

import { List } from 'devextreme-react';
import { fruits, products, products2 } from "./ListData";

// const ListItem = (data: any) => {
//     return (
//         <div>
//             <b>{ data.name }</b>
//             <br />
//             <p style={{ margin: '0px' }}>{ data.count }</p>
//         </div>
//     );
// };

const ListTest = () => {
  return (
    <React.Fragment>
        <div className={'content-block dx-card responsive-paddings'}>
            
                    <List
                        dataSource={products}
                        //itemRender={ListItem}
                        displayExpr="Name"
                        selectionMode="multiple"
                        showSelectionControls={true}
                    >
                    </List>

                
                    

        </div>
    </React.Fragment>
  )
}

export default ListTest