import { Prediction } from "../models/predictionmodel";

export async function getPredictions() {
    const res = await fetch("http://localhost:8080/api/v1/predictions/all")

    if(res.ok) {
        let data = await res.json();
        let predictions: Prediction[] = data;
        return predictions;
    }
}