import React from 'react';
import { useForm } from 'react-hook-form';
const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div className="flex flex-col">
            <h1 className="text-3xl text-center my-8">Contact Us</h1>

            <form
                className="flex flex-col items-center gap-4"


                onSubmit={handleSubmit(onSubmit)}
            >
                <div>
                    <label className="block" htmlFor="name">
                        <span className="block text-sm font-medium text-slate-700">Your Name:</span>
                    </label>
                    <input
                        placeholder="name"
                        className="mt-2 bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                        type="text"
                        id="name"
                        name="name"
                        aria-required="true"
                        ref={register}
                        {...register('name', { required: 'Name is required' })}
                    />
                </div>
                <div>
                    <label className="block" htmlFor="email">
                        <span className="block text-sm font-medium text-slate-700">Your Email:</span>
                    </label>
                    <input
                        className="mt-2 bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                        type="email"
                        id="email"
                        name="email"
                        required
                        aria-required="true"
                        ref={register}
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                message: 'Invalid email address'
                            }
                        })}
                    />
                </div>
                <div className="">
                    <label className="block" htmlFor="message">
                        <span className="block text-sm font-medium text-slate-700">Your Message:</span>
                    </label>
                    <textarea
                        className="mt-2 placeholder:italic placeholder:text-slate-400 block bg-white w-[184px] border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                        id="message"
                        name="message"
                        rows="4"
                        required
                        aria-required="true"
                        ref={register}
                        {...register('message', { required: 'Message is required' })}
                    >
                    </textarea>
                </div>
                <button
                    className="px-10 mb-5 text-white rounded-full bg-[#DC6B19] py-3"
                    type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}
export default Contact;