import { useEffect, useState } from "react";
import { circuitMap } from "../helpers/circuitMapper";

type Props = {
    circuitShortName: string;
};

export function CircuitViewer({ circuitShortName }: Props) {
    const [circuit, setCircuit] = useState<any>(null);

    useEffect(() => {
        async function loadCircuit() {
            // 1️⃣ Load ALL circuits (once)
            const response = await fetch(
                "/data/f1-circuits.geojson"
            );
            const geojson = await response.json();

            // 2️⃣ Translate OpenF1 name → GeoJSON id
            const circuitId = circuitMap[circuitShortName];

            if (!circuitId) {
                console.error("Circuit not mapped:", circuitShortName);
                return;
            }

            // 3️⃣ Find the correct circuit
            const found = geojson.features.find(
                (feature: any) => feature.properties.id === circuitId
            );

            setCircuit(found);
        }

        loadCircuit();
    }, [circuitShortName]);

    if (!circuit) return <p>Loading circuit...</p>;

    function extractCoordinates(geometry: any): number[][] {
        if (geometry.type === "LineString") {
            return geometry.coordinates;
        }

        if (geometry.type === "MultiLineString") {
            return geometry.coordinates.flat();
        }

        return [];
    }

    const coords = extractCoordinates(circuit.geometry);
    if (coords.length === 0) {
        console.error("No coordinates found for circuit:", circuitShortName);
        return null;
    }

    return (
        <svg
            width={400}
            height={400}
            viewBox="-200 -200 400 400"
        >
            <polyline
                fill="none"
                stroke="red"
                strokeWidth={2}
                points={coords
                    .map(([lng, lat]: number[]) => {
                        const x = (lng - coords[0][0]) * 8000;
                        const y = (lat - coords[0][1]) * -8000;
                        return `${x},${y}`;
                    })
                    .join(" ")}
            />
        </svg>
    );
}
