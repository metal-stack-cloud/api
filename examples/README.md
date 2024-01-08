# Usage examples

You must first get a API Token and the Project ID to access the metalstack.cloud api then export this as environment variables.

You can get the Project ID from the [console](https://console.metalstack.cloud) as described [here](https://metalstack.cloud/en/documentation/DeveloperGuide/go-api-client).

```bash
export API_TOKEN=yourapitoken
export PROJECT_ID=yourprojectuuid
```

Then you can execute them as follwoing:

```bash
Golang:
go run go/cluster-list.go

Typescript:
cd ts && npm install
npx tsx cluster-list.ts

Ansible:
ansible-playbook ansible/cluster-list.yaml

Curl:
sh curl/cluster-list.sh
```
