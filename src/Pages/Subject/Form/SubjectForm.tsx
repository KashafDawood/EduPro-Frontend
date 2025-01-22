import { CommonForm } from "@/components/CommonForm";

export const SubjectForm = () => {
  const onSubmit = (data: Record<string, string | number | Date | null>) => {
    console.log("subjectform", data);
  };

  return (
    <CommonForm
      formName="subjectForm"
      formTitle="Subject Form"
      buttonLabel="Add Subject"
      onSubmit={onSubmit}
    />
  );
};
