import { DocumentNode } from "graphql";
import { Autocomplete } from "../ui/autocomplete";
import client from "@/apolloClient";
import { useEffect, useState } from "react";

interface Option {
  id: string;
  _id: string;
  name: string;
}

interface AsyncAutocompleteProps {
  query: DocumentNode;
  placeholder: string;
  value: string;
  optional: string;
  onChange: (value: string) => void;
}

export default function AsyncAutocomplete({
  query,
  placeholder,
  value,
  optional,
  onChange,
}: AsyncAutocompleteProps) {
  const fetchData = async (req: DocumentNode, optional: string) => {
    const { data } = await client.query({ query: req });
    const [key] = Object.keys(data);
    const formattedData = data[key]?.map((item: Option) => ({
      id: item._id,
      name:
        item.name +
        " " +
        (item[optional as keyof typeof item]
          ? `${item[optional as keyof typeof item]}`
          : ""),
    }));
    return formattedData;
  };

  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    const fetchOptions = async () => {
      const data = await fetchData(query, optional);
      setOptions(data);
    };
    fetchOptions();
  }, [query, optional]);

  return (
    <Autocomplete
      options={options}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
