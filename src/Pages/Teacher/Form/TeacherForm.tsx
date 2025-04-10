import { CREATE_TEACHER } from "@/APIs/TeacherAPI/createTeacher";
import AlertError from "@/components/Alerts/errorAlert";
import { CommonForm } from "@/components/CommonForm";
import { uploadWithPhoto } from "@/utils/uploadHelper";
import { useMutation } from "@apollo/client/react/hooks";

export const TeacherForm = () => {
  const [createTeacher, { error }] = useMutation(CREATE_TEACHER);

  const onSubmit = async (
    data: Record<string, string | number | Date | null>,
    photo: File | null
  ): Promise<boolean> => {
    const res = await uploadWithPhoto(photo);
    data.photo = res;

    try {
      const result = await createTeacher({
        variables: data,
        refetchQueries: ["FindAllTeachers"],
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
        formName="teacherForm"
        formTitle="Teacher Form"
        buttonLabel="Add Teacher"
        onSubmit={onSubmit}
      />
    </>
  );
};
