# LolesportsApi.HighlanderGame

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | [**GameId**](GameId.md) |  | 
**name** | **String** |  | 
**generatedName** | **String** |  | 
**state** | **String** |  | [optional] 
**gameMode** | [**GameMode**](GameMode.md) |  | [optional] 
**input** | **[AllOfhighlanderGameInputItems]** |  | 
**standings** | [**Standings**](Standings.md) |  | [optional] 
**scores** | [**Scores**](Scores.md) |  | 
**gameId** | **String** | The numeric version of the game ID  This is what is used to access the ACS endpoint.  | [optional] 
**gameRealm** | **String** | The ID of the tournament realm on which the game was played on  | [optional] 
**platformId** | **String** | A combination of the gameRealm and the gameId | [optional] 
**revision** | **Number** |  | 
**roles** | [**Roles**](Roles.md) |  | 

<a name="StateEnum"></a>
## Enum: StateEnum

* `remade` (value: `"remade"`)

