import { Prediction } from "../models/predictionmodel";

export function FindPrediction(game_id: String, predictions: Prediction[]) {
    const prediction = predictions.find(prediction => (prediction.game_id === game_id))
    console.log("from out of function" + JSON.stringify(prediction))

    return prediction;
}