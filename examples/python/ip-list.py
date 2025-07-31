#!/usr/bin/env python

from connecpy.context import ClientContext
from connecpy.exceptions import ConnecpyServerException
import os

from api.v1 import ip_pb2, ip_connecpy
from client import client as apiclient


timeout_s = 5
baseurl = os.environ['METAL_APISERVER_URL']
token = os.environ['API_TOKEN']
project = os.environ['PROJECT_ID']

def main():
    # Usage Sample without driver
    print("ips with direct client")
    with ip_connecpy.IPServiceClient(baseurl, timeout=timeout_s) as client:
        try:
            response = client.List(
                ctx=ClientContext(),
                request=ip_pb2.IPServiceListRequest(project=project),
                headers={
                    "Authorization": "Bearer " + token,
                }
            )
            for ip in response.ips:
                print(ip.ip, ip.name, ip.project, ip.network)
        except ConnecpyServerException as e:
            print(e.code, e.message, e.to_dict())


    # Usage Sample with driver
    driver = apiclient.Driver(baseurl=baseurl, token=token, timeout=timeout_s)
    
    print()
    print("ips with driver")
    with driver.api().ip() as client:
        try:
            response = client.List(
                request=ip_pb2.IPServiceListRequest(project=project),
            )
            for ip in response.ips:
                print(ip.ip, ip.name, ip.project, ip.network)
        except ConnecpyServerException as e:
            print(e.code, e.message, e.to_dict())

if __name__ == "__main__":
    main()
