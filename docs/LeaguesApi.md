# LolesportsApi.LeaguesApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLeagues**](LeaguesApi.md#getLeagues) | **GET** /getLeagues | 
[**getStandings**](LeaguesApi.md#getStandings) | **GET** /getStandings | 
[**getTournamentsForLeague**](LeaguesApi.md#getTournamentsForLeague) | **GET** /getTournamentsForLeague | 

<a name="getLeagues"></a>
# **getLeagues**
> InlineResponse200 getLeagues(hl)



### Example
```javascript
import {LolesportsApi} from 'lolesports_api';
let defaultClient = LolesportsApi.ApiClient.instance;

// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LolesportsApi.LeaguesApi();
let hl = new LolesportsApi.Locale(); // Locale | 

apiInstance.getLeagues(hl, (error, data, response) => {
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

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getStandings"></a>
# **getStandings**
> InlineResponse2004 getStandings(hl, opts)



### Example
```javascript
import {LolesportsApi} from 'lolesports_api';
let defaultClient = LolesportsApi.ApiClient.instance;

// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LolesportsApi.LeaguesApi();
let hl = new LolesportsApi.Locale(); // Locale | 
let opts = { 
  'tournamentId': [3.4] // [Number] | The id(s) of the tournament(s) you want details ofs 
};
apiInstance.getStandings(hl, opts, (error, data, response) => {
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

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTournamentsForLeague"></a>
# **getTournamentsForLeague**
> InlineResponse2003 getTournamentsForLeague(hl, opts)



### Example
```javascript
import {LolesportsApi} from 'lolesports_api';
let defaultClient = LolesportsApi.ApiClient.instance;

// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LolesportsApi.LeaguesApi();
let hl = new LolesportsApi.Locale(); // Locale | 
let opts = { 
  'leagueId': 789 // Number | The id of the league you want details of 
};
apiInstance.getTournamentsForLeague(hl, opts, (error, data, response) => {
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
 **leagueId** | **Number**| The id of the league you want details of  | [optional] 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

