import { Field, Form, Formik } from 'formik';

const usersSearchFormValidate = (values: any) => {
  const errors = {};
  // if (!values.email) {
  //   errors.email = 'Required';
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
  //   errors.email = 'Invalid email address';
  // }
  return errors;
};

type UsersSerachFormObjectType = {
  term: '';
};

export const UsersSerachForm = () => {
  const submit = (
    values: UsersSerachFormObjectType,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => {
    // debugger
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <>
      <Formik initialValues={{ term: '' }} validate={usersSearchFormValidate} onSubmit={submit}>
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="term" />
            <button type="submit" disabled={isSubmitting}>
              Find
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
