package main

import (
	"fmt"
	"net/http"

	"github.com/nirmaldandalaio/corporate-dashboard/api"
)

func setupRoutes() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Simple Serverrrrr!")
	})

	http.HandleFunc("/api/kpis", api.GetKPIs)
}

func main() {
	setupRoutes()
	http.ListenAndServe(":8080", nil)
}
