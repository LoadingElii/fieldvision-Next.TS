import { error } from "console";
import { Game } from "../models/gamemodel";

export async function getGames() {
    const res = await fetch("http://localhost:8080/api/v1/games/all")

    if(res.ok) {
        let data = await res.json();
        console.log(JSON.stringify(data))
        let games: Game[] = data;
        return games;
    }
}