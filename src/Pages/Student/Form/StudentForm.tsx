import { CREATE_STUDENT } from "@/APIs/StudentAPI/createStudent";
import AlertError from "@/components/Alerts/errorAlert";
import { CommonForm } from "@/components/CommonForm";
import { uploadWithPhoto } from "@/utils/uploadHelper";
import { useMutation } from "@apollo/client/react/hooks";

export const StudentForm = () => {
  const [createStudent, { error }] = useMutation(CREATE_STUDENT);

  const onSubmit = async (
    data: Record<string, string | number | Date | null>,
    photo: File | null
  ): Promise<boolean> => {
    const res = await uploadWithPhoto(photo);
    data.photo = res;

    try {
      const result = await createStudent({
        variables: data,
        refetchQueries: ["FindAllStudent"],
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
        formName="studentForm"
        formTitle="Student Form"
        buttonLabel="Add Student"
        onSubmit={onSubmit}
      />
    </>
  );
};
