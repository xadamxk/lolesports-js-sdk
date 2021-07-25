# LolesportsApi.HighlanderLeague

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The league&#x27;s ID | 
**guid** | **String** | The [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) for the league.  | 
**region** | **String** |  | 
**drupalId** | **Number** |  | 
**logoUrl** | **String** |  | 
**createdAt** | **Date** | The date and time when this entry was created. | 
**updatedAt** | **Date** | The date and time when this entry was last updated. | 
**abouts** | **{String: String}** | Contains a description of the league translated in various languages.  The keys are presented in the format ([ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) and [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2))  &#x60;{languageCode}_{countryCode}&#x60;  The value is a string containing html tags representing the description in that specific locale.  | 
**names** | **{String: String}** | Contains the names of the league translated in various languages.  The keys are presented in the format ([ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) and [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2))  &#x60;{languageCode}_{countryCode}&#x60;  The value is a string containing the name of the league in that specific locale.  | 
**tournaments** | **[String]** | An array containing the [UUIDs](https://en.wikipedia.org/wiki/Universally_unique_identifier) for the tournaments in this league.  | [optional] 
