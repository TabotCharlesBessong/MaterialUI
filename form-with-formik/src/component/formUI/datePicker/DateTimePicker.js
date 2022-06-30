

import React from 'react'
import {TextField} from '@material-ui/core'
import { useField } from 'formik'


const DateTimePicker = ({
  name,
  ...otherProps
}) => {

  const [field,meta] = useField(name)

  const configDatePicker = {
    ...field,
    ...otherProps,
    type:'date',
    variant:'outlined',
    fullWidth:true,
    inputLabelProps:{
      shrink:true
    }
  }

  if(meta && meta.touched && meta.error){
    configDatePicker.error = true
    configDatePicker.helperText = meta.error
  }
  return (
    <TextField
      {...configDatePicker}
    />
  )
}

export default DateTimePicker