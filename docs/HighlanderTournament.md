# LolesportsApi.HighlanderTournament

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The tournament Id  It is a [UUID version 4](https://en.wikipedia.org/wiki/Universally_unique_identifier)  | 
**title** | **String** | URL friendly version of the tournament name | 
**description** | **String** | The tournament&#x27;s name | 
**leagueReference** | **String** | The integer in the string represents the league ID. | 
**roles** | [**Roles**](Roles.md) |  | 
**bracketType** | [**BracketType**](BracketType.md) |  | [optional] 
**matchType** | [**MatchType**](MatchType.md) |  | [optional] 
**rosteringStrategy** | [**RosteringStrategy**](RosteringStrategy.md) |  | [optional] 
**seedingStrategy** | [**RosteringStrategy**](RosteringStrategy.md) |  | [optional] 
**queues** | **Object** |  | 
**rosters** | [**{String: HighlanderTournamentRosters}**](HighlanderTournamentRosters.md) | The keys to this object are [UUID version 4](https://en.wikipedia.org/wiki/Universally_unique_identifier) representing the roster ID.  Their values are objects but they don&#x27;t contain anything useful about the roster.  | 
**published** | **Boolean** | If the value is true then the league/tournament has concluded, otherwise it is ongoing.  | 
**breakpoints** | [**Breakpoints**](Breakpoints.md) |  | [optional] 
**brackets** | [**Brackets**](Brackets.md) |  | 
**standings** | [**Standings**](Standings.md) |  | [optional] 
**liveMatches** | **[String]** | The array contains [UUID version 4](https://en.wikipedia.org/wiki/Universally_unique_identifier) Match IDs  Despite the name of this property it is unreliable as for some tournaments this array will contain match IDs yet the matches are over.  | 
**startDate** | **Date** | The day the tournament starts/started. | 
**endDate** | **Date** | The day the tournament ends/ended. | 
**platformIds** | **[String]** | Contains all the platform IDs in for this tournaments.  A platform ID is combination of the gameRealm and the gameId. The regex below describes the format.  &#x60;^[A-Z]+\\d+:\\d+$&#x60;  | 
**gameIds** | **[String]** | &#x27;Contains all the gameIds in this tournament.  **Note:** The gameIds are in the format [UUID version 4](https://en.wikipedia.org/wiki/Universally_unique_identifier)&#x27;  | 
**leagueId** | **String** | The league ID | 
**league** | **String** | The league ID | 
