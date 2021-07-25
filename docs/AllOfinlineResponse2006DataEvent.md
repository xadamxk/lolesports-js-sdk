# LolesportsApi.AllOfinlineResponse2006DataEvent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**type** | [**EventType**](EventType.md) |  | 
**league** | [**SimpleLeague**](SimpleLeague.md) |  | 
**match** | **Object** |  | 
**streams** | [**[ExtendedVod]**](ExtendedVod.md) | For a live match this will contain information about various streams, the platforms they are on and the locale.  Otherwise it will be null.  | 
