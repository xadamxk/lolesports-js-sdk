# LolesportsApi.TeamsApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTeams**](TeamsApi.md#getTeams) | **GET** /getTeams | 

<a name="getTeams"></a>
# **getTeams**
> InlineResponse2007 getTeams(hl, opts)



### Example
```javascript
import {LolesportsApi} from 'lolesports_api';
let defaultClient = LolesportsApi.ApiClient.instance;

// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LolesportsApi.TeamsApi();
let hl = new LolesportsApi.Locale(); // Locale | 
let opts = { 
  'id': ["id_example"] // [String] | The team slug(s).  You can input more than one slug. 
};
apiInstance.getTeams(hl, opts, (error, data, response) => {
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
 **id** | [**[String]**](String.md)| The team slug(s).  You can input more than one slug.  | [optional] 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

