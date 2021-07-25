# LolesportsApi.EventsApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCompletedEvents**](EventsApi.md#getCompletedEvents) | **GET** /getCompletedEvents | 
[**getEventDetails**](EventsApi.md#getEventDetails) | **GET** /getEventDetails | 
[**getGames**](EventsApi.md#getGames) | **GET** /getGames | 
[**getLive**](EventsApi.md#getLive) | **GET** /getLive | 
[**getSchedule**](EventsApi.md#getSchedule) | **GET** /getSchedule | 

<a name="getCompletedEvents"></a>
# **getCompletedEvents**
> InlineResponse2005 getCompletedEvents(hl, opts)



### Example
```javascript
import {LolesportsApi} from 'lolesports_api';
let defaultClient = LolesportsApi.ApiClient.instance;

// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LolesportsApi.EventsApi();
let hl = new LolesportsApi.Locale(); // Locale | 
let opts = { 
  'tournamentId': [3.4] // [Number] | The id(s) of the tournament(s) you want details ofs 
};
apiInstance.getCompletedEvents(hl, opts, (error, data, response) => {
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
 **hl** | [**Locale**](.md)|  | 
 **tournamentId** | [**[Number]**](Number.md)| The id(s) of the tournament(s) you want details ofs  | [optional] 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEventDetails"></a>
# **getEventDetails**
> InlineResponse2006 getEventDetails(hl, id)



### Example
```javascript
import {LolesportsApi} from 'lolesports_api';
let defaultClient = LolesportsApi.ApiClient.instance;

// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LolesportsApi.EventsApi();
let hl = new LolesportsApi.Locale(); // Locale | 
let id = 789; // Number | The id of the match that you want 

apiInstance.getEventDetails(hl, id, (error, data, response) => {
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
 **hl** | [**Locale**](.md)|  | 
 **id** | **Number**| The id of the match that you want  | 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getGames"></a>
# **getGames**
> InlineResponse2008 getGames(hl, opts)



### Example
```javascript
import {LolesportsApi} from 'lolesports_api';
let defaultClient = LolesportsApi.ApiClient.instance;

// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LolesportsApi.EventsApi();
let hl = new LolesportsApi.Locale(); // Locale | 
let opts = { 
  'id': [3.4] // [Number] | The game Id(s).  You can input more than one game Id(s). 
};
apiInstance.getGames(hl, opts, (error, data, response) => {
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
 **hl** | [**Locale**](.md)|  | 
 **id** | [**[Number]**](Number.md)| The game Id(s).  You can input more than one game Id(s).  | [optional] 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLive"></a>
# **getLive**
> InlineResponse2002 getLive(hl)



### Example
```javascript
import {LolesportsApi} from 'lolesports_api';
let defaultClient = LolesportsApi.ApiClient.instance;

// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LolesportsApi.EventsApi();
let hl = new LolesportsApi.Locale(); // Locale | 

apiInstance.getLive(hl, (error, data, response) => {
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
 **hl** | [**Locale**](.md)|  | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSchedule"></a>
# **getSchedule**
> InlineResponse2001 getSchedule(hl, opts)



### Example
```javascript
import {LolesportsApi} from 'lolesports_api';
let defaultClient = LolesportsApi.ApiClient.instance;

// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LolesportsApi.EventsApi();
let hl = new LolesportsApi.Locale(); // Locale | 
let opts = { 
  'leagueId': [3.4], // [Number] | The id(s) of the league(s) you want details of 
  'pageToken': "QmFzZTY0IGV4YW1wbGU=" // Blob | Base 64 encoded string used to determine the next \"page\" of data to pull 
};
apiInstance.getSchedule(hl, opts, (error, data, response) => {
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
 **hl** | [**Locale**](.md)|  | 
 **leagueId** | [**[Number]**](Number.md)| The id(s) of the league(s) you want details of  | [optional] 
 **pageToken** | **Blob**| Base 64 encoded string used to determine the next \&quot;page\&quot; of data to pull  | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

