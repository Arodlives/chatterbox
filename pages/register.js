import Head from 'next/head'
import Layout from "../layout/layout";
import {LoginIcon} from "@heroicons/react/outline";
import Link from 'next/link';
import styles from '../styles/Form.module.css'
import Image from 'next/image';
import {HiAtSymbol,HiFingerPrint,HiOutlineUser,HiOutlineBadgeCheck} from 'react-icons/hi'
import { useState } from 'react';
import { useFormik } from 'formik';
import { register_validate } from '../lib/validate';
import toast, { Toaster } from 'react-hot-toast';


export default function Register() {
  const[showpass,setShowpass]=useState({password:false,confirmpassword:false});
  const formik = useFormik({
    initialValues:{
      name:"",
      email:"",
      password:"",
      confirmpassword:"",
    },
    validate:register_validate,
    onSubmit
  })

    async function onSubmit(values){
      // const options = {
      //   method: "POST",
      //   headers : { 'Content-Type': 'application/json'},
      //   body: JSON.stringify(values)
      // }
      console.log(values)
    }

  
  return (
    <Layout>

      <Head>
        <title>Register</title>
      </Head>

      <section className='flex flex-col w-3/4 gap-10 mx-auto ' onSubmit={formik.handleSubmit}>
        <div className='title'>
          <h1 className='py-4 text-4xl font-bold text-gray-800'>Register</h1>
          <p className='w-3/4 mx-auto text-gray-400'>Let&apos;s get you set up with <span className='underline decoration-sky-500 hover:decoration-blue-400 '>Chatterbox</span></p>
        </div>
        {/* form */}
        <form className='flex flex-col gap-5' onSubmit={formik.handleSubmit}>
          {/* //*➡️Name */}
          <div className={styles.input_group}>
          {/* <div className={`${styles.input_group}${formik.errors.name && formik.touched.name?'border-rose-600':'border-lime-600'}`}> */}
            {/* <div className={`${styles.input_group} ${formik.errors.name && formik.touched.name?'border-rose-600':''}`}> */}
            <input type='text' className={styles.input_text} name='name' placeholder='Name' {...formik.getFieldProps('name')}/>
          {/* //* Icon for input⬇️*/}
          <span className='flex items-center px-4 icon'>
            <HiOutlineUser size={25}/>
          </span>
          {/* //* Icon for input⤴️ */}
          </div>
          {formik.errors.name && formik.touched.name ? <span className='text-rose-500'>{formik.errors.name}</span>: <></>}
          {/* //*➡️Email */}
          <div className={styles.input_group}>
            <input type='email' className={styles.input_text} name='email' placeholder='Email' {...formik.getFieldProps('email')}/>
          {/* //* Icon for input⬇️*/}
          <span className='flex items-center px-4 icon'>
            <HiAtSymbol size={25}/>
          </span>
          {/* //* Icon for input⤴️ */}
          </div>
          {formik.errors.email && formik.touched.email ? <span className='text-rose-500'>{formik.errors.email}</span>: <></>}
          {/* //*➡️Password */}
          <div className={styles.input_group}>
            <input type={`${showpass.password?"text":"password"}`} className={styles.input_text} name='password' placeholder='Password' {...formik.getFieldProps('password')} />
          {/* //* Icon for input⬇️*/}
          <span className='flex items-center px-4 icon' onClick={()=>setShowpass({...showpass,password:!showpass.password})}>
            <HiFingerPrint size={25}/>
          </span>
          {/* //* Icon for input⤴️ */}
          </div>
          {formik.errors.password && formik.touched.password ? <span className='text-rose-500'>{formik.errors.password}</span>: <></>}
          {/* //*⬇️Confirm Password */}
          <div className={styles.input_group}>
            <input type={`${showpass.confirmpassword?"text":"password"}`} className={styles.input_text} name='confirmpassword' placeholder='Confirm Password' {...formik.getFieldProps('confirmpassword')}/>
          {/* //* Icon for input⬇️*/}
          <span className='flex items-center px-4 icon' onClick={()=>setShowpass({...showpass,confirmpassword:!showpass.confirmpassword})}>
            <HiFingerPrint size={25}/>
          </span>
          {/* //* Icon for input⤴️ */}
          </div>
          {formik.errors.confirmpassword && formik.touched.confirmpassword ? <span className='text-rose-500'>{formik.errors.confirmpassword}</span>: <></>}
          
          {/* Register-Buttons */}
          <div className='flex flex-col items-center input-button'>
            <button type='submit' className={styles.button}>
              <HiOutlineBadgeCheck className="w-5 h-5 "  />
              Register
            </button>
          </div>

        </form>
        {/* bottom */}
        <p className='text-center text-gray-400'>
          {/* //➡️ &apos;= apostrophe , &lsquo; ,&rsquo; ⬅️ \\ */}
          Have an account yet?
          <Link href={'/login'} className='hover:text-blue-400'>
            Sign In
          </Link>
        </p>
      </section>

    </Layout>
  )
}
