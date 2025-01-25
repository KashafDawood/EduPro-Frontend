import { CREATE_TEACHER } from "@/APIs/TeacherAPI/createTeacher";
import AlertError from "@/components/Alerts/errorAlert";
import { CommonForm } from "@/components/CommonForm";
import { useMutation } from "@apollo/client/react/hooks";

export const TeacherForm = () => {
  const [createTeacher, { error }] = useMutation(CREATE_TEACHER);
  const onSubmit = (data: Record<string, string | number | Date | null>) => {
    createTeacher({
      variables: data,
      refetchQueries: ["FindAllTeachers"],
      awaitRefetchQueries: true,
    });
  };

  return (
    <>
      {error && <AlertError>{error?.message}</AlertError>}
      <CommonForm
        formName="teacherForm"
        formTitle="Teacher Form"
        buttonLabel="Add Teacher"
        onSubmit={onSubmit}
      />
    </>
  );
};
