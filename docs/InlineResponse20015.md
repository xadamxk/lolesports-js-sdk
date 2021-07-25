# LolesportsApi.InlineResponse20015

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**players** | **[AllOfinlineResponse20015PlayersItems]** | Contains information about the player in question.  If &#x60;playerStatsSummary&#x60; and &#x60;playerStatsHistory&#x60; are missing then the player did not take part in the tournament specificed by the tournament ID in the url.  | 
**highlanderTournaments** | [**[HighlanderTournament]**](HighlanderTournament.md) | Contains the various tournaments the player has participated in.  | 
**scheduleItems** | [**[MatchScheduleItem]**](MatchScheduleItem.md) | Contains details about the next 4 matches the player&#x27;s team is schedule to participate in.  | 
**teams** | [**[HighlanderTeam]**](HighlanderTeam.md) |  | 
**playerStatsSummaries** | [**[InlineResponse20015PlayerStatsSummaries]**](InlineResponse20015PlayerStatsSummaries.md) | The stats displayed here are for the player during the tournament specified in the url  | [optional] 
**playerStatsHistories** | [**[InlineResponse20015PlayerStatsHistories]**](InlineResponse20015PlayerStatsHistories.md) | Displays stats from the recently played matches in that particular tournaments. The array starts with the most recently played match.  | [optional] 
