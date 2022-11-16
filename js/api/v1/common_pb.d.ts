import * as jspb from 'google-protobuf'

import * as google_protobuf_descriptor_pb from 'google-protobuf/google/protobuf/descriptor_pb';


export class Paging extends jspb.Message {
  getPage(): number;
  setPage(value: number): Paging;
  hasPage(): boolean;
  clearPage(): Paging;

  getCount(): number;
  setCount(value: number): Paging;
  hasCount(): boolean;
  clearCount(): Paging;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Paging.AsObject;
  static toObject(includeInstance: boolean, msg: Paging): Paging.AsObject;
  static serializeBinaryToWriter(message: Paging, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Paging;
  static deserializeBinaryFromReader(message: Paging, reader: jspb.BinaryReader): Paging;
}

export namespace Paging {
  export type AsObject = {
    page?: number,
    count?: number,
  }

  export enum PageCase { 
    _PAGE_NOT_SET = 0,
    PAGE = 1,
  }

  export enum CountCase { 
    _COUNT_NOT_SET = 0,
    COUNT = 2,
  }
}

export enum OAuthProvider { 
  O_AUTH_PROVIDER_UNSPECIFIED = 0,
  O_AUTH_PROVIDER_GITHUB = 1,
  O_AUTH_PROVIDER_AZURE = 2,
}
export enum Role { 
  ROLE_UNSPECIFIED = 0,
  ROLE_MEMBER = 1,
  ROLE_MAINTAINER = 2,
  ROLE_ADMIN = 3,
  ROLE_OWNER = 4,
}
export enum TenantRole { 
  TENANT_ROLE_UNSPECIFIED = 0,
  TENANT_ROLE_OWNER = 1,
  TENANT_ROLE_EDITOR = 2,
  TENANT_ROLE_VIEWER = 3,
}
export enum ProjectRole { 
  PROJECT_ROLE_UNSPECIFIED = 0,
  PROJECT_ROLE_OWNER = 1,
  PROJECT_ROLE_EDITOR = 2,
  PROJECT_ROLE_VIEWER = 3,
}
export enum AdminRole { 
  ADMIN_ROLE_UNSPECIFIED = 0,
  ADMIN_ROLE_EDITOR = 1,
  ADMIN_ROLE_VIEWER = 2,
}
export enum Visibility { 
  VISIBILITY_UNSPECIFIED = 0,
  VISIBILITY_PUBLIC = 1,
  VISIBILITY_PRIVATE = 2,
}
