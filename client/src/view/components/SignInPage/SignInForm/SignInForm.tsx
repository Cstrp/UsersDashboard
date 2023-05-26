import { Field, Form, Formik } from 'formik';
import { ROUTER_PATHS, signIn, signInSchema, STATUS, User } from '../../../../data';
import { TextFormField } from '../../Common';
import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SignInForm = () => {
  const initialValues: Pick<User, 'email' | 'password'> = {
    email: '',
    password: '',
  };

  const [message, setMessage] = useState<string>('');
  const navigate = useNavigate();

  return (
    <>
      <Formik
        validationSchema={signInSchema}
        initialValues={initialValues}
        onSubmit={async (value, formikHelpers) => {
          const res = await signIn(value);
          if (res) {
            setMessage(res.message);

            if (res.status === STATUS.ACTIVE) {
              navigate(ROUTER_PATHS.USERS);
            } else {
              navigate(ROUTER_PATHS.DEFAULT);
            }
          }
        }}
      >
        {(f) => {
          return (
            <Form>
              <Box className={'flex flex-col gap-2'}>
                <Field name={'email'} placeholder={'Type your email address...'} component={TextFormField} />
                <Field name={'password'} placeholder={'Type your password...'} component={TextFormField} />
              </Box>
              <Button
                type={'submit'}
                variant={'contained'}
                disabled={!f.isValid || f.isSubmitting}
                sx={{ width: '40%', mt: 2 }}
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
