# LolesportsApi.Standings

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**HighlanderResult**](HighlanderResult.md) |  | 
**timestamp** | **Number** | Unix timestamp in milliseconds of when the match started. | 
**source** | **String** | How the record was created/updated. | [optional] 
**note** | **String** |  | [optional] 
**history** | [**[Standings]**](Standings.md) |  | [optional] 
**closed** | **Boolean** | If the value is true then the league/tournament has concluded, otherwise it is ongoing.  | 

<a name="SourceEnum"></a>
## Enum: SourceEnum

* `manual` (value: `"manual"`)
* `bestOf` (value: `"bestOf"`)

