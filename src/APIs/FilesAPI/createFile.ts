import { gql } from "@apollo/client/core/core.cjs";

export const CREATE_FILE = gql`
  mutation CreateFile(
    $asset_folder: String!
    $asset_id: String!
    $bytes: Float!
    $created_at: DateTime!
    $display_name: String!
    $etag: String!
    $format: String!
    $height: Float!
    $original_filename: String!
    $placeholder: Boolean!
    $public_id: String!
    $resource_type: String!
    $secure_url: String!
    $signature: String!
    $tags: [String!]!
    $type: String!
    $url: String!
    $version: Float!
    $version_id: String!
    $width: Float!
  ) {
    createFile(
      createFileInput: {
        asset_folder: $asset_folder
        asset_id: $asset_id
        bytes: $bytes
        created_at: $created_at
        display_name: $display_name
        etag: $etag
        format: $format
        height: $height
        original_filename: $original_filename
        placeholder: $placeholder
        public_id: $public_id
        resource_type: $resource_type
        secure_url: $secure_url
        signature: $signature
        tags: $tags
        type: $type
        url: $url
        version: $version
        version_id: $version_id
        width: $width
      }
    ) {
      _id
      asset_folder
      asset_id
      bytes
      created_at
      display_name
      etag
      format
      height
      original_filename
      placeholder
      public_id
      resource_type
      secure_url
      signature
      tags
      type
      url
      version
      version_id
      width
    }
  }
`;
