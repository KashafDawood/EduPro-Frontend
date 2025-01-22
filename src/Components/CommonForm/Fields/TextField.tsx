// import React from "react";
// import {
//   Controller,
//   Control,
//   FieldValues,
//   FieldError,
//   UseFormWatch,
// } from "react-hook-form";
// import { Grid2 as Grid, TextField } from "@mui/material";
// import { TextFieldItem } from "../types";

// // Define the component props
// interface TextFieldComponentProps {
//   control: Control<FieldValues>;
//   item: TextFieldItem;
//   watch: UseFormWatch<FieldValues>;
//   error?: FieldError | string; // Error can either be a FieldError object or a string
// }

// export const TextFieldComponent: React.FC<TextFieldComponentProps> = ({
//   control,
//   item,
//   watch,
//   error = false,
// }) => {
//   const {
//     name,
//     fullWidth = true,
//     disabled = false,
//     required = false,
//     ...rest
//   } = item || {};

//   const watchTextFieldValue = watch(name);

//   return (
//     <Grid container>
//       {/* Input Field */}
//       <Grid size={12}>
//         <Controller
//           control={control}
//           name={name}
//           render={({ field }) => (
//             <TextField
//               {...field}
//               data-testid={`${name}-field`}
//               slotProps={{
//                 inputLabel: {
//                   shrink: true,
//                 },
//               }}
//               fullWidth={fullWidth}
//               disabled={disabled}
//               error={required && !watchTextFieldValue && !!error}
//               {...rest}
//             />
//           )}
//         />
//       </Grid>
//     </Grid>
//   );
// };
