import { CommonForm } from "@/components/CommonForm/CommonForm";

export const TeacherForm = () => {
  const onSubmit = (data: Record<string, string | number | Date | null>) => {
    console.log("teacherform", data);
  };

  return (
    <CommonForm
      formName="teacherForm"
      formTitle="Teacher Form"
      buttonLabel="Add Teacher"
      onSubmit={onSubmit}
    />
  );
};
