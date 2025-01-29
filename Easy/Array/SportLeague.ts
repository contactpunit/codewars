// League details
// The possible results in the league are "draw" and "win" with 3 points for a win and 1 point each for a draw.

// The league table is stored in order from top to bottom in a 2-D array called leagueTable (Javascript) / $league_table (Ruby) / league_table (Python) with each element containing the team name, and the number of points that team has. For example:

// [["teamC", 6], ["teamA", 4], ["teamB", 4], ["teamD", 3]]

// Function specification
// Write a function which takes three parameters: first team's name, second team's name,
//  and the result of the match (in Python version the league_table will be passed as 
//     an additional argument). The function must add the correct points to teams 1 and 2 
//     based on the result of the match, and reorder the array based on new the league positions.
//     League positions should be based first on the number of points then if points are equal, 
//     alphabetically. The function must also return the updated league table.

const leagueTable: any = [["teamA", 3], ["teamB", 3], ["teamC", 3], ["teamD", 3]]

export function leagueCalculate(team1, team2, result) {
    const firstTeam: any = leagueTable.find(e => e[0] === team1)
    firstTeam[1] += result === 'draw' ? 1 : 3
    if (result === 'draw') {
        const secondTeam: any = leagueTable.find(e => e[0] === team2)
        secondTeam[1] += 1
    }
    return leagueTable.sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0].localeCompare(b[0])
        } else {
            return b[1] - a[1]
        }
    })
}