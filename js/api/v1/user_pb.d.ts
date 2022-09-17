import * as jspb from 'google-protobuf'

import * as api_v1_common_pb from '../../api/v1/common_pb';


export class User extends jspb.Message {
  getLogin(): string;
  setLogin(value: string): User;

  getName(): string;
  setName(value: string): User;

  getEmail(): string;
  setEmail(value: string): User;

  getAvatarUrl(): string;
  setAvatarUrl(value: string): User;

  getOauthProvider(): api_v1_common_pb.OAuthProvider;
  setOauthProvider(value: api_v1_common_pb.OAuthProvider): User;

  getOrganizationsList(): Array<Organization>;
  setOrganizationsList(value: Array<Organization>): User;
  clearOrganizationsList(): User;
  addOrganizations(value?: Organization, index?: number): Organization;

  getAdmitted(): boolean;
  setAdmitted(value: boolean): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    login: string,
    name: string,
    email: string,
    avatarUrl: string,
    oauthProvider: api_v1_common_pb.OAuthProvider,
    organizationsList: Array<Organization.AsObject>,
    admitted: boolean,
  }
}

export class Organization extends jspb.Message {
  getId(): string;
  setId(value: string): Organization;

  getLogin(): string;
  setLogin(value: string): Organization;

  getName(): string;
  setName(value: string): Organization;

  getEmail(): string;
  setEmail(value: string): Organization;

  getBillingEmail(): string;
  setBillingEmail(value: string): Organization;

  getAvatarUrl(): string;
  setAvatarUrl(value: string): Organization;

  getRole(): api_v1_common_pb.Role;
  setRole(value: api_v1_common_pb.Role): Organization;

  getTeamsList(): Array<Team>;
  setTeamsList(value: Array<Team>): Organization;
  clearTeamsList(): Organization;
  addTeams(value?: Team, index?: number): Team;

  getAdmitted(): boolean;
  setAdmitted(value: boolean): Organization;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Organization.AsObject;
  static toObject(includeInstance: boolean, msg: Organization): Organization.AsObject;
  static serializeBinaryToWriter(message: Organization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Organization;
  static deserializeBinaryFromReader(message: Organization, reader: jspb.BinaryReader): Organization;
}

export namespace Organization {
  export type AsObject = {
    id: string,
    login: string,
    name: string,
    email: string,
    billingEmail: string,
    avatarUrl: string,
    role: api_v1_common_pb.Role,
    teamsList: Array<Team.AsObject>,
    admitted: boolean,
  }
}

export class Team extends jspb.Message {
  getId(): string;
  setId(value: string): Team;

  getName(): string;
  setName(value: string): Team;

  getAvatarUrl(): string;
  setAvatarUrl(value: string): Team;

  getRole(): api_v1_common_pb.Role;
  setRole(value: api_v1_common_pb.Role): Team;

  getProjectId(): string;
  setProjectId(value: string): Team;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Team.AsObject;
  static toObject(includeInstance: boolean, msg: Team): Team.AsObject;
  static serializeBinaryToWriter(message: Team, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Team;
  static deserializeBinaryFromReader(message: Team, reader: jspb.BinaryReader): Team;
}

export namespace Team {
  export type AsObject = {
    id: string,
    name: string,
    avatarUrl: string,
    role: api_v1_common_pb.Role,
    projectId: string,
  }
}

