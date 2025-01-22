import { CommonForm } from "@/components/CommonForm/CommonForm";

export const StudentForm = () => {
  const onSubmit = (data: Record<string, string | number | Date | null>) => {
    console.log("studentform", data);
  };

  return (
    <CommonForm
      formName="StudentForm"
      formTitle="Student Form"
      buttonLabel="Add Student"
      onSubmit={onSubmit}
    />
  );
};
