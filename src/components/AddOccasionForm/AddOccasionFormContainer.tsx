import { useFormik } from "formik";
import * as yup from "yup";
import { AddOccasionForm } from "./AddOccasionForm";

const validationSchema = yup.object({
  title: yup.string().required()
});

export interface FormikValues {
  title: string;
}

interface AddItemFormContainerProps {
  handleClose: () => void;
}

export const AddOccasionFormContainer = ({
  ...props
}: AddItemFormContainerProps) => {
  const formik = useFormik<FormikValues>({
    initialValues: {
      title: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return <AddOccasionForm formik={formik} {...props} />;
};
