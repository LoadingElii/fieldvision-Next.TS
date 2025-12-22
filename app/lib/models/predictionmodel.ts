export type Prediction = {
    id: number,
    game_id: string,
    home_team: string,
    away_team: string
    home_win_probability: number,
    away_win_probability: number,
}