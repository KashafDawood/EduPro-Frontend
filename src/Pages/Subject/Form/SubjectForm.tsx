import { CREATE_SUBJECT } from "@/APIs/SubjectAPI/createSubject";
import AlertError from "@/components/Alerts/errorAlert";
import { CommonForm } from "@/components/CommonForm";
import { useMutation } from "@apollo/client/react/hooks";

export const SubjectForm = () => {
  const [createSubject, { error }] = useMutation(CREATE_SUBJECT);
  const onSubmit = (data: Record<string, string | number | Date | null>) => {
    createSubject({
      variables: data,
      refetchQueries: ["FindAllSubject"],
      awaitRefetchQueries: true,
    });
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
