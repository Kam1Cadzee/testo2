import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import Input from './Input';

interface IContactModalProps {
  show: boolean;
  onClose: any;
}
const pattern = {
  value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Mauvais format d’adresse mail'
};

const ContactModal = ({onClose, show}:IContactModalProps) => {
  const { register, handleSubmit, watch, errors, reset } = useForm({
    defaultValues: {
      interested_in: 'Une surface d\'activité'
    }
  });

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
          if(key === 'checkbox') return;
          const value = data[key];
          formData.append(key, value)
        })

      const config: any = {
        method: 'post',
        url: 'https://demo.o2-belleterre.ch/send_contact_form.php',
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


  // @ts-ignore
  const error = errors && errors['checkbox'] ? errors['checkbox'].message : '';
  return (

    <>
      <div className="iziModal-overlay"  onClick={handleClose}></div>
      <div className="iziModal isAttached">
        <div className="iziModal-wrap">
          <div className="iziModal-content">
            <div className="modal-body">
             {!success && <h3>Contactez-nous</h3>}
              <div className="modal-content">
                <button  className="modal-close" onClick={handleClose}>&nbsp;</button>
                <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                  {
                    !success && (
                      <div className="contact-form_col">
                        <p className="question">Vous êtes intéressé par :</p>
                        <div className="form-radio_block">
                          <div className="form-radio_item">
                            <input type="radio" id="radio1-1" name="interested_in" value="Une surface d'activité" hidden  ref={register({ required: true })}/>
                            <label htmlFor="radio1-1">Une surface <span className="medium-bold">d'activité</span></label>
                          </div>
                          <div className="form-radio_item">
                            <input type="radio" id="radio1-2" name="interested_in" value="Une surface commerciale" hidden  ref={register({ required: true })}/>
                            <label htmlFor="radio1-2">Une surface <span className="medium-bold">commerciale</span></label>
                          </div>
                        </div>
                        <p className="question">Laissez-nous un message :</p>
                        <div className="form-item value">
                          <label className="form-label">Message</label>
                          <textarea name="message"  ref={register({ required: true })} />
                        </div>
                      </div>
                    )
                  }
                  {
                    !success && (
                      <div className="contact-form_col">
                        <div>
                          <Input errors={errors} label={'Nom'} name="last_name" value={watch('last_name')} ref={register({ required: 'Veuillez remplir les champs obligatoires' })} />
                          <Input errors={errors} label={'Prénom'} name="first_name" value={watch('first_name')} ref={register({ required: 'Veuillez remplir les champs obligatoires' })} />
                          <Input errors={errors} label={'Société'} name="company" value={watch('company')} ref={register({ required: 'Veuillez remplir les champs obligatoires' })} />
                          <Input errors={errors} type="email" label={'Email'} name="email" value={watch('email')} ref={register({ required: 'Veuillez remplir les champs obligatoires', pattern })} />
                          <Input errors={errors} label={'Téléphone'} name="phone" value={watch('phone')} ref={register({ required: 'Veuillez remplir les champs obligatoires' })} />
                          <div className="form-item form-checkbox">
                            <input type="checkbox" name="checkbox" hidden id="tos" ref={register({ required: 'Veuillez accepter les conditions' })} />
                            <label htmlFor="tos">J’ai lu et j’accepte la politique de confidentialité de ce site </label>
                            {error && <p className={'error-input'}>{error}</p>}
                          </div>
                          <button type="submit" className="btn" disabled={loading}>ENVOYER</button>
                        </div>
                      </div>
                    )
                  }
                  {
                    success && (
                      <article className="contact-thankyou">
                        <h3 style={{textAlign: 'center'}}>Merci !</h3>
                        <p className="subtitle">Merci votre message a bien été envoyé !</p>
                      </article>
                    )
                  }
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  )
};

export default ContactModal;
