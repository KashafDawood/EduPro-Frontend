import { CREATE_CLASS } from "@/APIs/ClassAPI/createClass";
import AlertError from "@/components/Alerts/errorAlert";
import { CommonForm } from "@/components/CommonForm";
import { useMutation } from "@apollo/client/react/hooks";

export const ClassForm = () => {
  const [createClass, { error }] = useMutation(CREATE_CLASS);

  const onSubmit = async (
    data: Record<string, string | number | Date | null>
  ): Promise<boolean> => {
    try {
      const result = await createClass({
        variables: data,
        refetchQueries: ["FindAllClasses"],
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
        formName="classForm"
        formTitle="Class Form"
        buttonLabel="Add Class"
        onSubmit={onSubmit}
      />
    </>
  );
};
