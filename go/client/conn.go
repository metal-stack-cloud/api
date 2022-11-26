package client

import (
	"fmt"
	"log"
	"net/http"
	"net/http/httputil"

	"go.uber.org/zap"
)

// DialConfig is the configuration to create a api-server connection
type DialConfig struct {
	BaseURL string
	Token   string
	Log     *zap.SugaredLogger
	Debug   bool

	UserAgent string
}

func (d *DialConfig) HttpClient() *http.Client {
	return &http.Client{
		Transport: &AddHeaderTransport{
			debug: d.Debug,
			T:     http.DefaultTransport,
			Token: d.Token,
		},
	}
}

type AddHeaderTransport struct {
	debug bool

	Token string
	T     http.RoundTripper
}

func (a *AddHeaderTransport) RoundTrip(req *http.Request) (*http.Response, error) {
	req.Header.Add("Authorization", "Bearer "+a.Token)
	if a.debug {
		reqDump, err := httputil.DumpRequestOut(req, true)
		if err != nil {
			log.Fatal(err)
		}
		fmt.Printf("REQUEST:\n%s", string(reqDump))
	}

	resp, err := a.T.RoundTrip(req)

	if a.debug {
		respDump, err := httputil.DumpResponse(resp, true)
		if err != nil {
			log.Fatal(err)
		}
		fmt.Printf("RESPONSE:\n%s", string(respDump))
	}
	return resp, err
}
