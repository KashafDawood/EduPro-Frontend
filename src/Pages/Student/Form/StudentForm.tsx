import { CREATE_STUDENT } from "@/APIs/StudentAPI/createStudent";
import AlertError from "@/components/Alerts/errorAlert";
import { CommonForm } from "@/components/CommonForm";
import { useMutation } from "@apollo/client/react/hooks";

export const StudentForm = () => {
  const [createStudent, { error }] = useMutation(CREATE_STUDENT);

  const onSubmit = (data: Record<string, string | number | Date | null>) => {
    createStudent({
      variables: data,
      refetchQueries: ["FindAllStudent"],
      awaitRefetchQueries: true,
    });
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
