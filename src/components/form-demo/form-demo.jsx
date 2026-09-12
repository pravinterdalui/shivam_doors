import { ErrorMessage, Field, Formik,Form } from "formik";
import * as yup from "yup";

export function FormDemo(){

    return(
        <div className="container-fluid p-3">
            <h3>Register User</h3>
            <Formik initialValues={{UserName:'',Mobile:''}}
                validationSchema={yup.object({
                    UserName:yup.string().required('name Required'),
                    Mobile:yup.string().required('Mobile Required').matches(/\+91\d{10}/,'Invalid Mobile')
                })}
                onSubmit={(user)=>{console.log(user)}} >
                <form>
                    <dl>
                        <dt>User Name</dt>
                        <dd><Field type="text" name="UserName"/></dd>
                        <dd className="text-danger">
                            <ErrorMessage name="UserName" />
                        </dd>

                        <dt>Mobile</dt>
                        <dd><Field type="text" name="Mobile" /></dd>
                        <dd className="text-danger">
                            <ErrorMessage name="Mobile" />
                        </dd>
                    </dl>

                    <button type="submit" className="mx-2" disabled={(Form.isValid)?false:true}>Submit</button>
                    <button type="submit" className={(Form.dirty)?'d-inline':'d-none'}>Save</button>
                </form>
            </Formik>
        </div>
    )
}