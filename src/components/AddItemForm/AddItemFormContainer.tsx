import * as yup from "yup";
import { useContext } from "react";
import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";
import { AddItemForm } from "./AddItemForm";
import { Type, Season } from "../../types";
import { OccasionsContext } from "../../utils";

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
  const { occasions, setOccasions } = useContext(OccasionsContext);

  const OCCASIONS_ID = occasions.map(({ id }) => id);

  const validationSchema = yup.object({
    occasion: yup.string().oneOf(OCCASIONS_ID).required(),
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

  const formik = useFormik<FormikValues>({
    initialValues: {
      occasion: OCCASIONS_ID[0],
      name: "",
      type: Type.Head,
      season: [Season.Summer],
      brand: "",
      price: "",
      startDate: null
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      const isEverydayOccasion = occasions.find(
        ({ id }) => id === values.occasion
      )?.isEveryday;

      if (!isEverydayOccasion) {
        values.season = [];
      }

      setOccasions(
        occasions.map((occasion) => {
          if (occasion.id === values.occasion) {
            return {
              ...occasion,
              items: [
                ...occasion.items,
                {
                  id: uuidv4(),
                  name: values.name,
                  type: values.type,
                  season: values.season,
                  brand: values.brand,
                  price: Number(values.price) || undefined,
                  startDate: values.startDate ?? undefined,
                  order: occasion.items.length
                }
              ]
            };
          }

          return occasion;
        })
      );

      resetForm();
    }
  });

  return <AddItemForm formik={formik} occasions={occasions} {...props} />;
};
