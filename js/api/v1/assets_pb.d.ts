import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file api/v1/assets.proto.
 */
export declare const file_api_v1_assets: GenFile;
/**
 * Asset defines the available resources which can be used
 *
 * @generated from message api.v1.Asset
 */
export type Asset = Message<"api.v1.Asset"> & {
    /**
     * Region defines a datacenter location, e.g. a city.
     *
     * @generated from field: api.v1.Region region = 1;
     */
    region?: Region;
    /**
     * MachineTypes available by region
     *
     * @generated from field: map<string, api.v1.MachineType> machine_types = 2;
     */
    machineTypes: {
        [key: string]: MachineType;
    };
    /**
     * Kubernetes a list of kubernetes versions
     *
     * @generated from field: repeated api.v1.Kubernetes kubernetes = 3;
     */
    kubernetes: Kubernetes[];
};
/**
 * Describes the message api.v1.Asset.
 * Use `create(AssetSchema)` to create a new message.
 */
export declare const AssetSchema: GenMessage<Asset>;
/**
 * Region defines a datacenter location
 *
 * @generated from message api.v1.Region
 */
export type Region = Message<"api.v1.Region"> & {
    /**
     * Id is the technical identifier of this region
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * Name of the region
     *
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * Address is the postal address of the region
     *
     * @generated from field: string address = 3;
     */
    address: string;
    /**
     * Active indicates if this region is usable
     *
     * @generated from field: bool active = 4;
     */
    active: boolean;
    /**
     * Partitions in this region
     *
     * @generated from field: map<string, api.v1.Partition> partitions = 5;
     */
    partitions: {
        [key: string]: Partition;
    };
    /**
     * Defaults are the default assets used if not otherwise specified.
     *
     * @generated from field: api.v1.AssetDefaults defaults = 6;
     */
    defaults?: AssetDefaults;
    /**
     * Description of the region
     *
     * @generated from field: string description = 7;
     */
    description: string;
};
/**
 * Describes the message api.v1.Region.
 * Use `create(RegionSchema)` to create a new message.
 */
export declare const RegionSchema: GenMessage<Region>;
/**
 * Partition defines a failure domain in one Region.
 *
 * @generated from message api.v1.Partition
 */
export type Partition = Message<"api.v1.Partition"> & {
    /**
     * Id is the technical id of this partition
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * Name of this partition
     *
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * Address is the postal address of the partition
     *
     * @generated from field: string address = 3;
     */
    address: string;
    /**
     * Active indicates if this partition is usable
     *
     * @generated from field: bool active = 4;
     */
    active: boolean;
    /**
     * Description of this partition
     *
     * @generated from field: string description = 5;
     */
    description: string;
};
/**
 * Describes the message api.v1.Partition.
 * Use `create(PartitionSchema)` to create a new message.
 */
export declare const PartitionSchema: GenMessage<Partition>;
/**
 * MachineType defines a server type
 *
 * @generated from message api.v1.MachineType
 */
export type MachineType = Message<"api.v1.MachineType"> & {
    /**
     * Id is the technical id of this machine type
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * Name of this machine type
     *
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * CPUs e.g. cores in this machine / server
     *
     * @generated from field: uint32 cpus = 3;
     */
    cpus: number;
    /**
     * Memory in this machine / server
     *
     * @generated from field: uint64 memory = 4;
     */
    memory: bigint;
    /**
     * Storage in this machine / server
     *
     * @generated from field: uint64 storage = 5;
     */
    storage: bigint;
    /**
     * CpuDescription describes the CPUs of this machine / server
     *
     * @generated from field: string cpu_description = 6;
     */
    cpuDescription: string;
    /**
     * StorageDescription describes the disks of this machine / server
     *
     * @generated from field: string storage_description = 7;
     */
    storageDescription: string;
};
/**
 * Describes the message api.v1.MachineType.
 * Use `create(MachineTypeSchema)` to create a new message.
 */
export declare const MachineTypeSchema: GenMessage<MachineType>;
/**
 * Kubernetes related configurations available
 *
 * @generated from message api.v1.Kubernetes
 */
