import React, { useState } from "react";

interface ProfilePictureUploadProps {
  value?: string;
  onChange: (file: File | null) => void;
}

const ProfilePictureUpload: React.FC<ProfilePictureUploadProps> = ({
  onChange,
}) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
    onChange(file);
  };

  return (
    <div className="relative inline-block text-center">
      {/* Profile Picture Container */}
      <div className="w-24 h-24 rounded-full overflow-hidden mx-auto">
        {preview ? (
          <img
            src={preview}
            alt="Profile Preview"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <span className="text-gray-500">No Image</span>
          </div>
        )}
      </div>

      {/* Edit Icon (Pencil) - positioned at bottom-right */}
      <label
        htmlFor="profile-upload"
        className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4
                   bg-white p-2 rounded-full border border-gray-300 cursor-pointer shadow"
        title="Edit photo"
      >
        <svg
          className="w-4 h-4 text-gray-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 9.5-9.5z" />
        </svg>
      </label>

      {/* Hidden File Input */}
      <input
        id="profile-upload"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
};

export default ProfilePictureUpload;
