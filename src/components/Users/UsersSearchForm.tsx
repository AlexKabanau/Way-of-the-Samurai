import { Field, Form, Formik } from 'formik';
import { FilterType } from '../../redux/users-reducer';
import { FC } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import { getUsersFilter } from '../../redux/users-selectors';

type PropsType = {
  onFilterChanged: (filter: FilterType) => void;
};
type FreindFormType = 'true' | 'false' | 'null';
type FormType = {
  term: string;
  friend: FreindFormType;
};

const usersSearchFormValidate = (values: any) => {
  const errors = {};
  // if (!values.email) {
  //   errors.email = 'Required';
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
  //   errors.email = 'Invalid email address';
  // }
  return errors;
};

// type UsersSerachFormObjectType = {
//   term: '';
// };

export const UsersSerachForm: FC<PropsType> = React.memo((props) => {
  const filter: FilterType = useSelector(getUsersFilter);
  const submit = (
    values: FormType,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => {
    props.onFilterChanged(filter);
    setSubmitting(false);
    // debugger
    // setTimeout(() => {
    //   alert(JSON.stringify(values, null, 2));
    //   setSubmitting(false);
    // }, 400);
  };

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={{ term: filter.term, friend: String(filter.friend) as FreindFormType }}
        validate={usersSearchFormValidate}
        onSubmit={submit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="term" />

            <Field name="friend" as="select">
              <option value="null">All</option>
              <option value="true">Only followed</option>
              <option value="false">Only unfollowed</option>
            </Field>
            <button type="submit" disabled={isSubmitting}>
              Find
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
});
