package main

import (
	"context"
	"log/slog"
	"os"

	"connectrpc.com/connect"
	apiv1 "github.com/metal-stack-cloud/api/go/api/v1"
	"github.com/metal-stack-cloud/api/go/client"
)

func main() {

	token := os.Getenv("API_TOKEN")
	project := os.Getenv("PROJECT_ID")

	c := client.New(client.DialConfig{
		BaseURL: "https://api.metalstack.cloud",
		Token:   token,
	})

	ctx := context.Background()
	resp, err := c.Apiv1().Cluster().List(ctx, connect.NewRequest(&apiv1.ClusterServiceListRequest{
		Project: project,
	}))

	if err != nil {
		panic(err)
	}

	for _, cluster := range resp.Msg.Clusters {
		slog.Info("cluster", "name", cluster.Name, "id", cluster.Uuid, "kubernetes", cluster.Kubernetes.Version)
	}
}
