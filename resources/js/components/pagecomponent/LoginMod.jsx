import React,{useState,useEffect} from 'react'
import { NavLink} from "react-router-dom";
import { loginAuth } from '../../apis/auth';
import { useNavigate } from 'react-router';

const LoginMod = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('user')
    const [formData, setformData] = useState({
        email: '',
        password: ''
    })

    const onChangeInput = (e) =>{
        setformData({
            ...formData, [e.target.name] : e.target.value
        })
    }

    useEffect(()=>{
        if(token){
            navigate('/')
        }else{
            navigate('/login')
        }
    },[])

    const loginHandler = async(data) =>{
        try{
            const response = await loginAuth(data);
            const resData = JSON.stringify(response.data.email);
            if(resData == undefined){
                alert(response.data.error);
            }else{
                localStorage.setItem('user',resData)
                navigate('/')
            }
            setformData({
                email: '',
                password: ''
            });
        }catch(error){
            console.log(error.message)
        }
        
    }
    const navToRegister = () =>{
        navigate('/register')
    }

    const emailValidation = (str) => str.includes('@');

    return (
        <>
            <div className="login-container d-flex align-items-center justify-content-center flex-column mt-5">
                <h2>
                   Login 
                </h2>
    
                <div className="form-container col-md-6">
                    <div className="form-group emailAddress ">
                        <label htmlFor="email" className='me-4'>Email </label>
                        <input type="text" className="form-control" onChange={onChangeInput} name="email" id="email" />
                        <span className='text-danger'>
                            {
                                formData.email && 
                                !emailValidation(formData.email)
                                ? "Email should be invalid"
                                : null
                            }
                        </span>
                    </div>
                    <div className="form-group password my-3">
                        <label htmlFor="pwd" className='me-3'>password</label>
                        <input type="text" className="form-control" onChange={onChangeInput}  name="password" id="pwd" />
                    </div>
                    <button onClick={()=>loginHandler(formData)} className='w-100 btn mt-3 btn-secondary border-none shadow-none outline-none'>LOGIN</button>
                </div>
                <div className="new-user mt-4">
                    <span >
                        for new user ?
                        <span onClick={navToRegister} className='text-primary ms-2 btn outline-none border-none m-0 p-0 '>Register here</span>
                    </span>
                </div>
            </div>
        </>
      )
}

export default LoginMod

// module.exports = {
//     emailValidation,
//     loginHandler
// }