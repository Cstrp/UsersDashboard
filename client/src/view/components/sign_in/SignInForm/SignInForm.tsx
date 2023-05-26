import { SignInValues } from '../../../../data/types';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { TextFormField } from '../../common';
import { Button } from '@mui/material';
import { signInSchema } from '../../../../data/utils/validationSchema';
import { initialValues } from './initialValues';

export const SignInForm = () => {
  const handleSubmit = (formData: SignInValues, helpers: FormikHelpers<SignInValues>) => {};

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={signInSchema}>
        <Form className={'h-full flex flex-col justify-between'}>
          <Field name={''} component={TextFormField} placeholder={'Type your email...'} />
          <Field name={''} component={TextFormField} placeholder={'Type your password...'} />
          <Button type={'submit'}>Submit</Button>
        </Form>
      </Formik>
    </>
  );
};
