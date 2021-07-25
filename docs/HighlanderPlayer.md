# LolesportsApi.HighlanderPlayer

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The player ID | 
**slug** | **String** | URL friendly version of the player&#x27;s in game name | 
**name** | **String** | The player&#x27;s in game name | 
**firstName** | **String** |  | 
**lastName** | **String** |  | [optional] 
**roleSlug** | **String** | The role they usually play | 
**photoUrl** | **String** | URL to the player&#x27;s photo | 
**hometown** | **String** |  | 
**region** | **String** |  | 
**birthdate** | **Date** |  | 
**createdAt** | **Date** | The date and time when this entry was created. | 
**updatedAt** | **Date** | The date and time when this entry was last updated. | 
**bios** | **{String: String}** | Contains a description of the player translated to various languages.  The keys are presented in the format ([ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) and [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2))  &#x60;{languageCode}_{countryCode}&#x60;  The value is a string containing html tags representing the description in that specific locale.  | 
**foreignIds** | **AllOfhighlanderPlayerForeignIds** |  | 
**socialNetworks** | **{String: String}** | Contains links to the player&#x27;s social media accounts.  The key is the name of the social media platform and the value is the URL  | 
**champions** | [**[HighlanderPlayerChampions]**](HighlanderPlayerChampions.md) |  | 
