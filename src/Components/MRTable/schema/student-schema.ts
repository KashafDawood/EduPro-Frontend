import { MRT_ColumnDef } from "material-react-table";

export const StudentSchema: { TableSchema: MRT_ColumnDef<JSON, unknown>[] } = {
  TableSchema: [
    {
      id: "studentName",
      accessorKey: "studentName",
      header: "Student Name",
      size: 200,
    },
    {
      id: "studentCNIC",
      accessorKey: "studentCNIC",
      header: "Student CNIC",
      size: 200,
    },
    {
      id: "gender",
      accessorKey: "gender",
      header: "Gender",
      size: 200,
    },
    {
      id: "dateOfBirth",
      accessorKey: "dateOfBirth",
      header: "Date of Birth",
      size: 200,
    },
    {
      id: "dateOfAdmission",
      accessorKey: "dateOfAdmission",
      header: "Date of Admission",
      size: 200,
    },
    {
      id: "address",
      accessorKey: "address",
      header: "Address",
      size: 200,
    },
    {
      id: "studentRollNumber",
      accessorKey: "studentRollNumber",
      header: "Student Roll Number",
      size: 200,
    },
    {
      id: "religious",
      accessorKey: "religious",
      header: "Religious",
      size: 200,
    },
    {
      id: "numberOfSiblings",
      accessorKey: "numberOfSiblings",
      header: "Number of Siblings",
      size: 200,
    },
    {
      id: "admissionFee",
      accessorKey: "admissionFee",
      header: "Admission Fee",
      size: 200,
    },
    {
      id: "monthlyFee",
      accessorKey: "monthlyFee",
      header: "Monthly Fee",
      size: 200,
    },
    {
      id: "photo",
      accessorKey: "photo",
      header: "Photo",
      size: 200,
    },
    {
      id: "guardianName",
      accessorKey: "guardianName",
      header: "Guardian Name",
      size: 200,
    },
    {
      id: "guardianRelation",
      accessorKey: "guardianRelation",
      header: "Guardian Relation",
      size: 200,
    },
    {
      id: "guardianPhone",
      accessorKey: "guardianPhone",
      header: "Guardian Phone",
      size: 200,
    },
    {
      id: "guardianCNIC",
      accessorKey: "guardianCNIC",
      header: "Guardian CNIC",
      size: 200,
    },
    {
      id: "guardianProfession",
      accessorKey: "guardianProfession",
      header: "Guardian Profession",
      size: 200,
    },
    {
      id: "guardianProfessionType",
      accessorKey: "guardianProfessionType",
      header: "Guardian Profession Type",
      size: 200,
    },
    {
      id: "guardianMonthlyIncome",
      accessorKey: "guardianMonthlyIncome",
      header: "Guardian Monthly Income",
      size: 200,
    },
  ],
};
