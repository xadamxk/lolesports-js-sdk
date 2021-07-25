# LolesportsApi.HighlanderMatch

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The match ID | 
**name** | **String** |  | 
**position** | **Number** |  | 
**state** | **String** | Whether it is ongoing or completed.  | 
**groupPosition** | **Number** |  | 
**matchType** | [**MatchType**](MatchType.md) |  | [optional] 
**gameMode** | [**GameMode**](GameMode.md) |  | [optional] 
**input** | **[AllOfhighlanderMatchInputItems]** |  | 
**games** | [**{String: HighlanderGame}**](HighlanderGame.md) | The keys to this object are [UUID version 4](https://en.wikipedia.org/wiki/Universally_unique_identifier) representing the game ID.  These are the games played in that series.  The number of properties(key and value pair) in this object will be equal to the type of series that was played. For a best of 1 there will be only 1 game, 3 for best of 3s and 5 for best of 5s.  | 
**standings** | [**Standings**](Standings.md) |  | [optional] 
**tiebreaker** | **Boolean** |  | 
**remadeGames** | [**[HighlanderGame]**](HighlanderGame.md) |  | 
**roles** | [**Roles**](Roles.md) |  | 
**scoring** | [**Scoring**](Scoring.md) |  | [optional] 
**scores** | [**Scores**](Scores.md) |  | 

<a name="StateEnum"></a>
## Enum: StateEnum

* `resolved` (value: `"resolved"`)
* `unresolved` (value: `"unresolved"`)
* `unlinked` (value: `"unlinked"`)

