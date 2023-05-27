import { sign_in, signInSchema } from '../../../../data';
import { Field, Form, Formik } from 'formik';
import { TextFormField } from '../../common';
import { Alert, Button, Snackbar } from '@mui/material';
import { initialValues } from './initialValues';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SignInForm = () => {
  const [message, setMessage] = useState<string>('');
  const navigate = useNavigate();

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, formikHelpers) => sign_in(values, navigate, formikHelpers, setMessage)}
        validationSchema={signInSchema}
      >
        {(f) => (
          <Form className={'h-full flex flex-col justify-between'}>
            <Field name={'email'} component={TextFormField} placeholder={'Type your email...'} />
            <Field name={'password'} component={TextFormField} placeholder={'Type your password...'} />
            <Button type={'submit'} variant={'contained'} disabled={!f.isValid || f.isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
      <Snackbar open={!!message} autoHideDuration={3000}>
        <Alert variant={'filled'} severity={message === 'Authorization successful.' ? 'success' : 'error'}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};
