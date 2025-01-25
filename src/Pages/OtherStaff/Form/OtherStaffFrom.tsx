import { CREATE_OTHER_STAFF } from "@/APIs/OtherStaffAPI/createOtherStaff";
import AlertError from "@/components/Alerts/errorAlert";
import { CommonForm } from "@/components/CommonForm";
import { useMutation } from "@apollo/client/react/hooks";

export const OtherStaffForm = () => {
  const [createOtherStaff, { error }] = useMutation(CREATE_OTHER_STAFF);
  const onSubmit = (data: Record<string, string | number | Date | null>) => {
    createOtherStaff({
      variables: data,
      refetchQueries: ["FindAllStaffs"],
      awaitRefetchQueries: true,
    });
  };

  return (
    <>
      {error && <AlertError>{error?.message}</AlertError>}
      <CommonForm
        formName="otherStaffForm"
        formTitle="Other Staff Form"
        buttonLabel="Add Other Staff"
        onSubmit={onSubmit}
      />
    </>
  );
};
