import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message } from "@bufbuild/protobuf";
/**
 * ProjectServiceWatchRevisionRequest starts the stream of projectrevisions
 *
 * @generated from message api.v1.ProjectServiceWatchRevisionRequest
 */
export declare class ProjectServiceWatchRevisionRequest extends Message<ProjectServiceWatchRevisionRequest> {
    /**
     * project to watch for changes
     *
     * @generated from field: string project = 2;
     */
    project: string;
    constructor(data?: PartialMessage<ProjectServiceWatchRevisionRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.ProjectServiceWatchRevisionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceWatchRevisionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceWatchRevisionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceWatchRevisionRequest;
    static equals(a: ProjectServiceWatchRevisionRequest | PlainMessage<ProjectServiceWatchRevisionRequest> | undefined, b: ProjectServiceWatchRevisionRequest | PlainMessage<ProjectServiceWatchRevisionRequest> | undefined): boolean;
}
/**
 * ProjectServiceWatchRevisionResponse is returned in the stream
 *
 * @generated from message api.v1.ProjectServiceWatchRevisionResponse
 */
export declare class ProjectServiceWatchRevisionResponse extends Message<ProjectServiceWatchRevisionResponse> {
    /**
     * the project this watch is ment for
     *
     * @generated from field: string project = 1;
     */
    project: string;
    /**
     * revision is incremented if any of the resources from the project has changed
     *
     * @generated from field: uint64 revision = 2;
     */
    revision: bigint;
    /**
     * resources show the revision per resource to have a more granular view.
     *
     * @generated from field: api.v1.ResourceRevisions resources = 3;
     */
    resources?: ResourceRevisions;
    constructor(data?: PartialMessage<ProjectServiceWatchRevisionResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.ProjectServiceWatchRevisionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceWatchRevisionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceWatchRevisionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceWatchRevisionResponse;
    static equals(a: ProjectServiceWatchRevisionResponse | PlainMessage<ProjectServiceWatchRevisionResponse> | undefined, b: ProjectServiceWatchRevisionResponse | PlainMessage<ProjectServiceWatchRevisionResponse> | undefined): boolean;
}
/**
 * ResourceRevisions contain revisions by resource
 *
 * @generated from message api.v1.ResourceRevisions
 */
export declare class ResourceRevisions extends Message<ResourceRevisions> {
    /**
     * cluster revision is incremented if anything changed on the projects clusters.
     *
     * @generated from field: uint64 cluster = 1;
     */
    cluster: bigint;
    /**
     * volume revision is incremented if anything changed on the projects volumes.
     *
     * @generated from field: uint64 volume = 2;
     */
    volume: bigint;
    /**
     * ip revision is incremented if anything changed on the projects ips.
     *
     * @generated from field: uint64 ip = 3;
     */
    ip: bigint;
    constructor(data?: PartialMessage<ResourceRevisions>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.ResourceRevisions";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResourceRevisions;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResourceRevisions;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResourceRevisions;
    static equals(a: ResourceRevisions | PlainMessage<ResourceRevisions> | undefined, b: ResourceRevisions | PlainMessage<ResourceRevisions> | undefined): boolean;
}
