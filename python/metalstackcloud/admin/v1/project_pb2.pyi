from api.v1 import common_pb2 as _common_pb2
from api.v1 import project_pb2 as _project_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ProjectServiceListRequest(_message.Message):
    __slots__ = ("paging", "tenant_id", "annotations")
    class AnnotationsEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    PAGING_FIELD_NUMBER: _ClassVar[int]
    TENANT_ID_FIELD_NUMBER: _ClassVar[int]
    ANNOTATIONS_FIELD_NUMBER: _ClassVar[int]
    paging: _common_pb2.Paging
    tenant_id: str
    annotations: _containers.ScalarMap[str, str]
    def __init__(self, paging: _Optional[_Union[_common_pb2.Paging, _Mapping]] = ..., tenant_id: _Optional[str] = ..., annotations: _Optional[_Mapping[str, str]] = ...) -> None: ...

class ProjectServiceListResponse(_message.Message):
    __slots__ = ("projects", "next_page")
    PROJECTS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_FIELD_NUMBER: _ClassVar[int]
    projects: _containers.RepeatedCompositeFieldContainer[_project_pb2.Project]
    next_page: int
    def __init__(self, projects: _Optional[_Iterable[_Union[_project_pb2.Project, _Mapping]]] = ..., next_page: _Optional[int] = ...) -> None: ...
