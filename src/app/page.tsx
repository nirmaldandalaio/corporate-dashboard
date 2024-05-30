"use client"

import { BarChart } from "lucide-react";
import Kpi from "@/components/kpis/Kpi";
import BarChartApexComponent from "@/components/charts/BarChartApexComponent";
import RadialChartApexComponent from "@/components/charts/RadialChartApexComponent";
import LineChartApexComponent from "@/components/charts/LineChartApexComponent";
import ApexGridComponent from "@/components/grids/ApexGridComponent";

export default function Home() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Kpi />
        <Kpi />
        <Kpi />
        <Kpi />
      </div>
      <div className="grid mt-4 gap-4 sm:w-full lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <BarChartApexComponent />
        </div>
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <LineChartApexComponent />
        </div>
      </div>
      <div className="rounded-xl border bg-card text-card-foreground shadow mt-4 w-[100%] 2xl:h-[600px] lg:h-[400px] gap-4 flex" >
        <ApexGridComponent />
      </div>
    </>
  );
}
