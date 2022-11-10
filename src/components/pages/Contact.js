import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


export default function Contact() {
   
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
      } = useForm();

      const toastifySuccess = () => {
        toast('Form sent!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,  
          draggable: false,
          className: 'submit-feedback success',
          toastId: 'notifyToast'
        });
      };
      
      const onSubmit = async (data) => {
        const { name, email, subject, message } = data;
        
        console.log('Name: ', name);
        console.log('Email: ', email);
        console.log('Subject: ', subject);
        console.log('Message: ', message);

        try {
            const templateParams = {
              name,
              email,
              message
            };
            await emailjs.send(
                'service_8bwh5dy',
                'template_q8t8hnp',
                templateParams,
                'Qb9UvrDqXBMP2vXE_'
            );
            reset();
            toastifySuccess();
          } catch (e) {
            console.log(e);
          }
      };


    return (

<form class="contact" id="contact-form" onSubmit={handleSubmit(onSubmit)}>
    <div className="form-group">
        <label htmlFor="name">Name</label>
            <input type="text" className="form-control" name='name'
                      {...register('name', {
                        required: { value: true, message: 'Please enter your name' },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })}/>
                      {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
    </div>
    
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" aria-describedby="emailHelp"
                      name='email'
                      {...register('email', {
                        required: true,
                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}/>
                      {errors.email && (
                      <span className='errorMessage'>Please enter a valid email address</span>
                    )}
    </div>
    
    <div className="form-group">
        <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5" name='message'
                      {...register('message', {
                        required: true
                      })}></textarea>
                      {errors.message && <span className='errorMessage'>Please enter a message</span>}
    </div>
    
    <button type="submit" className="btn btn-primary btn-overwrite">Submit</button>
    
    <div>
        <ToastContainer />
    </div>
</form>

    );
};