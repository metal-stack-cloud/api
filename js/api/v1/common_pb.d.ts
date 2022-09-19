import * as jspb from 'google-protobuf'

import * as google_protobuf_descriptor_pb from 'google-protobuf/google/protobuf/descriptor_pb';


export enum OAuthProvider { 
  O_AUTH_PROVIDER_UNSPECIFIED = 0,
  O_AUTH_PROVIDER_GITHUB = 1,
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
