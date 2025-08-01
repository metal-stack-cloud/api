# Code generated by generate.go. DO NOT EDIT.

import httpx

import metalstackcloud.admin.v1.cluster_connecpy as admin_cluster_connecpy
import metalstackcloud.admin.v1.payment_connecpy as admin_payment_connecpy
import metalstackcloud.admin.v1.project_connecpy as admin_project_connecpy
import metalstackcloud.admin.v1.storage_connecpy as admin_storage_connecpy
import metalstackcloud.admin.v1.tenant_connecpy as admin_tenant_connecpy
import metalstackcloud.admin.v1.token_connecpy as admin_token_connecpy

import metalstackcloud.api.v1.asset_connecpy as api_asset_connecpy
import metalstackcloud.api.v1.audit_connecpy as api_audit_connecpy
import metalstackcloud.api.v1.cluster_connecpy as api_cluster_connecpy
import metalstackcloud.api.v1.health_connecpy as api_health_connecpy
import metalstackcloud.api.v1.ip_connecpy as api_ip_connecpy
import metalstackcloud.api.v1.method_connecpy as api_method_connecpy
import metalstackcloud.api.v1.payment_connecpy as api_payment_connecpy
import metalstackcloud.api.v1.project_connecpy as api_project_connecpy
import metalstackcloud.api.v1.snapshot_connecpy as api_snapshot_connecpy
import metalstackcloud.api.v1.tenant_connecpy as api_tenant_connecpy
import metalstackcloud.api.v1.token_connecpy as api_token_connecpy
import metalstackcloud.api.v1.user_connecpy as api_user_connecpy
import metalstackcloud.api.v1.version_connecpy as api_version_connecpy
import metalstackcloud.api.v1.volume_connecpy as api_volume_connecpy

import metalstackcloud.status.v1.message_connecpy as status_message_connecpy
import metalstackcloud.status.v1.status_connecpy as status_status_connecpy



class Client:
    def __init__(self, baseurl: str, token: str, timeout: int = 10):
        self._baseurl = baseurl

        headers = {}
        if token:
            headers["Authorization"] = "Bearer " + token

        self._session = httpx.Client(headers=headers, timeout=timeout)


    def adminv1(self):
        return self._Adminv1(baseurl=self._baseurl, session=self._session)

    def apiv1(self):
        return self._Apiv1(baseurl=self._baseurl, session=self._session)

    def statusv1(self):
        return self._Statusv1(baseurl=self._baseurl, session=self._session)



    class _Adminv1:
        def __init__(self, baseurl: str, session=None):
            self._baseurl = baseurl
            self._session = session


        def cluster(self):
            return admin_cluster_connecpy.ClusterServiceClient(address=self._baseurl, session=self._session)

        def payment(self):
            return admin_payment_connecpy.PaymentServiceClient(address=self._baseurl, session=self._session)

        def project(self):
            return admin_project_connecpy.ProjectServiceClient(address=self._baseurl, session=self._session)

        def storage(self):
            return admin_storage_connecpy.StorageServiceClient(address=self._baseurl, session=self._session)

        def tenant(self):
            return admin_tenant_connecpy.TenantServiceClient(address=self._baseurl, session=self._session)

        def token(self):
            return admin_token_connecpy.TokenServiceClient(address=self._baseurl, session=self._session)


    class _Apiv1:
        def __init__(self, baseurl: str, session=None):
            self._baseurl = baseurl
            self._session = session


        def asset(self):
            return api_asset_connecpy.AssetServiceClient(address=self._baseurl, session=self._session)

        def audit(self):
            return api_audit_connecpy.AuditServiceClient(address=self._baseurl, session=self._session)

        def cluster(self):
            return api_cluster_connecpy.ClusterServiceClient(address=self._baseurl, session=self._session)

        def health(self):
            return api_health_connecpy.HealthServiceClient(address=self._baseurl, session=self._session)

        def ip(self):
            return api_ip_connecpy.IPServiceClient(address=self._baseurl, session=self._session)

        def method(self):
            return api_method_connecpy.MethodServiceClient(address=self._baseurl, session=self._session)

        def payment(self):
            return api_payment_connecpy.PaymentServiceClient(address=self._baseurl, session=self._session)

        def project(self):
            return api_project_connecpy.ProjectServiceClient(address=self._baseurl, session=self._session)

        def snapshot(self):
            return api_snapshot_connecpy.SnapshotServiceClient(address=self._baseurl, session=self._session)

        def tenant(self):
            return api_tenant_connecpy.TenantServiceClient(address=self._baseurl, session=self._session)

        def token(self):
            return api_token_connecpy.TokenServiceClient(address=self._baseurl, session=self._session)

        def user(self):
            return api_user_connecpy.UserServiceClient(address=self._baseurl, session=self._session)

        def version(self):
            return api_version_connecpy.VersionServiceClient(address=self._baseurl, session=self._session)

        def volume(self):
            return api_volume_connecpy.VolumeServiceClient(address=self._baseurl, session=self._session)


    class _Statusv1:
        def __init__(self, baseurl: str, session=None):
            self._baseurl = baseurl
            self._session = session


        def message(self):
            return status_message_connecpy.MessageServiceClient(address=self._baseurl, session=self._session)

        def status(self):
            return status_status_connecpy.StatusServiceClient(address=self._baseurl, session=self._session)

