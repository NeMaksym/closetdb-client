import { useFormik } from "formik";
import * as yup from "yup";
import { Type, Season, occasions } from "../../types";
import { AddItemForm } from "./AddItemForm";

const OCCASIONS = occasions.map((occasion) => occasion.id);

const validationSchema = yup.object({
  occasion: yup.string().oneOf(OCCASIONS).required(),
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
  occasion: string;
  name: string;
  type: Type;
  season: Season[];
  brand: string;
  price: number | string;
  startDate: Date | null;
}

interface AddItemFormContainerProps {
  handleClose: () => void;
}

export const AddItemFormContainer = ({
  ...props
}: AddItemFormContainerProps) => {
  const formik = useFormik<FormikValues>({
    initialValues: {
      occasion: OCCASIONS[0],
      name: "",
      type: Type.Head,
      season: [Season.Summer],
      brand: "",
      price: "",
      startDate: null
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const isEverydayOccasion = occasions.find(
        ({ id }) => id === values.occasion
      )?.isEveryday;

      if (!isEverydayOccasion) {
        values.season = [];
      }

      alert(JSON.stringify(values, null, 2));
    }
  });

  return <AddItemForm formik={formik} occasions={occasions} {...props} />;
};
