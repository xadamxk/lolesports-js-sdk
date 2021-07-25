# LolesportsApi.Stage

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of that stage of the tournament | 
**type** | **String** | The type of the stage. | 
**slug** | **String** |  | 
**sections** | [**[Section]**](Section.md) | Each object in the array represents a particular round in that specific stage in the tournament.  For the knockout stages, we could have the quarter finals, semi finals and the finals under their own sections.  For the group stage, there is usually only one section.  | 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `groups` (value: `"groups"`)
* `bracket` (value: `"bracket"`)

