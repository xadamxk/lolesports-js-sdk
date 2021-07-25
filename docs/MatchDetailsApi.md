# LolesportsApi.MatchDetailsApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDetails**](MatchDetailsApi.md#getDetails) | **GET** /details/{gameId} | 
[**getWindow**](MatchDetailsApi.md#getWindow) | **GET** /window/{gameId} | 

<a name="getDetails"></a>
# **getDetails**
> InlineResponse2009 getDetails(gameId, opts)



### Example
```javascript
import {LolesportsApi} from 'lolesports_api';

let apiInstance = new LolesportsApi.MatchDetailsApi();
let gameId = 789; // Number | The game id of the match 
let opts = { 
  'startingTime': new Date("2013-10-20T19:20:30+01:00"), // Date | The date-time (RFC3339) 
  'participantIds': "participantIds_example" // String | A list of the participant Ids separated by underscores and not commas 
};
apiInstance.getDetails(gameId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameId** | **Number**| The game id of the match  | 
 **startingTime** | **Date**| The date-time (RFC3339)  | [optional] 
 **participantIds** | **String**| A list of the participant Ids separated by underscores and not commas  | [optional] 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWindow"></a>
# **getWindow**
> Window getWindow(gameId, opts)



### Example
```javascript
import {LolesportsApi} from 'lolesports_api';

let apiInstance = new LolesportsApi.MatchDetailsApi();
let gameId = 789; // Number | The game id of the match 
let opts = { 
  'startingTime': new Date("2013-10-20T19:20:30+01:00") // Date | The date-time (RFC3339) 
};
apiInstance.getWindow(gameId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameId** | **Number**| The game id of the match  | 
 **startingTime** | **Date**| The date-time (RFC3339)  | [optional] 

### Return type

[**Window**](Window.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

