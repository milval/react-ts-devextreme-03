import React from 'react'

import Form from 'devextreme-react/form';
 
const employee = {
    name: 'John Heart',
    position: 'CEO',
    hireDate: new Date(2012, 4, 13),
    officeNumber: 901,
    notes: 'John has been in the Audio/Video industry since 1990.'
};
 


const FormTest2 = () => {

    

  return (
    <React.Fragment>
        <div className={'content-block dx-card responsive-paddings'}>
            <Form 
                formData={employee}
            />

        </div>

    </React.Fragment>
  )
}

export default FormTest2