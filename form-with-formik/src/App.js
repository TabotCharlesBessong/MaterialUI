import React from 'react'
import Header from './component/Header'
import useStyles from './Styles'
import {Grid , Container , Typography} from '@material-ui/core'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import TextFields from './component/formUI/TextField/TextField'
import SelectField from './component/formUI/selectField/SelectField'
import Checkbox from './component/formUI/checkbox/Checkbox'
import countries from './data/countries.json'
import DateTimePicker from './component/formUI/datePicker/DateTimePicker'
import Submit from './component/formUI/submit/Submit'

const INITIAL_FORM_STATE = {
  firstName:'',
  lastName:'',
  email:'',
  phone:'',
  addressLine1:'',
  addressLine2:'',
  city:'',
  state:'',
  country:'',
  arrivalDate:'',
  departureDate:'',
  message:'',
  termsOfService:false
}

const valiadationSchema = Yup.object().shape({
  firstName:Yup.string().required('First Name is required'),
  lastName:Yup.string().required('Last Name is required'),
  email:Yup.string().email('Invalid email').required('we need your email'),
  phone:Yup.number().integer().typeError('Please enter a valid phone number').required('number is required'),
  addressLine1:Yup.string().required('we need address'),
  addressLine2:Yup.string(),
  city:Yup.string().required('we need city'),
  state:Yup.string().required('we need state'),
  country:Yup.string().required('we need country'),
  arrivalDate:Yup.date().required('date required'),
  departureDate:Yup.date().required('date required'),
  message:Yup.string(),
  termsOfService:Yup.boolean().oneOf([true],'The terms must be accepted').required('The terms must be accepted')
})

const App = () => {
  const classes = useStyles()
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>
            <Formik 
            initialValues={{
              ...INITIAL_FORM_STATE
            }}
            validationSchema={valiadationSchema}
            onSubmit = {(values)=>{
              console.log(values)
            }}
             >
              <Form>
                <Grid container spacing={2} >
                  <Grid item xs={12} >
                    <Typography>
                      Your details
                    </Typography>
                  </Grid>
                  <Grid item xs={6} >
                    <TextFields 
                    name="firstName"
                    label="First Name"
                    type="text"
                     />
                  </Grid>
                  <Grid item xs={6} >
                    <TextFields 
                    name="lastName"
                    label="Last Name"
                    type="text"
                     />
                  </Grid>
                  <Grid item xs={12} >
                    <TextFields 
                    name="email"
                    label="Email Address"
                    type="email"
                     />
                  </Grid>
                  <Grid item xs={12} >
                    <TextFields 
                    name="phone"
                    label="Phone Number"
                    type="phone"
                     />
                  </Grid>

                  <Grid item xs={12} >
                    <Typography>
                      Address
                    </Typography>
                  </Grid>

                  <Grid item xs={12} >
                    <TextFields 
                    name="addressLine1"
                    label="Address"
                    // type="address"
                     />
                  </Grid>

                  <Grid item xs={12} >
                    <TextFields 
                    name="addressLine2"
                    label="optional Address"
                    // type="phone"
                     />
                  </Grid>

                  <Grid item xs={6} >
                    <TextFields 
                    name="city"
                    label="City Name"
                    type="text"
                     />
                  </Grid>
                  <Grid item xs={6} >
                    <TextFields 
                    name="state"
                    label="State Name"
                    type="text"
                     />
                  </Grid>

                  <Grid item xs={12}>
                    <SelectField
                      name='country'
                      label='whats your country'
                      options={countries}
                    />
                  </Grid>

                  <Grid item xs={12} >
                    <Typography>
                      Booking
                    </Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <DateTimePicker
                      name='arrivalDate'
                      // label='Arrival Date'
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <DateTimePicker
                      name='departureDate'
                      // label='Departure Date'
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextFields
                      name='message'
                      label='Please leave a message'
                      multiline={true}
                      rows={5}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Checkbox
                      name='termsOfServices'
                      legend="Terms of service"
                      label="I agree"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Submit>
                      Submit Form
                    </Submit>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  )
}

export default App