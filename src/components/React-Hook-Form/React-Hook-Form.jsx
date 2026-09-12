import { useForm } from "react-hook-form"


export function HookFormDemo(){

  const { register, handleSubmit, formState:{errors} } = useForm();


const submit=(data)=>{
    console.log(data);
}

   return(
    <div className="container-fluid p-2">
        <h3>Register</h3>
        <form onSubmit={handleSubmit(submit)}>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" name="UserName" {...register("UserName",{required:true,minLength:4})}/></dd>

                <dd className="text-danger">
                {
                    (errors.UserName?.type==="required")?
                    <span>User Name Required</span>:<span></span>&&
                    (errors.UserName?.type==="minLength")?
                    <span>Name too short</span>:<span></span>
                }
                </dd>


                <dt>Mobile</dt>
                <dd><input type="text" name="Mobile" {...register("Mobile",{required:true,pattern:/\+91\d{10}/})} /></dd>

                <dd className="text-danger">
                    {
                        (errors.Mobile?.type==="required")?<span>Mobile Required </span>:<span></span>&&
                        (errors.Mobile?.type==="pattern")?<span>Invalid Mobile</span>:<span></span>
                    }
                </dd>
            </dl>
            <button type="submit" className="btn btn-warning">Register</button>
        </form>
    </div>
   )
}