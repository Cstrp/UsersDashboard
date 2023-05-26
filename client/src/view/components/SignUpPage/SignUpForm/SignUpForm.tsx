import { Field, Form, Formik } from 'formik';
import { SnackBar, TextFormField } from '../../Common';
import { Box, Button } from '@mui/material';
import { ROUTER_PATHS, signIn, signUp, signUpSchema, User } from '../../../../data';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SignUpForm = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState<string>('');

  return (
    <>
      <SnackBar message={message} />
      <Formik
        validationSchema={signUpSchema}
        initialValues={{
          username: '',
          email: '',
          password: '',
        }}
        onSubmit={async (values) => {
          const signInValue: Pick<User, 'email' | 'password'> = { email: values.email, password: values.password };

          await signUp(values);

          signIn(signInValue)
            .then((i) => {
              if (i) {
                setMessage(i.message);
                navigate(ROUTER_PATHS.USERS);
              }
            })
            .catch((e) => console.log(e));
        }}
      >
        {(f) => {
          const { isSubmitting, isValid } = f;
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
                disabled={!isValid || isSubmitting}
              >
                Submit
              </Button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
