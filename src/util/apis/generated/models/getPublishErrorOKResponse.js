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
 * ReleasePublishErrorResponse
 *
 */
class GetPublishErrorOKResponse {
  /**
   * Create a GetPublishErrorOKResponse.
   * @property {string} [message] error Details
   * @property {boolean} [isLogAvailable] boolean property to tell if logs are
   * available for download
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetPublishErrorOKResponse
   *
   * @returns {object} metadata of GetPublishErrorOKResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetPublishErrorOKResponse',
      type: {
        name: 'Composite',
        className: 'GetPublishErrorOKResponse',
        modelProperties: {
          message: {
            required: false,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          },
          isLogAvailable: {
            required: false,
            serializedName: 'is_log_available',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = GetPublishErrorOKResponse;