import React, {useEffect, useState} from 'react';
import modal from '../assets/img/bg-modal.jpg';
import Input from './Input';
import {useForm} from 'react-hook-form';
import axios from 'axios';

interface IDownloadModalProps {
  show: boolean;
  onClose: any;
}

const pattern = {
  value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  message: 'Mauvais format d’adresse mail'
};

const DownloadModal = ({onClose, show}:IDownloadModalProps) => {
  const { register, handleSubmit, watch, errors, reset } = useForm();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleClose = () => {
    onClose();
    reset();
  };

  useEffect(() => {
    reset();
    setSuccess(false);
  }, [show]);

  const onSubmit = async (data: any) =>  {
    setLoading(true);

    try {
      const formData = new FormData();
      Object.keys(data)
        .forEach(key => {
          if(key === 'checkbox2') return;
          const value = data[key];
          formData.append(key, value)
        })

      const config: any = {
        method: 'post',
        url: 'https://demo.o2-belleterre.ch/send_brochure_form.php',
        data : formData,
        redirect: 'follow'
      };
      const res = await axios(config);
      if(res.data.success) {
        setSuccess(true);
      }
    }
    catch (e) {
      console.log(e)
    }
    finally {
      setLoading(false);
    }
  };


  if(!show) return null;

  const error = errors && errors['checkbox2'] ? errors['checkbox2'].message : '';
  return (
   <>
     <div className="iziModal-overlay"  onClick={handleClose}></div>
     <div id="downloadBrochure" className="iziModal isAttached">
       <div className="iziModal-wrap">
         <div className="iziModal-content">
           <div className="modal-body">
             <figure className="modal-pic"><img src={modal} /></figure>
             <div className="modal-content">
               <button className="modal-close" onClick={handleClose}>&nbsp;</button>
               {
                 !success && (
                   <form className="modal-form" onSubmit={handleSubmit(onSubmit)}>
                     <h3>Télécharger la brochure</h3>
                     <Input errors={errors} label={'Nom'} name="last_name" value={watch('last_name')} ref={register({ required: 'Veuillez remplir les champs obligatoires' })} />
                     <Input errors={errors} label={'Prénom'} name="first_name" value={watch('first_name')} ref={register({ required: 'Veuillez remplir les champs obligatoires' })} />
                     <Input errors={errors} label={'Numéro de téléphone'} name="phone" value={watch('phone')} ref={register({ required: 'Veuillez remplir les champs obligatoires' })} />
                     <Input errors={errors} label={'Email'} name="email" value={watch('email')} ref={register({ required: 'Veuillez remplir les champs obligatoires', pattern })} />
                     <div className="form-item form-checkbox">
                       <input type="checkbox" name="checkbox2" hidden id="checkbox2"  ref={register({ required: 'Veuillez accepter les conditions' })} />
                       <label htmlFor="checkbox2">J’ai lu et j’accepte la politique de confidentialité de ce site</label>
                       {error && <p className={'error-input'}>{error}</p>}
                     </div>
                     <button type="submit" className="btn" disabled={loading}>RECEVOIR la brochure</button>
                   </form>
                 )
               }
               {
                 success && (
                   <article className="contact-thankyou">
                     <h3>Merci !</h3>
                     <p className="subtitle">Merci votre message a bien été envoyé !</p>
                   </article>
                 )
               }
             </div>
           </div>
         </div>
       </div>
     </div>
     </>
  )
};

export default DownloadModal;

