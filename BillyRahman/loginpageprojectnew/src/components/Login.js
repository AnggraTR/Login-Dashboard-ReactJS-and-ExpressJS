
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import backgroundImage from '../assets/2148917881.png';
import logoImage from '../assets/Bbloome-01.png';

const Login = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Username diperlukan'),
            password: Yup.string().required('Password diperlukan'),
        }),
        onSubmit: async (values) => {
            try {
                const response = await axios.post('http://localhost:5000/api/login', values);
                localStorage.setItem('token', response.data.token);
                navigate('/dashboard');
            } catch (error) {
                console.error('Login failed:', error);
                alert('Login gagal: ' + (error.response ? error.response.data.message : 'Terjadi kesalahan'));
                window.location.reload();
            }
        },
    });

    return (
        <div className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <img src={logoImage} alt='Logo' className='mb-6 mx-auto' />
                
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Username"
                            {...formik.getFieldProps('username')}
                            className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {formik.touched.username && formik.errors.username ? (
                            <div className="text-red-500 text-sm">{formik.errors.username}</div>
                        ) : null}
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Password"
                            {...formik.getFieldProps('password')}
                            className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className="text-red-500 text-sm">{formik.errors.password}</div>
                        ) : null}
                    </div>
                    <button type="submit" className="bg-blue-500 text-white p-3 rounded w-full hover:bg-blue-600 transition duration-200">
                        Login
                    </button>
                </form>
                <p className="text-center text-gray-600 mt-4">
                    Belum punya akun? <a href="/register" className="text-blue-500 hover:underline">Daftar di sini</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
