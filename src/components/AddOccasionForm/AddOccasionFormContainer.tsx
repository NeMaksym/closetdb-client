import * as yup from "yup";
import { useContext } from "react";
import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";
import { OccasionsContext } from "../../utils";
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
  const { occasions, setOccasions } = useContext(OccasionsContext);

  const formik = useFormik<FormikValues>({
    initialValues: {
      title: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      setOccasions([
        ...occasions,
        {
          id: uuidv4(),
          title: values.title,
          isEveryday: false,
          items: [],
          order: occasions.length
        }
      ]);

      resetForm();
    }
  });

  return <AddOccasionForm formik={formik} {...props} />;
};
