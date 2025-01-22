import { CommonForm } from "@/components/CommonForm";

export const StudentForm = () => {
  const onSubmit = (data: Record<string, string | number | Date | null>) => {
    console.log("studentform", data);
  };

  return (
    <CommonForm
      formName="studentForm"
      formTitle="Student Form"
      buttonLabel="Add Student"
      onSubmit={onSubmit}
    />
  );
};
