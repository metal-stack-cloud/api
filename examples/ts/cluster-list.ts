import { Interceptor, createPromiseClient } from "@connectrpc/connect";
import { ClusterService } from '@metal-stack-cloud/api/api/v1/cluster_connect'
import { createConnectTransport } from "@connectrpc/connect-node";
import dotenv from 'dotenv'; 
dotenv.config();

const tokenInterceptor: Interceptor = (next) => (req) => {
  req.header.append('Authorization', 'Bearer ' + process.env.API_TOKEN);
  return next(req);
}

const transport = createConnectTransport({
    interceptors: [tokenInterceptor],
    baseUrl: "https://api.metalstack.cloud",
    httpVersion: "1.1"
});


async function main() {
  const client = createPromiseClient(ClusterService, transport);
  const res = await client.list({ project: process.env.PROJECT_ID });

  for (let cluster of res.clusters) {
      console.log(cluster.name + " " + cluster.uuid);
  }
}
void main();