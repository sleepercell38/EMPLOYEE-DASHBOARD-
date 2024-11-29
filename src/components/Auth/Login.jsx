import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Login = ({formhandler}) => {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    

    function submithandler(e) {
        e.preventDefault();
        formhandler(email,password);
        setemail("");
        setpassword("");
    }

    return (
        <>
            <div className='mt-10 flex  flex-col items-center justify-center gap-3'>
                <h1 className='font-black text-3xl flex flex-col items-center justify-center gap-4'>LOG-IN <br /> <span className='text-6xl'><FontAwesomeIcon icon={faUser} /></span></h1>
                <br />
                <div>
                    <form onSubmit={(e) => {
                        submithandler(e)
                    }} className='flex flex-col gap-2'>
                        <input  required value={email} onChange={(e) => {
                            setemail(e.target.value)
                        }}


                            className="p-1.5 font-semibold  text-white  rounded-lg bg-transparent  border border-slate-700" type="email" placeholder="Email" />
                        <input required
                            value={password}
                            onChange={

                                (e) => {
                                    setpassword(e.target.value)
                                }
                            }
                            className="p-1.5   font-semibold   text-white  rounded-lg   bg-transparent border border-slate-700 " type="password" placeholder='password' />
                        <div className='flex items-center justify-between mt-6 text-xs'>
                            <label>
                                <input className='text-white ' type="checkbox" name="Remember me" id="" />
                                Remember me
                            </label>
                            <h1>forget password?</h1>
                        </div>
                        <button className=' rounded-lg font-semibold mt-6 bg-slate-700'>Log-In</button>


                    </form>
                </div>
            </div>


        </>
    )
}

export default Login
