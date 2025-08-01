#!/usr/bin/env python

import os
import sys

from connecpy.exceptions import ConnecpyServerException

from api.v1 import ip_pb2
from client import client as apiclient


timeout_s = 5
baseurl = os.environ['METAL_APISERVER_URL']
token = os.environ['API_TOKEN']
project = os.environ['PROJECT_ID']

client = apiclient.Client(baseurl=baseurl, token=token, timeout=timeout_s)

try:
    resp = client.apiv1().ip().List(request=ip_pb2.IPServiceListRequest(
        project=project))
except ConnecpyServerException as e:
    print(e.code, e.message, e.to_dict())
    sys.exit(1)


for ip in resp.ips:
    print(ip.ip, ip.name, ip.project, ip.network)
