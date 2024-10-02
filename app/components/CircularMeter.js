"use client";
import { useEffect, useState } from 'react';
import styles from './CircularMeter.module.css';

const CircularMeter = ({ min, max, data, numLabels }) => {
    // Calculate the proportion of the meter based on the current data
    const proportion = ((data - min) / (max - min));
    console.log(min + " " + max + " " + data)

    // Convert the percentage to the stroke-dashoffset for the SVG circle
    const circumference = 2 * Math.PI * 45; // 45 is the radius of the circle

    // Arc is 240 degrees (2/3 of the full circle)
    const arcPercentage = 1 - proportion; // Calculate part of the circle to show (240 degrees max)
    const offset = circumference * (arcPercentage) * (2 / 3); // Adjust for the 240 degrees arc

    // Generate labels
    const totalLabels = numLabels + 2; // Including min and max
    const labels = [];

    for (let i = 0; i < totalLabels; i++) {
        const labelProportion = i / (totalLabels - 1); // totalLabels - 1 intervals
        const value = min + labelProportion * (max - min);
        const angle = -120 + 240 * labelProportion; // from -120 to +120 degrees
        labels.push({ value, angle });
    }

    return (
        <div className={styles.meterContainer}>
            <svg className={styles.meter} viewBox="0 0 100 100">
                <circle
                    className={styles.meterBackground}
                    cx="50"
                    cy="50"
                    r="45"
                ></circle>
                <circle
                    className={styles.meterForeground}
                    cx="50"
                    cy="50"
                    r="45"
                    style={{
                        strokeDasharray: `${circumference * (2 / 3)}`, // Display only the 240 degrees arc
                        strokeDashoffset: offset,
                        transform: "rotate(240deg)", // Rotate to make it start at 8 o'clock
                        transformOrigin: "50% 50%", // Rotate around the center
                    }}
                ></circle>
                <g className={styles.labels}>
                    {labels.map((label, index) => {
                        const angleRad = (label.angle) * Math.PI / 180;
                        const x1 = 50 + 42 * Math.cos(angleRad); // inner radius for ticks
                        const y1 = 50 + 42 * Math.sin(angleRad);
                        const x2 = 50 + 45 * Math.cos(angleRad); // outer radius for ticks
                        const y2 = 50 + 45 * Math.sin(angleRad);
                        const xText = 50 + 55 * Math.cos(angleRad); // text position
                        const yText = 50 + 55 * Math.sin(angleRad);

                        return (
                            <g key={index}>
                                {/* Line (tick mark) */}
                                <line
                                    x1={x1}
                                    y1={y1}
                                    x2={x2}
                                    y2={y2}
                                    stroke="black"
                                    strokeWidth="0.5"
                                />
                                {/* Text label */}
                                <text
                                    x={xText}
                                    y={yText}
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    fontSize="3"
                                >
                                    {Math.round(label.value)}
                                </text>
                            </g>
                        );
                    })}
                </g>
            </svg>
            <div className={styles.dataDisplay}>
                <div className={styles.dataValue}>{data}</div>
            </div>
        </div>
    );
};

export default CircularMeter;
