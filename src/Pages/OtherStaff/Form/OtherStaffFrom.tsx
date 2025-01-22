import { CommonForm } from "@/components/CommonForm/CommonForm";

export const OtherStaffForm = () => {
  const onSubmit = (data: Record<string, string | number | Date | null>) => {
    console.log("otherStaffform", data);
  };

  return (
    <CommonForm
      formName="otherStaffForm"
      formTitle="Other Staff Form"
      buttonLabel="Add Other Staff"
      onSubmit={onSubmit}
    />
  );
};
