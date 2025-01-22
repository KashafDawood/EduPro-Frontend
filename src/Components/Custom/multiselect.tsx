import { DocumentNode } from "graphql";
import { MultiSelect } from "../ui/multiselect";
import client from "@/apolloClient";
import { useEffect, useState } from "react";

interface AsyncMultiSelectProps {
  query: DocumentNode;
  placeholder: string;
  value: string[];
  onChange: (selected: string[]) => void;
}

interface Option {
  id: string;
  _id: string;
  name: string;
}

export default function AsyncMultiselect({
  query,
  placeholder,
  value,
  onChange,
}: AsyncMultiSelectProps) {
  const fetchData = async (req: DocumentNode) => {
    const { data } = await client.query({ query: req });
    const [key] = Object.keys(data);
    const formattedData = data[key]?.map((item: Option) => ({
      id: item._id,
      name: item.name,
    }));
    return formattedData;
  };

  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    const fetchOptions = async () => {
      const data = await fetchData(query);
      setOptions(data);
    };
    fetchOptions();
  }, [query]);

  return (
    <MultiSelect
      options={options}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
