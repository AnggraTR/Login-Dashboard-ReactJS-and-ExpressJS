// src/components/Register.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Username diperlukan'),
            password: Yup.string().required('Password diperlukan').min(6, 'Password harus minimal 6 karakter'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Password harus sama')
                .required('Konfirmasi password diperlukan'),
        }),
        onSubmit: async (values) => {
            try {
                const response = await axios.post('http://localhost:5000/api/register', {
                    username: values.username,
                    password: values.password,
                });
                alert('Pendaftaran berhasil! Silakan login.');
                navigate('/login'); // Arahkan ke halaman login setelah pendaftaran berhasil
            } catch (error) {
                console.error('Pendaftaran gagal:', error);
                const errorMessage = error.response && error.response.data && error.response.data.message
                    ? error.response.data.message
                    : 'Terjadi kesalahan';
                alert('Pendaftaran gagal: ' + errorMessage);
            }
        },
    });

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
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
                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Konfirmasi Password"
                            {...formik.getFieldProps('confirmPassword')}
                            className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                            <div className="text-red-500 text-sm">{formik.errors.confirmPassword}</div>
                        ) : null}
                    </div>
                    <button type="submit" className="bg-blue-500 text-white p-3 rounded w-full hover:bg-blue-600 transition duration-200">
                        Register
                    </button>
                </form>
                <p className="text-center text-gray-600 mt-4">
                    Sudah punya akun? <a href="/login" className="text-blue-500 hover:underline">Login di sini</a>
                </p>
            </div>
        </div>
    );
};

export default Register;
