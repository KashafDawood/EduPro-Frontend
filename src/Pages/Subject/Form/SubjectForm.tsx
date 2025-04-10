import { CREATE_SUBJECT } from "@/APIs/SubjectAPI/createSubject";
import AlertError from "@/components/Alerts/errorAlert";
import { CommonForm } from "@/components/CommonForm";
import { useMutation } from "@apollo/client/react/hooks";

export const SubjectForm = () => {
  const [createSubject, { error }] = useMutation(CREATE_SUBJECT);

  const onSubmit = async (
    data: Record<string, string | number | Date | null>
  ): Promise<boolean> => {
    try {
      const result = await createSubject({
        variables: data,
        refetchQueries: ["FindAllSubject"],
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
        formName="subjectForm"
        formTitle="Subject Form"
        buttonLabel="Add Subject"
        onSubmit={onSubmit}
      />
    </>
  );
};
