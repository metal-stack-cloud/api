import * as jspb from 'google-protobuf'

import * as api_v1_health_pb from '../../api/v1/health_pb';


export class StatusServiceGetRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusServiceGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StatusServiceGetRequest): StatusServiceGetRequest.AsObject;
  static serializeBinaryToWriter(message: StatusServiceGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusServiceGetRequest;
  static deserializeBinaryFromReader(message: StatusServiceGetRequest, reader: jspb.BinaryReader): StatusServiceGetRequest;
}

export namespace StatusServiceGetRequest {
  export type AsObject = {
  }
}

export class StatusServiceGetResponse extends jspb.Message {
  getHealth(): api_v1_health_pb.Health | undefined;
  setHealth(value?: api_v1_health_pb.Health): StatusServiceGetResponse;
  hasHealth(): boolean;
  clearHealth(): StatusServiceGetResponse;

  getConnectionBroken(): boolean;
  setConnectionBroken(value: boolean): StatusServiceGetResponse;

  getApiVersion(): string;
  setApiVersion(value: string): StatusServiceGetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusServiceGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StatusServiceGetResponse): StatusServiceGetResponse.AsObject;
  static serializeBinaryToWriter(message: StatusServiceGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusServiceGetResponse;
  static deserializeBinaryFromReader(message: StatusServiceGetResponse, reader: jspb.BinaryReader): StatusServiceGetResponse;
}

export namespace StatusServiceGetResponse {
  export type AsObject = {
    health?: api_v1_health_pb.Health.AsObject,
    connectionBroken: boolean,
    apiVersion: string,
  }
}