export type Kubernetes = Message<"api.v1.Kubernetes"> & {
    /**
     * Version of kubernetes
     *
     * @generated from field: string version = 1;
     */
    version: string;
    /**
     * Expiration sets the date on which the platform support for this kubernetes version expires
     *
     * @generated from field: google.protobuf.Timestamp expiration = 2;
     */
    expiration?: Timestamp;
};
/**
 * Describes the message api.v1.Kubernetes.
 * Use `create(KubernetesSchema)` to create a new message.
 */
export declare const KubernetesSchema: GenMessage<Kubernetes>;
/**
 * AssetDefaults apply if no specific properties are specified
 *
 * @generated from message api.v1.AssetDefaults
 */
export type AssetDefaults = Message<"api.v1.AssetDefaults"> & {
    /**
     * MachineType defines the default machine type used
     *
     * @generated from field: string machine_type = 1;
     */
    machineType: string;
    /**
     * KubernetesVersion defines the default kubernetes version to be used
     *
     * @generated from field: string kubernetes_version = 2;
     */
    kubernetesVersion: string;
    /**
     * WorkerMin defines how many servers are specified as minimum
     *
     * @generated from field: uint32 worker_min = 3;
     */
    workerMin: number;
    /**
     * WorkerMax defines how many servers are specified as maximum
     *
     * @generated from field: uint32 worker_max = 4;
     */
    workerMax: number;
    /**
     * Partition defines where the cluster is created if not otherwise specified
     *
     * @generated from field: string partition = 7;
     */
    partition: string;
};
/**
 * Describes the message api.v1.AssetDefaults.
 * Use `create(AssetDefaultsSchema)` to create a new message.
 */
export declare const AssetDefaultsSchema: GenMessage<AssetDefaults>;
/**
 * AssetServiceListRequest is the request payload to list all Assets
 *
 * @generated from message api.v1.AssetServiceListRequest
 */
export type AssetServiceListRequest = Message<"api.v1.AssetServiceListRequest"> & {};
/**
 * Describes the message api.v1.AssetServiceListRequest.
 * Use `create(AssetServiceListRequestSchema)` to create a new message.
 */
export declare const AssetServiceListRequestSchema: GenMessage<AssetServiceListRequest>;
/**
 * AssetServiceListResponse is the response payload which contains the the Asset list
 *
 * @generated from message api.v1.AssetServiceListResponse
 */
export type AssetServiceListResponse = Message<"api.v1.AssetServiceListResponse"> & {
    /**
     * Assets defines a list of assets
     *
     * @generated from field: repeated api.v1.Asset assets = 2;
     */
    assets: Asset[];
    /**
     * Environment contains information on the environment.
     *
     * @generated from field: api.v1.Environment environment = 3;
     */
    environment?: Environment;
};
/**
 * Describes the message api.v1.AssetServiceListResponse.
 * Use `create(AssetServiceListResponseSchema)` to create a new message.
 */
export declare const AssetServiceListResponseSchema: GenMessage<AssetServiceListResponse>;
/**
 * Environment defines information on the installation environment of the metalstack.cloud installation.
 *
 * @generated from message api.v1.Environment
 */
export type Environment = Message<"api.v1.Environment"> & {
    /**
     * ConsoleURL is the URL to the metalstack.cloud cloud console (aka frontend).
     *
     * @generated from field: optional string console_url = 1;
     */
    consoleUrl?: string;
    /**
     * AfterLoginURL is the URL to redirect clients to after successful login.
     *
     * @generated from field: optional string after_login_url = 2;
     */
    afterLoginUrl?: string;
    /**
     * StripePublicToken can be used by clients to use certain endpoints of the payment service api.
     *
     * @generated from field: optional string stripe_public_token = 3;
     */
    stripePublicToken?: string;
    /**
     * TermsAndConditionsURL is the URL to the terms and conditions.
     *
     * @generated from field: optional string terms_and_conditions_url = 4;
     */
    termsAndConditionsUrl?: string;
};
/**
 * Describes the message api.v1.Environment.
 * Use `create(EnvironmentSchema)` to create a new message.
 */
export declare const EnvironmentSchema: GenMessage<Environment>;
/**
 * AssetService serves asset related functions
 *
 * @generated from service api.v1.AssetService
 */
export declare const AssetService: GenService<{
    /**
     * List available assets
     *
     * @generated from rpc api.v1.AssetService.List
     */
    list: {
        methodKind: "unary";
        input: typeof AssetServiceListRequestSchema;
        output: typeof AssetServiceListResponseSchema;
    };
}>;
