import React,{useState} from 'react'
import { registerAPI } from '../../apis/auth';
import { useNavigate } from 'react-router';


const Register = () => {

    const navigate = useNavigate();
    const [formData, setformData] = useState({
        name : '',
        email: '',
        password: ''
    })

    const onChangeInput = (e) =>{
        setformData({
            ...formData, [e.target.name] : e.target.value
        })
    }

    const registerHandler = async (data) =>{
        try {
            const response = await registerAPI(data);
            const resData = JSON.stringify(response.data)
            localStorage.setItem('user',resData)
            setformData({
                name : '',
                email: '',
                password: ''
            })
        } catch (error) {
            console.log(error.message);
        }
        if(formData.name && formData.email !== ''){
            navigate('/');
        }
    }

  return (
    <>
        <div className="login-container d-flex align-items-center justify-content-center flex-column mt-5">
            <h2>
                Registration
            </h2>

            <div className="form-container col-md-6">
                <div className="form-group name  my-3">
                    <label htmlFor="name" className='me-4'>Name </label>
                    <input type="text" onChange={onChangeInput} className="form-control" name="name" id="name" />
                </div>
                <div className="form-group emailAddress ">
                    <label htmlFor="email" className='me-4'>Email </label>
                    <input type="text" className="form-control" onChange={onChangeInput} name="email" id="email" />
                </div>
                <div className="form-group password my-3">
                    <label htmlFor="pwd" className='me-3'>password</label>
                    <input type="text" className="form-control" onChange={onChangeInput}  name="password" id="pwd" />
                </div>
                <button onClick={()=>registerHandler(formData)} className='btn btn-secondary offset-md-5 border-none shadow-none outline-none'>SUBMIT</button>
            </div>
        </div>
    </>
  )
}

export default Register;