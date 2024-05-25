"use client"

import BarChartJSComponent from "@/components/charts/BarChartJSComponent";
import BarChartComponent from "../components/charts/BarChartComponent";
import { BarChart } from "lucide-react";
import Kpi from "@/components/kpis/Kpi";

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Home() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Kpi />
        <Kpi />
        <Kpi />
        <Kpi />
      </div>
      <div className="mt-4">
        <div className="rounded-xl border bg-card text-card-foreground shadow w-[70%] h-[300px]">
          <BarChartComponent />
        </div>
      </div>
    </>
  );
}
