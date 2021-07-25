# LolesportsApi.HighlanderTeam

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The team ID. | 
**slug** | **String** | URL friendly version of the team name. | 
**name** | **String** | The team name. | 
**guid** | **String** | The team&#x27;s [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier). | 
**teamPhotoUrl** | **String** |  | 
**logoUrl** | **String** | URL to an image of the team&#x27;s logo. | 
**acronym** | **String** | The acronym form of the team name | 
**homeLeague** | **String** | Describes the league this team participates in during the regular seasons.  | 
**altLogoUrl** | **String** | Alternative URL to the team&#x27;s logo. | 
**createdAt** | **Date** | The date and time when this entry was created. | 
**updatedAt** | **Date** | The date and time when this entry was last updated. | 
**bios** | **{String: String}** | Contains a description of the team translated to various languages.  The keys are presented in the format ([ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) and [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2))  &#x60;{languageCode}_{countryCode}&#x60;  The value is a string containing html tags representing the description in that specific locale.  | 
**foreignIds** | [**ForeignIds**](ForeignIds.md) |  | 
**players** | **[Number]** | An array containing the player IDs for those belonging in that team. | 
**starters** | **[Number]** | An array of the player IDs of those in the main roster | 
**subs** | **[Number]** | An array of the player IDs of the subs. | 
