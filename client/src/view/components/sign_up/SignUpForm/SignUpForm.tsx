import { Field, Form, Formik, FormikHelpers } from 'formik';
import { initialValues } from './initialValues';
import { Button } from '@mui/material';
import { TextFormField } from '../../common';
import { signUpSchema } from '../../../../data/utils/validationSchema';
import { SignUpValues } from '../../../../data/types';
import { useState } from 'react';
import { sign_up } from '../../../../data/api';

export const SignUpForm = () => {
  const [message, setMessage] = useState<string>('');
  const handleSubmit = async (formData: SignUpValues, helpers: FormikHelpers<SignUpValues>) => {
    try {
      const res = await sign_up(formData);

      if (res) setMessage(res.message);
      console.log(message, 'This state is saved');
    } catch (error) {
      setMessage(error as string);
    }
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={signUpSchema}>
        <Form className={'h-full flex flex-col justify-between'}>
          <Field name={'username'} component={TextFormField} placeholder={'Type your name...'} />
          <Field name={'email'} component={TextFormField} placeholder={'Type your email...'} />
          <Field name={'password'} component={TextFormField} placeholder={'Type your password...'} />
          <Button type={'submit'}>Submit</Button>
        </Form>
      </Formik>
    </>
  );
};
