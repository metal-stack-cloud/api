# -*- coding: utf-8 -*-
# Generated by https://github.com/i2y/connecpy/protoc-gen-connecpy.  DO NOT EDIT!
# source: api/v1/health.proto

from typing import Optional, Protocol, Union

import httpx

from connecpy.async_client import AsyncConnecpyClient
from connecpy.base import Endpoint
from connecpy.server import ConnecpyServer
from connecpy.client import ConnecpyClient
from connecpy.context import ClientContext, ServiceContext
import metalstackcloud.api.v1.health_pb2 as api_dot_v1_dot_health__pb2


class HealthService(Protocol):
    async def Get(self, req: api_dot_v1_dot_health__pb2.HealthServiceGetRequest, ctx: ServiceContext) -> api_dot_v1_dot_health__pb2.HealthServiceGetResponse: ...


class HealthServiceServer(ConnecpyServer):
    def __init__(self, *, service: HealthService, server_path_prefix=""):
        super().__init__()
        self._prefix = f"{server_path_prefix}/api.v1.HealthService"
        self._endpoints = {
            "Get": Endpoint[api_dot_v1_dot_health__pb2.HealthServiceGetRequest, api_dot_v1_dot_health__pb2.HealthServiceGetResponse](
                service_name="HealthService",
                name="Get",
                function=getattr(service, "Get"),
                input=api_dot_v1_dot_health__pb2.HealthServiceGetRequest,
                output=api_dot_v1_dot_health__pb2.HealthServiceGetResponse,
                allowed_methods=("POST",),
            ),
        }

    def serviceName(self):
        return "api.v1.HealthService"


class HealthServiceSync(Protocol):
    def Get(self, req: api_dot_v1_dot_health__pb2.HealthServiceGetRequest, ctx: ServiceContext) -> api_dot_v1_dot_health__pb2.HealthServiceGetResponse: ...


class HealthServiceServerSync(ConnecpyServer):
    def __init__(self, *, service: HealthServiceSync, server_path_prefix=""):
        super().__init__()
        self._prefix = f"{server_path_prefix}/api.v1.HealthService"
        self._endpoints = {
            "Get": Endpoint[api_dot_v1_dot_health__pb2.HealthServiceGetRequest, api_dot_v1_dot_health__pb2.HealthServiceGetResponse](
                service_name="HealthService",
                name="Get",
                function=getattr(service, "Get"),
                input=api_dot_v1_dot_health__pb2.HealthServiceGetRequest,
                output=api_dot_v1_dot_health__pb2.HealthServiceGetResponse,
                allowed_methods=("POST",),
            ),
        }

    def serviceName(self):
        return "api.v1.HealthService"


class HealthServiceClient(ConnecpyClient):
    def Get(
        self,
        request: api_dot_v1_dot_health__pb2.HealthServiceGetRequest,
        *,
        ctx: Optional[ClientContext] = None,
        server_path_prefix: str = "",
        **kwargs,
    ) -> api_dot_v1_dot_health__pb2.HealthServiceGetResponse:
        method = "POST"
        return self._make_request(
            url=f"{server_path_prefix}/api.v1.HealthService/Get",
            ctx=ctx,
            request=request,
            response_class=api_dot_v1_dot_health__pb2.HealthServiceGetResponse,
            method=method,
            **kwargs,
        )


class AsyncHealthServiceClient(AsyncConnecpyClient):
    async def Get(
        self,
        request: api_dot_v1_dot_health__pb2.HealthServiceGetRequest,
        *,
        ctx: Optional[ClientContext] = None,
        server_path_prefix: str = "",
        session: Union[httpx.AsyncClient, None] = None,
        **kwargs,
    ) -> api_dot_v1_dot_health__pb2.HealthServiceGetResponse:
        method = "POST"
        return await self._make_request(
            url=f"{server_path_prefix}/api.v1.HealthService/Get",
            ctx=ctx,
            request=request,
            response_class=api_dot_v1_dot_health__pb2.HealthServiceGetResponse,
            method=method,
            session=session,
            **kwargs,
        )
