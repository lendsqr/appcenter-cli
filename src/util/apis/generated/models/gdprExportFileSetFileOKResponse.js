/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a GdprExportFileSetFileOKResponse.
 */
class GdprExportFileSetFileOKResponse {
  /**
   * Create a GdprExportFileSetFileOKResponse.
   * @property {string} [path]
   * @property {uuid} [hashFileId]
   * @property {uuid} [appUploadId]
   * @property {string} [hashFileUrl]
   */
  constructor() {
  }

  /**
   * Defines the metadata of GdprExportFileSetFileOKResponse
   *
   * @returns {object} metadata of GdprExportFileSetFileOKResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GdprExportFileSetFileOKResponse',
      type: {
        name: 'Composite',
        className: 'GdprExportFileSetFileOKResponse',
        modelProperties: {
          path: {
            required: false,
            serializedName: 'path',
            type: {
              name: 'String'
            }
          },
          hashFileId: {
            required: false,
            serializedName: 'hash_file_id',
            type: {
              name: 'String'
            }
          },
          appUploadId: {
            required: false,
            serializedName: 'app_upload_id',
            type: {
              name: 'String'
            }
          },
          hashFileUrl: {
            required: false,
            serializedName: 'hash_file_url',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = GdprExportFileSetFileOKResponse;