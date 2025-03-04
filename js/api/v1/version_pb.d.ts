import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file api/v1/version.proto.
 */
export declare const file_api_v1_version: GenFile;
/**
 * Version of the application
 *
 * @generated from message api.v1.Version
 */
export type Version = Message<"api.v1.Version"> & {
    /**
     * Version of the application
     *
     * @generated from field: string version = 1;
     */
    version: string;
    /**
     * Revision of the application
     *
     * @generated from field: string revision = 2;
     */
    revision: string;
    /**
     * GitSHA1 of the application
     *
     * @generated from field: string git_sha1 = 3;
     */
    gitSha1: string;
    /**
     * BuildDate of the application
     *
     * @generated from field: string build_date = 4;
     */
    buildDate: string;
};
/**
 * Describes the message api.v1.Version.
 * Use `create(VersionSchema)` to create a new message.
 */
export declare const VersionSchema: GenMessage<Version>;
/**
 * VersionServiceGetRequest is the request payload to get the version
 *
 * @generated from message api.v1.VersionServiceGetRequest
 */
export type VersionServiceGetRequest = Message<"api.v1.VersionServiceGetRequest"> & {};
/**
 * Describes the message api.v1.VersionServiceGetRequest.
 * Use `create(VersionServiceGetRequestSchema)` to create a new message.
 */
export declare const VersionServiceGetRequestSchema: GenMessage<VersionServiceGetRequest>;
/**
 * VersionServiceGetResponse is the response payload with the version
 *
 * @generated from message api.v1.VersionServiceGetResponse
 */
export type VersionServiceGetResponse = Message<"api.v1.VersionServiceGetResponse"> & {
    /**
     * Version of the application
     *
     * @generated from field: api.v1.Version version = 1;
     */
    version?: Version;
};
/**
 * Describes the message api.v1.VersionServiceGetResponse.
 * Use `create(VersionServiceGetResponseSchema)` to create a new message.
 */
export declare const VersionServiceGetResponseSchema: GenMessage<VersionServiceGetResponse>;
/**
 * VersionService serves version related functions
 *
 * @generated from service api.v1.VersionService
 */
export declare const VersionService: GenService<{
    /**
     * Get the version
     *
     * @generated from rpc api.v1.VersionService.Get
     */
    get: {
        methodKind: "unary";
        input: typeof VersionServiceGetRequestSchema;
        output: typeof VersionServiceGetResponseSchema;
    };
}>;
