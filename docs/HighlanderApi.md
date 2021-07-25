# LolesportsApi.HighlanderApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**highlanderTournaments**](HighlanderApi.md#highlanderTournaments) | **GET** /highlanderTournaments | 
[**leagues**](HighlanderApi.md#leagues) | **GET** /leagues | 
[**navItems**](HighlanderApi.md#navItems) | **GET** /navItems | 
[**players**](HighlanderApi.md#players) | **GET** /players | 
[**scheduleItems**](HighlanderApi.md#scheduleItems) | **GET** /scheduleItems | 
[**teams**](HighlanderApi.md#teams) | **GET** /teams | 
[**videos**](HighlanderApi.md#videos) | **GET** /videos | 

<a name="highlanderTournaments"></a>
# **highlanderTournaments**
> HighlanderTournaments highlanderTournaments(league)



If a league does not have highlanderTournament objects, the API will return 404 

### Example
```javascript
import {LolesportsApi} from 'lolesports_api';

let apiInstance = new LolesportsApi.HighlanderApi();
let league = "league_example"; // String | The id of the league you want details of

apiInstance.highlanderTournaments(league, (error, data, response) => {
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
 **league** | **String**| The id of the league you want details of | 

### Return type

[**HighlanderTournaments**](HighlanderTournaments.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="leagues"></a>
# **leagues**
> InlineResponse20012 leagues(query)



### Example
```javascript
import {LolesportsApi} from 'lolesports_api';

let apiInstance = new LolesportsApi.HighlanderApi();
let query = new LolesportsApi.Query(); // Query | 'This endpoint requires either the id or the slug to be passed. If both are present then only the first one will be considered.  _Due to a limitation in the OpenApi specification it is not possible to show the mutual exclusive nature that the query parameters in this endpoint require. The schema below is as close as a representation I could get in expressing the nature of the query parameters._  Check the examples below to help better understand the query parameters needed.  **Example 1**  `https://api.lolesports.com/api/v1/leagues?id=3`  This will return the details for **LEC**.  **Example 2**  `https://api.lolesports.com/api/v1/leagues?slug=worlds`  This will return the details for **Worlds**  **Example 3**  `https://api.lolesports.com/api/v1/leagues?id=3&slug=worlds`  In such a scenario where both query parameters are used only the first will be considered, hence it will only return the details for **LEC**.  **Example 4**  `https://api.lolesports.com/api/v1/leagues`  This is not valid. At least one of the two query parameters (id or slug) is required.' 

apiInstance.leagues(query, (error, data, response) => {
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
 **query** | [**Query**](.md)| &#x27;This endpoint requires either the id or the slug to be passed. If both are present then only the first one will be considered.  _Due to a limitation in the OpenApi specification it is not possible to show the mutual exclusive nature that the query parameters in this endpoint require. The schema below is as close as a representation I could get in expressing the nature of the query parameters._  Check the examples below to help better understand the query parameters needed.  **Example 1**  &#x60;https://api.lolesports.com/api/v1/leagues?id&#x3D;3&#x60;  This will return the details for **LEC**.  **Example 2**  &#x60;https://api.lolesports.com/api/v1/leagues?slug&#x3D;worlds&#x60;  This will return the details for **Worlds**  **Example 3**  &#x60;https://api.lolesports.com/api/v1/leagues?id&#x3D;3&amp;slug&#x3D;worlds&#x60;  In such a scenario where both query parameters are used only the first will be considered, hence it will only return the details for **LEC**.  **Example 4**  &#x60;https://api.lolesports.com/api/v1/leagues&#x60;  This is not valid. At least one of the two query parameters (id or slug) is required.&#x27;  | 

### Return type

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="navItems"></a>
# **navItems**
> InlineResponse20010 navItems()



### Example
```javascript
import {LolesportsApi} from 'lolesports_api';

let apiInstance = new LolesportsApi.HighlanderApi();
apiInstance.navItems((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="players"></a>
# **players**
> InlineResponse20015 players(slug, tournament)



If the &#x60;playerStatsSummaries&#x60; and &#x60;playerStatsHistories&#x60; keys are not present, then the player did not take part in that particular tournament. 

### Example
```javascript
import {LolesportsApi} from 'lolesports_api';

let apiInstance = new LolesportsApi.HighlanderApi();
let slug = "slug_example"; // String | The player slug.
let tournament = "tournament_example"; // String | The tournament ID.

apiInstance.players(slug, tournament, (error, data, response) => {
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
 **slug** | **String**| The player slug. | 
 **tournament** | **String**| The tournament ID. | 

### Return type

[**InlineResponse20015**](InlineResponse20015.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="scheduleItems"></a>
# **scheduleItems**
> InlineResponse20013 scheduleItems(leagueId)



### Example
```javascript
import {LolesportsApi} from 'lolesports_api';

let apiInstance = new LolesportsApi.HighlanderApi();
let leagueId = 56; // Number | The id of the league you want details of

apiInstance.scheduleItems(leagueId, (error, data, response) => {
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
 **leagueId** | **Number**| The id of the league you want details of | 

### Return type

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="teams"></a>
# **teams**
> InlineResponse20014 teams(slug, tournament)



If the &#x60;teamStatsSummaries&#x60;, &#x60;teamRosterStats&#x60; and &#x60;teamStatsHistories&#x60; keys are not present, then the team did not take part in that particular tournament. 

### Example
```javascript
import {LolesportsApi} from 'lolesports_api';

let apiInstance = new LolesportsApi.HighlanderApi();
let slug = "slug_example"; // String | The team slug.
let tournament = "tournament_example"; // String | The tournament ID.

apiInstance.teams(slug, tournament, (error, data, response) => {
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
 **slug** | **String**| The team slug. | 
 **tournament** | **String**| The tournament ID. | 

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="videos"></a>
# **videos**
> InlineResponse20011 videos()



This endpoint returns details about esports vods on YouTube.  The data returned by this endpoint is fairly large (more than 5MB) since it includes vods from 2015 up to (at the time of writing this) June 2019 and it will continue growing.  Do consider this when dealing with clients (like mobile phones) where bandwidth and memory may be scarce.  It is highly advised that you cache the data from this endpoint. 

### Example
```javascript
import {LolesportsApi} from 'lolesports_api';

let apiInstance = new LolesportsApi.HighlanderApi();
apiInstance.videos((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

