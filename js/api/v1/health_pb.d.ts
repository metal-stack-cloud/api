import * as jspb from 'google-protobuf'

import * as api_v1_common_pb from '../../api/v1/common_pb';


export class Health extends jspb.Message {
  getServicesList(): Array<HealthStatus>;
  setServicesList(value: Array<HealthStatus>): Health;
  clearServicesList(): Health;
  addServices(value?: HealthStatus, index?: number): HealthStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Health.AsObject;
  static toObject(includeInstance: boolean, msg: Health): Health.AsObject;
  static serializeBinaryToWriter(message: Health, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Health;
  static deserializeBinaryFromReader(message: Health, reader: jspb.BinaryReader): Health;
}

export namespace Health {
  export type AsObject = {
    servicesList: Array<HealthStatus.AsObject>,
  }
}

export class HealthStatus extends jspb.Message {
  getName(): Service;
  setName(value: Service): HealthStatus;

  getStatus(): ServiceStatus;
  setStatus(value: ServiceStatus): HealthStatus;

  getMessage(): string;
  setMessage(value: string): HealthStatus;

  getPartitionsMap(): jspb.Map<string, PartitionHealth>;
  clearPartitionsMap(): HealthStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HealthStatus.AsObject;
  static toObject(includeInstance: boolean, msg: HealthStatus): HealthStatus.AsObject;
  static serializeBinaryToWriter(message: HealthStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HealthStatus;
  static deserializeBinaryFromReader(message: HealthStatus, reader: jspb.BinaryReader): HealthStatus;
}

export namespace HealthStatus {
  export type AsObject = {
    name: Service,
    status: ServiceStatus,
    message: string,
    partitionsMap: Array<[string, PartitionHealth.AsObject]>,
  }
}

export class PartitionHealth extends jspb.Message {
  getStatus(): ServiceStatus;
  setStatus(value: ServiceStatus): PartitionHealth;

  getMessage(): string;
  setMessage(value: string): PartitionHealth;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartitionHealth.AsObject;
  static toObject(includeInstance: boolean, msg: PartitionHealth): PartitionHealth.AsObject;
  static serializeBinaryToWriter(message: PartitionHealth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartitionHealth;
  static deserializeBinaryFromReader(message: PartitionHealth, reader: jspb.BinaryReader): PartitionHealth;
}

export namespace PartitionHealth {
  export type AsObject = {
    status: ServiceStatus,
    message: string,
  }
}

export class HealthServiceGetRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HealthServiceGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HealthServiceGetRequest): HealthServiceGetRequest.AsObject;
  static serializeBinaryToWriter(message: HealthServiceGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HealthServiceGetRequest;
  static deserializeBinaryFromReader(message: HealthServiceGetRequest, reader: jspb.BinaryReader): HealthServiceGetRequest;
}

export namespace HealthServiceGetRequest {
  export type AsObject = {
  }
}

export class HealthServiceGetResponse extends jspb.Message {
  getHealth(): Health | undefined;
  setHealth(value?: Health): HealthServiceGetResponse;
  hasHealth(): boolean;
  clearHealth(): HealthServiceGetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HealthServiceGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HealthServiceGetResponse): HealthServiceGetResponse.AsObject;
  static serializeBinaryToWriter(message: HealthServiceGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HealthServiceGetResponse;
  static deserializeBinaryFromReader(message: HealthServiceGetResponse, reader: jspb.BinaryReader): HealthServiceGetResponse;
}

export namespace HealthServiceGetResponse {
  export type AsObject = {
    health?: Health.AsObject,
  }
}

export enum ServiceStatus { 
  SERVICE_STATUS_UNSPECIFIED = 0,
  SERVICE_STATUS_DEGRADED = 1,
  SERVICE_STATUS_UNHEALTHY = 2,
  SERVICE_STATUS_HEALTHY = 3,
}
export enum Service { 
  SERVICE_UNSPECIFIED = 0,
  SERVICE_CLUSTER = 1,
  SERVICE_VOLUME = 2,
  SERVICE_MACHINES = 3,
}
