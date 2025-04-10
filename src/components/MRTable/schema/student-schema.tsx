import { TableSchema } from "../types";
import { defaultStyles, defaultSize } from "./schema-helpers";

export const StudentSchema: TableSchema = {
  styles: defaultStyles,
  TableSchema: [
    {
      id: "studentInfo",
      header: "Student",
      size: defaultSize,
      isVisible: true,
      Cell: ({
        row,
      }: {
        row: { original: { photo: string; studentName: string } };
      }) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          {row.original.photo && (
            <img
              src={row.original.photo}
              style={{
                objectFit: "cover",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                marginRight: "10px",
              }}
            />
          )}
          <span>{row.original.studentName}</span>
        </div>
      ),
    },
    {
      id: "studentCNIC",
      accessorKey: "studentCNIC",
      header: "Student CNIC",
      size: defaultSize,
    },
    {
      id: "gender",
      accessorKey: "gender",
      header: "Gender",
      size: defaultSize,
    },
    {
      id: "dateOfBirth",
      accessorKey: "dateOfBirth",
      header: "Date of Birth",
      size: defaultSize,
    },
    {
      id: "dateOfAdmission",
      accessorKey: "dateOfAdmission",
      header: "Date of Admission",
      size: defaultSize,
    },
    {
      id: "address",
      accessorKey: "address",
      header: "Address",
      size: defaultSize,
    },
    {
      id: "studentRollNumber",
      accessorKey: "studentRollNumber",
      header: "Student Roll Number",
      size: defaultSize,
    },
    {
      id: "religious",
      accessorKey: "religious",
      header: "Religious",
      size: defaultSize,
    },
    {
      id: "numberOfSiblings",
      accessorKey: "numberOfSiblings",
      header: "Number of Siblings",
      size: defaultSize,
    },
    {
      id: "admissionFee",
      accessorKey: "admissionFee",
      header: "Admission Fee",
      size: defaultSize,
    },
    {
      id: "monthlyFee",
      accessorKey: "monthlyFee",
      header: "Monthly Fee",
      size: defaultSize,
    },
    {
      id: "guardianName",
      accessorKey: "guardianName",
      header: "Guardian Name",
      size: defaultSize,
    },
    {
      id: "guardianRelation",
      accessorKey: "guardianRelation",
      header: "Guardian Relation",
      size: defaultSize,
    },
    {
      id: "guardianPhone",
      accessorKey: "guardianPhone",
      header: "Guardian Phone",
      size: defaultSize,
    },
    {
      id: "guardianCNIC",
      accessorKey: "guardianCNIC",
      header: "Guardian CNIC",
      size: defaultSize,
    },
    {
      id: "guardianProfession",
      accessorKey: "guardianProfession",
      header: "Guardian Profession",
      size: defaultSize,
    },
    {
      id: "guardianProfessionType",
      accessorKey: "guardianProfessionType",
      header: "Guardian Profession Type",
      size: defaultSize,
    },
    {
      id: "guardianMonthlyIncome",
      accessorKey: "guardianMonthlyIncome",
      header: "Guardian Monthly Income",
      size: defaultSize,
    },
  ],
};
