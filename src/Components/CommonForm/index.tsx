import React, { useState } from "react";
import { Control, FieldValues } from "react-hook-form";
import { FORMS } from "./schema";
import { Input } from "@mui/material";
import { Button } from "../ui/button";
import { MdExitToApp } from "react-icons/md";

interface FieldSchema {
  name: string;
  type?: string;
  placeholder?: string;
  options?: { label: string; value: string }[]; // For dropdowns, etc.
}

interface CommonFormProps {
  control: Control<FieldValues>;
  watch: (field: string) => any;
  getValues: () => Record<string, any>;
  setValue: (field: string, value: any) => void;
  formName: keyof typeof FORMS;
  buttonStyle: string;
  buttonText: string;
  handleSubmit: (data: any) => void;
}

export const CommonForm: React.FC<CommonFormProps> = ({
  control,
  watch,
  getValues,
  setValue,
  formName,
  buttonStyle,
  handleSubmit,
  buttonText = "Add Record",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const formSchema: FieldSchema[] = FORMS[formName](getValues, setValue) || [];

  // Function to handle Save
  const handleSave = () => {
    const values = getValues();
    handleSubmit(values);
  };

  return (
    <>
      {/* Backdrop */}
      {isVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsVisible(false)} // Close form when clicking on the backdrop
        />
      )}

      {/* Form Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[40%] bg-white shadow-lg transition-transform transform z-50 ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {!isVisible && (
          <Button
            onClick={() => setIsVisible(!isVisible)}
            className={`absolute left-[-50px] top-2 px-4 py-2 bg-blue-500 text-white rounded ${buttonStyle}`}
          >
            {buttonText}
          </Button>
        )}
        <div className="flex items-center justify-between px-4 py-3 border-b bg-gray-100">
          <h2 className="text-lg font-medium">Form</h2>
          <MdExitToApp
            className="cursor-pointer text-gray-600 hover:text-gray-800"
            onClick={() => setIsVisible(false)}
          />
        </div>
        <div className="p-6">
          {formSchema.map((field, index) => (
            <div key={index} className="mb-4">
              <label className="block text-sm font-medium mb-1">
                {field.label}
              </label>
              <Input
                type={field.type || "text"}
                placeholder={field.placeholder || ""}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            </div>
          ))}
          <div className="mt-6">
            <Button
              onClick={handleSave}
              className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
