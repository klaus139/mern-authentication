import React, {createContext} from 'react';
import { apiGet, apiPost } from '../utils/api/axios';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const dataContext = createContext();

const DataProvider = ({children}) => {
    const [data, setData] = React.useState([]);
    const [loading, ] = React.useState(false);
    const [error, setError] = React.useState(false);

    const registerConfig = async (formData) => {
        try{
            const registerData = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                password: formData.password,
                confirm_password: formData.confirm_password

            };
            await apiPost('/api/users/register', registerData).then((res)=>{
            toast.success(res.data.message);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('signature', res.data.signature);
            //redirect to login page
            window.location.href = '/login';
            });
            
        }catch(err){
            toast.error(err.response.data.Error);

        }
    };

    const LoginConfig = async (formData) => {
        try{
            const loginData = {
                email: formData.email,
                password: formData.password
            };
            const res = await apiPost('/api/users/login', loginData);
            toast.success(res.data.message);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('signature', res.data.signature);
            //redirect to login page
            window.location.href = '/home';
        }catch(err){
            toast.error(err.response.data.Error);

        }
    };

    const getMeConfig = async () => {
        try{
            const res = await apiGet('/api/users/me');
            setData(res.data);
        }catch(err){
            setError(err.response.data.Error);
        }
    }

    const logOut = () => {
        localStorage.clear();
        window.location.href = '/login';
    }

    return (
        <dataContext.Provider value={{data, loading, error, registerConfig, LoginConfig, getMeConfig, logOut}}>
            {children}
        </dataContext.Provider>
    )
}

export const useAuth = () => {
    const context = React.useContext(dataContext);
    if(!context){
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;

};

export default DataProvider;