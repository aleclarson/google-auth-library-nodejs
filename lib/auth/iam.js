/**
 * Copyright 2014 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IAMAuth = (function () {
    /**
     * IAM credentials.
     *
     * @param {string=} selector the iam authority selector
     * @param {string=} token the token
     * @constructor
     */
    function IAMAuth(selector, token) {
        this.selector = selector;
        this.token = token;
        this.selector = selector;
        this.token = token;
    }
    /**
     * Indicates whether the credential requires scopes to be created by calling
     * createdScoped before use.
     *
     * @return {boolean} always false
     */
    IAMAuth.prototype.createScopedRequired = function () {
        // IAM authorization does not use scopes.
        return false;
    };
    /**
     * Pass the selector and token to the metadataFn callback.
     *
     * @param {string} unused_uri is required of the credentials interface
     * @param {function} metadataFn a callback invoked with object
     *                   containing request metadata.
     */
    IAMAuth.prototype.getRequestMetadata = function (unused_uri, metadataFn) {
        metadataFn(null, {
            'x-goog-iam-authority-selector': this.selector,
            'x-goog-iam-authorization-token': this.token
        });
    };
    return IAMAuth;
}());
exports.IAMAuth = IAMAuth;
