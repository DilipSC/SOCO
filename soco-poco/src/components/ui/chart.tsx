// components/ui/chart.tsx
import type React from "react"

interface ChartData {
  name: string
  value: number
}

interface LineChartProps {
  data: ChartData[]
}

export const LineChart: React.FC<LineChartProps> = ({ data }) => {
  // Basic implementation - replace with actual charting library integration
  return (
    <div>
      <h3>Line Chart</h3>
      <ul>
        {data.map((item) => (
          <li key={item.name}>
            {item.name}: {item.value}
          </li>
        ))}
      </ul>
    </div>
  )
}

interface BarChartProps {
  data: ChartData[]
}

export const BarChart: React.FC<BarChartProps> = ({ data }) => {
  // Basic implementation - replace with actual charting library integration
  return (
    <div>
      <h3>Bar Chart</h3>
      <ul>
        {data.map((item) => (
          <li key={item.name}>
            {item.name}: {item.value}
          </li>
        ))}
      </ul>
    </div>
  )
}

