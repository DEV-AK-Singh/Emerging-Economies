import * as React from 'react';
import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from '@mui/x-charts/Gauge';
import { useState } from 'react';

function GaugePointer() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    // No value to display
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };
  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill="red" />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke="red"
        strokeWidth={3}
      />
    </g>
  );
}

export default function GaugeChart() {
  const [val,setVal] = useState(50);
  return (
    <>
      <GaugeContainer
        width={200}
        height={200}
        startAngle={-110}
        endAngle={110}
        value={val}
      >
        <GaugeReferenceArc />
        <GaugeValueArc />
        <GaugePointer />
      </GaugeContainer>
      <input type="range" min={0} max={100} step={1} value={val} onChange={(e)=>{setVal(e.target.value)}} />
    </>
  );
}
