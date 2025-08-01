# Code generated generate_clients.go. DO NOT EDIT.

from contextlib import contextmanager
from connecpy.context import ClientContext

{{ range $name, $api := . -}}
{{ range $svc := $api.Services -}}
import {{ $name | trimSuffix "v1" }}.v1.{{ $svc | trimSuffix "Service" | lower }}_connecpy as {{ $name | trimSuffix "v1" }}_{{ $svc | trimSuffix "Service" | lower }}_connecpy
{{ end }}
{{ end }}

class Driver:
    def __init__(self, baseurl: str, token: str, timeout: int = 10):
        self.baseurl = baseurl
        self.token = token
        self.timeout = timeout
{{ range $name, $api := . }}
    def {{ $name | trimSuffix "v1" | lower }}(self):
        return {{ $name | trimSuffix "v1" | title }}Driver(baseurl=self.baseurl, token=self.token, timeout=self.timeout)
{{ end }}

{{ range $name, $api := . -}}

class {{ $name | trimSuffix "v1" | title }}Driver:
    def __init__(self, baseurl: str, token: str, timeout: int = 10):
        self.baseurl = baseurl
        self.token = token
        self.timeout = timeout

{{ range $svc := $api.Services }}
    @contextmanager
    def {{ $svc | trimSuffix "Service" | lower }}(self):
        with {{ $name | trimSuffix "v1" }}_{{ $svc | trimSuffix "Service" | lower }}_connecpy.{{ $svc }}Client(self.baseurl, timeout=self.timeout) as client:
           yield ClientWrapper(client, self.token)
{{ end }}
{{ end }}

class ClientWrapper:
    def __init__(self, client, token):
        self._client = client
        self._token = token

    def __getattr__(self, name):
        attr = getattr(self._client, name)
        if callable(attr):
            def wrapper(*args, **kwargs):
                kwargs.setdefault("ctx", ClientContext())
                headers = kwargs.get("headers", {})
                headers.setdefault("Authorization", "Bearer " + self._token)
                kwargs["headers"] = headers
                return attr(*args, **kwargs)
            return wrapper
        return attr
