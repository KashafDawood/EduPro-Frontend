import { CREATE_FILE } from "@/APIs/FilesAPI/createFile";
import client from "@/apolloClient";

export const uploadWithPhoto = async (photoFile: File | null) => {
  if (photoFile) {
    const formData = new FormData();
    formData.append("file", photoFile);
    formData.append("upload_preset", "edupro");

    try {
      const cloudRes = await fetch(
        "https://api.cloudinary.com/v1_1/dhxbhiyyy/upload",
        { method: "POST", body: formData }
      );

      const cloudData = await cloudRes.json();
      if (!cloudRes.ok) {
        throw new Error(cloudData.error.message || "Upload failed");
      }

      await client.mutate({
        mutation: CREATE_FILE,
        variables: cloudData,
      });

      return cloudData.secure_url;
    } catch (error) {
      console.error("Error while uploading image:", error);
      throw error;
    }
  } else {
    throw new Error("No photo file provided");
  }
};
