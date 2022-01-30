import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'

export const Login = () => {

    {/* YUP is used to create a vaildation schema with ease */ }
    const validate = Yup.object({
        name: Yup.string().min(3,'must be 3 words minimum').max(15,'too lengthy').required('Required'),
        email: Yup.string().email().required('Required'),
        password: Yup.string().required('Required').min(7, 'Keep a strong password'),
        confirmpassword: Yup.string().min(7,'Keep a strong password').oneOf([Yup.ref('password'),null],'Password not matching')
        // Yup.ref('InputPassword1',null), string().required('Required').min(7,'Keep a strong password')
    })
    return <div>
        <div className="container ">
            <h2 className='my-3'>This is the log in form with Formik</h2>



            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    password: "",
                    confirmpassword: ""
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={validate}
            >
                {formik => (
                    <Form>
                        {console.log(formik)}
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            {/* <input type="text" name="name" className="form-control" id="InputName" aria-describedby="nameHelp"  placeholder='Johm Doe'/> */}
                            {/* To connect field (i.e input element) with the formik object */}
                            <Field autoComplete="off" type="text" name="name" className="form-control" />
                            {/* {formik.errors.name && formik.touched.name ? (<div>{formik.errors.name}</div>) : null} */}
                            {/* {formik.errors.name && formik.touched.name && (
                                <div className="text-danger">{formik.errors.name}</div>
                            )} */}
                            {/* <div id="nameHelp" className="form-text">We'll never share your name with anyone else.</div> */}
                            <ErrorMessage name="name" component="div"  >
                                {msg=><div className='text-danger'>{msg}</div>}
                            </ErrorMessage>
                            
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            {/* <Field type="email" name="email" className="form-control" id="InputEmail" aria-describedby="emailHelp"  placeholder='JoheDoe@example.com'/> */}
                            <Field autoComplete="off" type="email" name="email" className="form-control" placeholder='JoheDoe@example.com' />
                            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                            <ErrorMessage name="email" component="div"  >
                                {msg=><div className='text-danger'>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label" >Password</label>
                            {/* <Field type="password" name="password1" className="form-control" id="InputPassword1"/> */}
                            <Field autoComplete="off" type="password" name="password" className="form-control"  />
                            <ErrorMessage name="password" component="div"  >
                                {msg=><div className='text-danger'>{msg}</div>}
                            </ErrorMessage>
                        
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label" >Confirm Password</label>
                            {/* <Field type="password" name="password1" className="form-control" id="InputPassword1"/> */}
                            <Field autoComplete="off" type="password" name="confirmpassword" className="form-control"  />
                            <ErrorMessage name="confirmpassword" component="div"  >
                                {msg=><div className='text-danger'>{msg}</div>}
                            </ErrorMessage>
                        
                        </div>
                        {/* <div className="mb-3">
                            <label htmlFor="comfirmpassword" className="form-label" >Confirm Password</label>
                            <Field type="password" name="password2" className="form-control" id="InputPassword2"/>
                            <Field autoComplete="off" type="password" name="comfirmpassword" className="form-control" />
                            <ErrorMessage name="comfirmpassword" component="div" >
                                {msg=><div className='text-danger'>{msg}</div>}
                            </ErrorMessage>
                        </div> */}
                        <div className="mb-3 form-check"> 
                            <Field type="checkbox" className="form-check-input" id="Check1"/>
                            <Field type="checkbox" className="form-check-input" id="Check1"/>
                            <label className="form-check-label" htmlFor="Check1">Check me out</label>
                          </div> 
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </Form>
                )
                }
            </Formik>
        </div>
    </div >;
};
