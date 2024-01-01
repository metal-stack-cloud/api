# Usage examples

You must first get a API Token and the Project ID to access the metalstack.cloud api then export this as environment variables.

TODO: howto figure out the project id ?

```bash
export API_TOKEN=yourapitoken
export PROJECT_ID=yourprojectuuid
```

Then you can execute them as follwoing:

```bash
Golang:
go run go/cluster-list.go

Typescript:
npx tsx ts/cluster-list.ts

Ansible:
ansible-playbook ansible/cluster-list.yaml

Curl:
sh curl/cluster-list.sh
```
