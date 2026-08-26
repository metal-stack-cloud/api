#!/usr/bin/env python

import os
import sys

from connecpy.exceptions import ConnecpyServerException

from metalstackcloud.client import Client
from metalstackcloud.api.v1 import project_pb2


timeout_s = 5
baseurl = os.environ['METAL_APISERVER_URL']
token = os.environ['API_TOKEN']

client = Client(baseurl=baseurl, token=token, timeout=timeout_s)

try:
    resp = client.apiv1().project().List(
        request=project_pb2.ProjectServiceListRequest())
except ConnecpyServerException as e:
    print(e.code, e.message, e.to_dict())
    sys.exit(1)


for project in resp.projects:
    print(project)
