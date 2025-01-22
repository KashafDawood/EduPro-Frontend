import { CommonForm } from "@/components/CommonForm";

export const ClassForm = () => {
  const onSubmit = (data: Record<string, string | number | Date | null>) => {
    console.log("classform", data);
  };

  return (
    <CommonForm
      formName="classForm"
      formTitle="Class Form"
      buttonLabel="Add Class"
      onSubmit={onSubmit}
    />
  );
};
