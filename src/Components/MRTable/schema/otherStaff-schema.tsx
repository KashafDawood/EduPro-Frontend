import { TableSchema } from "../types";
import { defaultStyles, defaultSize } from "./schema-helpers";

export const OtherStaffSchema: TableSchema = {
  styles: defaultStyles,
  TableSchema: [
    {
      id: "otherstaffInfo",
      header: "Name",
      size: defaultSize,
      isVisible: true,
      Cell: ({
        row,
      }: {
        row: { original: { photo: string; name: string } };
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
          <span>{row.original.name}</span>
        </div>
      ),
    },
    {
      id: "phone",
      accessorKey: "phone",
      header: "Phone",
      size: defaultSize,
    },
    {
      id: "guardianPhone",
      accessorKey: "guardianPhone",
      header: "Guardian Phone",
      size: defaultSize,
    },
    {
      id: "address",
      accessorKey: "address",
      header: "Address",
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
      id: "CNIC",
      accessorKey: "CNIC",
      header: "CNIC",
      size: defaultSize,
    },
    {
      id: "guardianCNIC",
      accessorKey: "guardianCNIC",
      header: "Guardian CNIC",
      size: defaultSize,
    },
    {
      id: "dateOfBirth",
      accessorKey: "dateOfBirth",
      header: "Date of Birth",
      size: defaultSize,
    },
    {
      id: "dateOfJoining",
      accessorKey: "dateOfJoining",
      header: "Date of Joining",
      size: defaultSize,
    },
    {
      id: "qualification",
      accessorKey: "qualification",
      header: "Qualification",
      size: defaultSize,
    },
    {
      id: "role",
      accessorKey: "role",
      header: "Role",
      size: defaultSize,
    },
    {
      id: "salary",
      accessorKey: "salary",
      header: "Salary",
      size: defaultSize,
    },
  ],
};
