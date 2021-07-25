# LolesportsApi.AllOfinlineResponse20015PlayersItems

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**starterOnTeams** | **[Number]** | The IDs of the team(s) this player is/has been on the starting lineup  | 
**subOnTeams** | **[Number]** | The IDs of the team(s) this player is/has been on as a sub player  | 
**teams** | **[Number]** | A combination of the teamIDs in &#x60;starterOnTeams&#x60; and &#x60;subOnTeams&#x60;  | 
**photoInformation** | **Object** |  | 
**scheduleItems** | **[String]** | Contains the ids to schedule items representing the player&#x27;s/team&#x27;s next matches.  This is regardless of the tournament ID passed in the url.  | 
**playerStatsSummary** | **String** |  | [optional] 
**playerStatsHistory** | **[String]** | Contains the &#x60;playerStatsHistory&#x60; IDs, which are just the game ID of the match and the player ID separated by a colon.  Contains the last 4 played matches in the specified tournament. The first ID is of the most recently played match.  | [optional] 
