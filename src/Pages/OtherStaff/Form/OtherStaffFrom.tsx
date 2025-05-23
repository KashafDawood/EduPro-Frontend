import { CREATE_OTHER_STAFF } from "@/APIs/OtherStaffAPI/createOtherStaff";
import AlertError from "@/components/Alerts/errorAlert";
import { CommonForm } from "@/components/CommonForm";
import { uploadWithPhoto } from "@/utils/uploadHelper";
import { useMutation } from "@apollo/client/react/hooks";

export const OtherStaffForm = () => {
  const [createOtherStaff, { error }] = useMutation(CREATE_OTHER_STAFF);

  const onSubmit = async (
    data: Record<string, string | number | Date | null>,
    photo: File | null
  ): Promise<boolean> => {
    const res = await uploadWithPhoto(photo);
    data.photo = res;

    try {
      const result = await createOtherStaff({
        variables: data,
        refetchQueries: ["FindAllStaffs"],
        awaitRefetchQueries: true,
      });
      return !!result.data;
    } catch {
      return false;
    }
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
