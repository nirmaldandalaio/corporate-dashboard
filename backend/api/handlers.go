package api

import (
	"encoding/json"
	"net/http"
)

func GetKPIs(w http.ResponseWriter, r *http.Request) {
	kpis := []KPIResponse{
		{
			Name: "kpi1",
			Type: "kpi",
		},
		{
			Name: "kpi2",
			Type: "kpi",
		},
		{
			Name: "kpi3",
			Type: "kpi",
		},
		{
			Name: "kpi4",
			Type: "kpi",
		},
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(kpis)
}
