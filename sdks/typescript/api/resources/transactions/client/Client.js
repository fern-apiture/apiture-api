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
exports.Transactions = void 0;
const core = __importStar(require("../../../../core"));
const __1 = require("../../../..");
const url_search_params_1 = __importDefault(require("@ungap/url-search-params"));
const url_join_1 = __importDefault(require("url-join"));
const serializers = __importStar(require("../../../../serialization"));
const errors = __importStar(require("../../../../errors"));
class Transactions {
    options;
    constructor(options) {
        this.options = options;
    }
    /**
     * Return a [paginated](https://dx.apiture.com/docs/api-documentation/concepts/pagination) collection of transaction history for this internal account. The [`nextPage_url`](https://dx.apiture.com/docs/api-documentation/concepts/links) link in the response, if present, is a pagination link to the next page of transactions for the given filters. This operation returns a 403 Forbidden error if the customer does not have `view` permissions in the `account.allows` object, or a 422 Unprocessable Entity if called on an external account. The default response lists only recent transactions. Normally, this is transactions for the most recent 30 days, although for high-volume accounts, it may be a shorter period.
     * @throws {ApitureApi.BadRequest}
     * @throws {ApitureApi.Unauthorized}
     * @throws {ApitureApi.Forbidden}
     * @throws {ApitureApi.NotFound}
     * @throws {ApitureApi.UnprocessableEntity}
     * @throws {ApitureApi.TooManyRequests}
     */
    async listTransactions(accountId, request = {}) {
        const { start, limit, occurredOn, posted, category, type: type_, subtype, createdOn, postedOn, amount, retryCount, } = request;
        const _queryParams = new url_search_params_1.default();
        if (start != null) {
            _queryParams.append("start", start);
        }
        if (limit != null) {
            _queryParams.append("limit", limit.toString());
        }
        if (occurredOn != null) {
            _queryParams.append("occurredOn", occurredOn);
        }
        if (posted != null) {
            _queryParams.append("posted", posted.toString());
        }
        if (category != null) {
            if (Array.isArray(category)) {
                for (const _item of category) {
                    _queryParams.append("category", _item);
                }
            }
            else {
                _queryParams.append("category", category);
            }
        }
        if (type_ != null) {
            if (Array.isArray(type_)) {
                for (const _item of type_) {
                    _queryParams.append("type", _item);
                }
            }
            else {
                _queryParams.append("type", type_);
            }
        }
        if (subtype != null) {
            if (Array.isArray(subtype)) {
                for (const _item of subtype) {
                    _queryParams.append("subtype", _item);
                }
            }
            else {
                _queryParams.append("subtype", subtype);
            }
        }
        if (createdOn != null) {
            _queryParams.append("createdOn", createdOn);
        }
        if (postedOn != null) {
            _queryParams.append("postedOn", postedOn);
        }
        if (amount != null) {
            _queryParams.append("amount", amount);
        }
        if (retryCount != null) {
            _queryParams.append("retryCount", retryCount.toString());
        }
        const _response = await core.fetcher({
            url: (0, url_join_1.default)(this.options.environment, `accounts/${accountId}/transactions`),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "API-Key": await core.Supplier.get(this.options.apiKey),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.Transactions.parseOrThrow(_response.body, {
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
                case 429:
                    throw new __1.ApitureApi.TooManyRequests(await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
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
     * Return a collection of transaction categories. The response is limited to 1,000 categories. This is a _conditional operation_ when the `If-None-Match` header is used. If the client has a `transactionCategories` response and the `ETag` returned from a previous call, this operation returns a 304 Not Modified if called again when the categories collection has not changed.
     * @throws {ApitureApi.BadRequest}
     * @throws {ApitureApi.Unauthorized}
     * @throws {ApitureApi.Forbidden}
     * @throws {ApitureApi.UnprocessableEntity}
     */
    async listTransactionCategories(request = {}) {
        const { ifNoneMatch } = request;
        const _response = await core.fetcher({
            url: (0, url_join_1.default)(this.options.environment, "transactionCategories"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "API-Key": await core.Supplier.get(this.options.apiKey),
                "If-None-Match": ifNoneMatch,
            },
            contentType: "application/json",
        });
        if (_response.ok) {
            return await serializers.TransactionCategories.parseOrThrow(_response.body, {
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
    async _getAuthorizationHeader() {
        const value = await core.Supplier.get(this.options.acessToken);
        if (value != null) {
            return `Bearer ${value}`;
        }
        return undefined;
    }
}
exports.Transactions = Transactions;
