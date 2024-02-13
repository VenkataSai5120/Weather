import { useState } from "react";

export function RegisterPage() {
    const [isLogin, setLogin] = useState<boolean>(false);

    const [nameValue, setNameValue] = useState<string>('');
    const [emailValue, setEmailValue] = useState<string>('');

    const [regPasswordValue, setRegPasswordValue] = useState<string>('');
    const [loginPasswordValue, setLoginPasswordValue] = useState<string>('');

    const [zipValue, setZipValue] = useState<number | null>(null);

    const toggleIsLogin = () => { setLogin(!isLogin); }
    const clearInputFields = () => { 
        setNameValue('');
        setEmailValue('');
        setRegPasswordValue('');
        setLoginPasswordValue('');
        setZipValue(null);
     }

    return (
        <>
            <nav className='p-5 mb-5'>
                <img src="" alt="" />
                <h1 className='text-3xl font-semibold text-center'>Register&nbsp;/&nbsp;Login</h1>
            </nav>
            { isLogin ? 
                <div className="container flex flex-col items-center justify-center w-1/2 m-auto gap-2 ">
                    <span className='w-full grid grid-cols-6 gap-1'>
                        <label htmlFor="name" className='col-start-1 py-1 px-2'>Name</label>
                        <input 
                            type="text" 
                            id='name' 
                            placeholder='Name' 
                            value={nameValue}
                            onChange={(e) => { setNameValue(e.target.value) }}
                            className='col-span-full col-start-2 py-1 px-2 border-[1px] border-black rounded'/>
                    </span>
                    <span className='w-full grid grid-cols-6 gap-1'>
                        <label htmlFor="email" className='col-start-1 py-1 px-2'>Email</label>
                        <input 
                            type="email" 
                            id='email' 
                            placeholder='Email' 
                            value={emailValue}
                            onChange={(e) => { setEmailValue(e.target.value) }}
                            className='col-span-full col-start-2 py-1 px-2 border-[1px] border-black rounded'/>
                    </span>
                    <span className='w-full grid grid-cols-6 gap-1'>
                        <label htmlFor="password" className='col-start-1 py-1 px-2'>Password</label>
                        <input 
                            type="password" 
                            id='password' 
                            placeholder='Password' 
                            value={regPasswordValue}
                            onChange={(e) => { setRegPasswordValue(e.target.value) }}
                            className='col-span-full col-start-2 py-1 px-2 border-[1px] border-black rounded'/>
                    </span>
                    <span className='w-full grid grid-cols-6 gap-1'>
                        <label htmlFor="zip" className='col-start-1 py-1 px-2'>Zip&nbsp;Code</label>
                        <input 
                            type="number" 
                            id='zip' 
                            placeholder='Zip Code' 
                            value={zipValue ? zipValue : ''}
                            onChange={(e) => { setZipValue(parseInt(e.target.value)) }}
                            className='col-span-full col-start-2 py-1 px-2 border-[1px] border-black rounded' />
                    </span>
                    <section className='flex items-center self-end px-4 mt-2 gap-4'>
                        <button className='w-min border-[1px] border-gray-50 bg-gray-400 rounded py-2 px-4'>Register</button>
                        <p> or </p>
                        <button className='text-blue-700 underline' onClick={() => {
                            toggleIsLogin();
                            clearInputFields();
                        }}>Login</button>
                    </section>
                </div>
                :
                <div className="container flex flex-col items-center justify-center w-1/2 m-auto gap-2 ">
                    <span className='w-full grid grid-cols-6 gap-1'>
                        <label htmlFor="email" className='col-start-1 py-1 px-2'>Email</label>
                        <input 
                            type="email" 
                            id='email' 
                            placeholder='Email' 
                            value={emailValue}
                            onChange={(e) => { setEmailValue(e.target.value) }}
                            className='col-span-full col-start-2 py-1 px-2 border-[1px] border-black rounded'/>
                    </span>
                    <span className='w-full grid grid-cols-6 gap-1'>
                        <label htmlFor="password" className='col-start-1 py-1 px-2'>Password</label>
                        <input 
                            type="password" 
                            id='password' 
                            placeholder='Password' 
                            value={loginPasswordValue}
                            onChange={(e) => { setLoginPasswordValue(e.target.value) }}
                            className='col-span-full col-start-2 py-1 px-2 border-[1px] border-black rounded'/>
                    </span>
                    <section className='flex items-center self-end px-4 mt-2 gap-4'>
                        <button className='w-min border-[1px] border-gray-50 bg-gray-400 rounded py-2 px-4'>Login</button>
                        <p> or </p>
                        <button className='text-blue-700 underline' onClick={() => {
                            toggleIsLogin();
                            clearInputFields();
                        }}>Register</button>
                    </section>
                </div>
            }
        </>
    );
}