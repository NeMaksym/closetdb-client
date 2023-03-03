import { useFormik } from "formik";
import * as yup from "yup";
import { Type, Season } from "../../types";
import { AddItemForm } from "./AddItemForm";

const validationSchema = yup.object({
  name: yup.string().required(),
  type: yup.string().oneOf(Object.values(Type)).required(),
  season: yup
    .array()
    .of(yup.string().oneOf(Object.values(Season)))
    .min(1)
    .required(),
  brand: yup.string(),
  price: yup.number().positive().integer(),
  startDate: yup.date().nullable()
});

export interface FormikValues {
  name: string;
  type: Type;
  season: Season[];
  brand: string;
  price: number | string;
  startDate: Date | null;
}

interface AddItemFormContainerProps {
  open: boolean;
  handleClose: () => void;
}

export const AddItemFormContainer = ({
  ...props
}: AddItemFormContainerProps) => {
  const formik = useFormik<FormikValues>({
    initialValues: {
      name: "",
      type: Type.Head,
      season: [Season.Summer],
      brand: "",
      price: "",
      startDate: null
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return <AddItemForm formik={formik} {...props} />;
};
