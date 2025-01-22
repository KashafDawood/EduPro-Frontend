// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React from "react";
// import {
//   Control,
//   FieldValues,
//   UseFormGetValues,
//   UseFormReset,
//   UseFormSetValue,
//   UseFormWatch,
// } from "react-hook-form";
// import { FORMS } from "./schema";
// import { Slideout } from "./Slideout";
// import { TextFieldComponent } from "./Fields/TextField";
// import { FormFieldSchema } from "./types";

// interface CommonFormProps {
//   control: Control<FieldValues>;
//   watch: UseFormWatch<FieldValues>;
//   getValues: UseFormGetValues<FieldValues>;
//   setValue: UseFormSetValue<FieldValues>;
//   formName: keyof typeof FORMS;
//   buttonStyle: string;
//   buttonText: string;
//   formLabel: string;
//   handleSubmit: (data: any) => void;
//   reset: UseFormReset<FieldValues>;
// }

// export const CommonForm: React.FC<CommonFormProps> = ({
//   control,
//   watch,
//   getValues,
//   setValue,
//   formName,
//   formLabel,
//   reset,
//   buttonStyle,
//   handleSubmit,
//   buttonText = "Add Record",
// }) => {
//   const formSchema: FormFieldSchema[] =
//     FORMS[formName](getValues, setValue) || [];

//   // Function to handle Save
//   const handleSave = () => {
//     const values = getValues();
//     handleSubmit(values);
//   };

//   return (
//     <Slideout
//       formTitle={formLabel}
//       buttonLabel={buttonText}
//       handleSubmit={handleSave}
//       buttonStyle={buttonStyle}
//       reset={reset}
//     >
//       <div className="pt-6 pb-6">
//         {formSchema.map((field) => (
//           <div key={field.name} className="mt-4">
//             <TextFieldComponent control={control} item={field} watch={watch} />
//           </div>
//         ))}
//       </div>
//     </Slideout>
//   );
// };
