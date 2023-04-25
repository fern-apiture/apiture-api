"use strict";
/**
 * This file was auto-generated by Fern from our API Definition.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transfers = void 0;
const core = __importStar(require("../../../../core"));
const __1 = require("../../../..");
const url_search_params_1 = __importDefault(require("@ungap/url-search-params"));
const url_join_1 = __importDefault(require("url-join"));
const serializers = __importStar(require("../../../../serialization"));
const errors = __importStar(require("../../../../errors"));
class Transfers {
    options;
    constructor(options) {
        this.options = options;
    }
    /**
     * Return a [paginated](https://dx.apiture.com/docs/api-documentation/concepts/pagination) collection of transfers. The [nextPage_url](https://dx.apiture.com/docs/api-documentation/concepts/links) in the response is a pagination link.
     * @throws {ApitureApi.BadRequest}
     * @throws {ApitureApi.Unauthorized}
     * @throws {ApitureApi.Forbidden}
     * @throws {ApitureApi.UnprocessableEntity}
     */
    async listTransfers(request = {}) {
        const { scheduledOn, debitsOn, creditsOn, historical, start, limit } = request;
        const _queryParams = new url_search_params_1.default();
        if (scheduledOn != null) {
            _queryParams.append("scheduledOn", scheduledOn);
        }
        if (debitsOn != null) {
            _queryParams.append("debitsOn", debitsOn);
        }
        if (creditsOn != null) {
            _queryParams.append("creditsOn", creditsOn);
        }
        if (historical != null) {
            _queryParams.append("historical", historical.toString());
        }
        if (start != null) {
            _queryParams.append("start", start);
        }
        if (limit != null) {
            _queryParams.append("limit", limit.toString());
        }
        const _response = await core.fetcher({
            url: (0, url_join_1.default)(this.options.environment, "/transfers"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "API-Key": await core.Supplier.get(this.options.apiKey),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.Transfers.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }
        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new __1.ApitureApi.BadRequest(await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                    }));
                case 401:
                    throw new __1.ApitureApi.Unauthorized(await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                    }));
                case 403:
                    throw new __1.ApitureApi.Forbidden(await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                    }));
                case 422:
                    throw new __1.ApitureApi.UnprocessableEntity(await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                    }));
                default:
                    throw new errors.ApitureApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }
        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ApitureApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ApitureApiTimeoutError();
            case "unknown":
                throw new errors.ApitureApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
    /**
     * Create a new transfer within the transfers collection. If all the necessary properties are set, the transfer is queued for processing. If the request omits the `schedule.scheduledOn` date, the transfer remains pending/unscheduled until the user sets it via the [`patchTransfer`](#op-patchTransfer) operation. Note: This operation requires an identity challenge if the financial institution requires the user to proove their identity for some types of transfers. See the "Challenges API".
     * @throws {ApitureApi.BadRequest}
     * @throws {ApitureApi.Unauthorized}
     * @throws {ApitureApi.Forbidden}
     * @throws {ApitureApi.UnprocessableEntity}
     */
    async createTransfer(request = {}) {
        const { challenge, ..._body } = request;
        const _response = await core.fetcher({
            url: (0, url_join_1.default)(this.options.environment, "/transfers"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "API-Key": await core.Supplier.get(this.options.apiKey),
                Challenge: challenge,
            },
            contentType: "application/json",
            body: await serializers.NewTransfer.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
        });
        if (_response.ok) {
            return;
        }
        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new __1.ApitureApi.BadRequest(await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                    }));
                case 401:
                    throw new __1.ApitureApi.Unauthorized(await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                    }));
                case 403:
                    throw new __1.ApitureApi.Forbidden(await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                    }));
                case 422:
                    throw new __1.ApitureApi.UnprocessableEntity(await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                    }));
                default:
                    throw new errors.ApitureApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }
        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ApitureApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ApitureApiTimeoutError();
            case "unknown":
                throw new errors.ApitureApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
    /**
     * Return the JSON representation of this transfer resource.
     * @throws {ApitureApi.Unauthorized}
     * @throws {ApitureApi.Forbidden}
     * @throws {ApitureApi.NotFound}
     */
    async getTransfer(transferId) {
        const _response = await core.fetcher({
            url: (0, url_join_1.default)(this.options.environment, `/transfers/${transferId}`),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "API-Key": await core.Supplier.get(this.options.apiKey),
            },
            contentType: "application/json",
        });
        if (_response.ok) {
            return await serializers.Transfer.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }
        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new __1.ApitureApi.Unauthorized(await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                    }));
                case 403:
                    throw new __1.ApitureApi.Forbidden(await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                    }));
                case 404:
                    throw new __1.ApitureApi.NotFound(await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                    }));
                default:
                    throw new errors.ApitureApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }
        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ApitureApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ApitureApiTimeoutError();
            case "unknown":
                throw new errors.ApitureApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
    /**
     * Delete this transfer resource and any resources that are owned by it. Only transfers that have not been processed may be deleted.
     * @throws {ApitureApi.BadRequest}
     * @throws {ApitureApi.Unauthorized}
     * @throws {ApitureApi.NotFound}
     */
    async deleteTransfer(transferId) {
        const _response = await core.fetcher({
            url: (0, url_join_1.default)(this.options.environment, `/transfers/${transferId}`),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "API-Key": await core.Supplier.get(this.options.apiKey),
            },
            contentType: "application/json",
        });
        if (_response.ok) {
            return;
        }
        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new __1.ApitureApi.BadRequest(await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                    }));
                case 401:
                    throw new __1.ApitureApi.Unauthorized(await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                    }));
                case 404:
                    throw new __1.ApitureApi.NotFound(await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                    }));
                default:
                    throw new errors.ApitureApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }
        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ApitureApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ApitureApiTimeoutError();
            case "unknown":
                throw new errors.ApitureApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
    /**
     * Perform a partial update of this transfer as per [JSON Merge Patch](https://datatracker.ietf.org/doc/html/rfc7396) format and processing rules. Only fields in the request body are updated on the resource; fields which are omitted are not updated. Note: This operation requires an identity challenge if the financial institution requires the user to prove their identity for some types of transfers. See the "Challenges API".
     * @throws {ApitureApi.BadRequest}
     * @throws {ApitureApi.Unauthorized}
     * @throws {ApitureApi.Forbidden}
     * @throws {ApitureApi.NotFound}
     * @throws {ApitureApi.UnprocessableEntity}
     */
    async patchTransfer(transferId, request = {}) {
        const { challenge, ..._body } = request;
        const _response = await core.fetcher({
            url: (0, url_join_1.default)(this.options.environment, `/transfers/${transferId}`),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "API-Key": await core.Supplier.get(this.options.apiKey),
                Challenge: challenge,
            },
            contentType: "application/json",
            body: await serializers.TransferPatch.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
        });
        if (_response.ok) {
            return await serializers.Transfer.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }
        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new __1.ApitureApi.BadRequest(await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                    }));
                case 401:
                    throw new __1.ApitureApi.Unauthorized(await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                    }));
                case 403:
                    throw new __1.ApitureApi.Forbidden(await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                    }));
                case 404:
                    throw new __1.ApitureApi.NotFound(await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                    }));
                case 422:
                    throw new __1.ApitureApi.UnprocessableEntity(await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                    }));
                default:
                    throw new errors.ApitureApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }
        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ApitureApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ApitureApiTimeoutError();
            case "unknown":
                throw new errors.ApitureApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
    async _getAuthorizationHeader() {
        const value = await core.Supplier.get(this.options.acessToken);
        if (value != null) {
            return `Bearer ${value}`;
        }
        return undefined;
    }
}
exports.Transfers = Transfers;