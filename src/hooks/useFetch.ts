import { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client/react/hooks";
import { DocumentNode } from "graphql";

interface ExtractedItem {
  id: string;
  name: string;
}

const useFetchData = (
  query: DocumentNode,
  optional?: string,
  isOpen?: boolean
): ExtractedItem[] => {
  const [fetchData, { data }] = useLazyQuery(query);
  const [extractedData, setExtractedData] = useState<ExtractedItem[]>([]);

  useEffect(() => {
    if (isOpen) {
      fetchData();
      if (data) {
        const [key] = Object.keys(data);
        const formattedData = data[key]?.map((item: any) => ({
          id: item._id,
          name:
            item.name +
            " " +
            (item[optional as keyof typeof item]
              ? `${item[optional as keyof typeof item]}`
              : ""),
        }));
        setExtractedData(formattedData);
      }
    }
  }, [isOpen, data, fetchData, optional]);

  return extractedData;
};

export default useFetchData;
