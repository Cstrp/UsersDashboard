import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import { ROUTER_PATHS, signIn, signUp, signUpSchema, User } from '../../../../data';
import { Box, Button, Typography } from '@mui/material';
import { TextFormField } from '../../Common';

export const SignUpForm = () => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const navigate = useNavigate();
  const [message, setMessage] = useState<string>('');

  return (
    <>
      <Formik
        validationSchema={signUpSchema}
        initialValues={initialValues}
        onSubmit={async (values, formikHelpers) => {
          const signInValue: Pick<User, 'email' | 'password'> = { email: values.email, password: values.password };
          const signUpRes = await signUp(values);
          const signInRes = await signIn(signInValue);

          if (signUpRes) {
            setMessage(signUpRes);
          }

          if (signInRes) {
            setMessage(signInRes.message);
            navigate(ROUTER_PATHS.USERS);
          }
        }}
      >
        {(f) => {
          return (
            <Form>
              <Box className={'flex flex-col gap-2'}>
                <Field name={'username'} component={TextFormField} placeholder={'Type your username....'} />
                <Field name={'email'} component={TextFormField} placeholder={'Type your email...'} />
                <Field name={'password'} component={TextFormField} placeholder={'Type you password...'} />
              </Box>
              <Button
                type={'submit'}
                variant={'contained'}
                sx={{ width: '40%', mt: 2 }}
                disabled={!f.isValid || f.isSubmitting}
              >
                Submit
              </Button>
            </Form>
          );
        }}
      </Formik>

      <Typography className={'text-red-600 text-3xl'}>{message}</Typography>
    </>
  );
};
