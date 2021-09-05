import React, { FormEvent, useEffect, useState } from 'react';
import '../../assets/styles/form.css';

export interface State {
  firstName: string;
  surName: string;
  birthDate: string;
  country: string;
  email: string;
  agreement: boolean;
  toggle: boolean;
}
interface Errors {
  firstName?: string;
  surName?: string;
  birthDate?: string;
  country?: string;
  email?: string;
  agreement?: boolean;
  toggle?: boolean;
}
interface FormProps {
  setFormValues: React.Dispatch<React.SetStateAction<State[]>>;
}

export const Form: React.FC<FormProps> = ({ setFormValues }) => {
  const [firstName, setFirstName] = useState('');
  const [surName, setSurName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [country, setCountry] = useState('Choose country');
  const [email, setEmail] = useState('');
  const [agreement, setAgreement] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [errors, setErrors] = useState({} as Errors);
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [surNameError, setSurNameError] = useState('');

  const validate = () => {
    setErrors({} as Errors);
    if (!agreement) {
      setErrors((state) => ({ ...state, agreement }));
    }
    if (firstName === '') {
      setErrors((state) => ({ ...state, firstName }));
    }
    if (surName === '') {
      setErrors((state) => ({ ...state, surName }));
    }
    if (email === '') {
      setErrors((state) => ({ ...state, email }));
    }

    if (birthDate === '') {
      setErrors((state) => ({ ...state, birthDate }));
    }
    if (country === 'Choose country') {
      setErrors((state) => ({ ...state, country }));
    }
  };
  useEffect(() => {
    validate();
  }, [agreement, firstName, surName, birthDate, email, country]);

  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(event.target.value).toLowerCase())) {
      setErrors((state) => ({ ...state, email }));
      setEmailError('incorrect address');
    } else {
      setEmailError('');
    }
  };
  const nameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
    const re = /^[а-яёa-z][-а-яёa-z']{1,50}$/i;
    if (!re.test(String(event.target.value).toLowerCase())) {
      setErrors((state) => ({ ...state, firstName }));

      setNameError(
        "Only letters and symbols ' and - . Name should not exceed 50 symbols "
      );
    } else {
      setNameError('');
    }
  };
  const surNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSurName(event.target.value);
    const re = /^[а-яёa-z][-а-яёa-z']{1,50}$/i;
    if (!re.test(String(event.target.value).toLowerCase())) {
      setErrors((state) => ({ ...state, surName }));
      setSurNameError(
        "Only letters and symbols ' and - . Surname should not exceed 50 symbols "
      );
    } else {
      setSurNameError('');
    }
  };
  const reset = () => {
    setAgreement(false);
    setFirstName('');
    setSurName('');
    setBirthDate('');
    setCountry('Choose country');
    setEmail('');
    setToggle(true);
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      setFormValues((state) => [
        ...state,
        {
          firstName,
          surName,
          birthDate,
          country,
          email,
          agreement,
          toggle,
        },
      ]);
      alert('registration completed successfully');
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>User Registration</h2>
      <p className="footnote">
        {' '}
        <span className="mark">*</span>- required field
      </p>
      <label htmlFor="firstName" className="container-input">
        <p className="label-input">
          {' '}
          <span className="mark">*</span> Name :
        </p>
        <input
          className={
            errors?.firstName === '' ? 'value-empty input_text' : 'input_text'
          }
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            nameHandler(e);
          }}
        />
        <p className="error">
          {nameError && <span className="error">{nameError}</span>}
        </p>
      </label>
      <label htmlFor="surName" className="container-input">
        <p className="label-input">
          <span className="mark">*</span>
          Surname:
        </p>
        <input
          className={
            errors?.surName === '' ? 'value-empty input_text' : 'input_text'
          }
          type="text"
          name="surName"
          value={surName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            surNameHandler(e);
          }}
        />
        <p className="error">
          {surNameError && <span className="error">{surNameError}</span>}
        </p>
      </label>
      <label htmlFor="birthDate" className="container-input">
        <p className="label-input">
          <span className="mark">*</span>
          Birth date:
        </p>
        <input
          className={
            errors?.birthDate === '' ? 'value-empty input_text' : 'input_text'
          }
          type="date"
          name="birthDate"
          value={birthDate}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = e.target.value;
            setBirthDate(newValue);
          }}
        />
      </label>
      <label htmlFor="country" className="container-select">
        <p className="label-input">
          <span className="mark">*</span>
          Country:
        </p>
        <select
          className={
            errors?.country === 'Choose country'
              ? 'value-empty select'
              : 'select'
          }
          name="country"
          value={country}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            const newValue = e.target.value;
            setCountry(newValue);
          }}
        >
          <option disabled defaultValue=" Choose country">
            Choose country
          </option>
          <option>Belarus</option>
          <option>Kazakhstan</option>
          <option>Lithuania</option>
          <option>Poland</option>
          <option>Russia</option>
          <option>Ukraine</option>
        </select>
      </label>
      <label htmlFor="email" className="container-input">
        <p className="label-input">
          <span className="mark">*</span>
          E-mail:
        </p>
        <input
          className={
            errors?.email === '' ? 'value-empty input_text' : 'input_text'
          }
          type="text"
          name="email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            emailHandler(e);
          }}
        />
        <p className="error">
          {' '}
          {emailError && <span className="error">{emailError}</span>}
        </p>
      </label>
      <label htmlFor="toggle" className="toggle">
        <div className="switch">
          <input
            className="switch__checkbox"
            type="checkbox"
            name="toggle"
            checked={toggle}
            onChange={() => setToggle((prev) => !prev)}
          />
          <span className="switch__slider" />
        </div>
        <p className="text-agreement">
          {' '}
          Do you want to be notified about news and promotions?
        </p>
      </label>
      <label className="checkbox-agree" htmlFor="agreement">
        <input
          className="checkbox"
          type="checkbox"
          name="agreement"
          checked={agreement}
          onChange={() => setAgreement((prev) => !prev)}
        />
        <p className="text-agreement">
          {' '}
          I agree to the processing of personal data
          <br />{' '}
          {errors?.agreement !== undefined && (
            <span className="error">agreement should be checked</span>
          )}
        </p>
      </label>
      <div className="button_submit">
        <input type="submit" value="Send" className="input_submit" />
      </div>
    </form>
  );
};
