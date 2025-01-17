import { CommonForm } from "@/components/CommonForm/CommonForm";

export const StudentForm = () => {
  const handleSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  return <CommonForm formName="StudentForm" onSubmit={handleSubmit} />;
};
