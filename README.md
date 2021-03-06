# lolesports-js-sdk

LolesportsApi - JavaScript client for lolesports_api
Unofficial documentation to the lolesports Api
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0-alpha-1
- Package version: 1.0.0-alpha-1
- Build package: io.swagger.codegen.v3.generators.javascript.JavaScriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install lolesports_api --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var LolesportsApi = require('lolesports-js-sdk');

var defaultClient = LolesportsApi.ApiClient.instance;
defaultClient.basePath = "https://esports-api.lolesports.com/persisted/gw";
defaultClient.authentications['apiKeyAuth']['apiKey'] = "0TvQnueqKa5mxJntVWt0w4LpLfEkrV1Ta8rQBb9Z";

var callback = function (error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
};

var api = new LolesportsApi.LeaguesApi();
api.getStandings(LolesportsApi.Locale.enUS, { tournamentId: ["105658534671026792"] }, callback);

```

## Documentation for API Endpoints

All URIs are relative to */*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*LolesportsApi.EventsApi* | [**getCompletedEvents**](docs/EventsApi.md#getCompletedEvents) | **GET** /getCompletedEvents | 
*LolesportsApi.EventsApi* | [**getEventDetails**](docs/EventsApi.md#getEventDetails) | **GET** /getEventDetails | 
*LolesportsApi.EventsApi* | [**getGames**](docs/EventsApi.md#getGames) | **GET** /getGames | 
*LolesportsApi.EventsApi* | [**getLive**](docs/EventsApi.md#getLive) | **GET** /getLive | 
*LolesportsApi.EventsApi* | [**getSchedule**](docs/EventsApi.md#getSchedule) | **GET** /getSchedule | 
*LolesportsApi.HighlanderApi* | [**highlanderTournaments**](docs/HighlanderApi.md#highlanderTournaments) | **GET** /highlanderTournaments | 
*LolesportsApi.HighlanderApi* | [**leagues**](docs/HighlanderApi.md#leagues) | **GET** /leagues | 
*LolesportsApi.HighlanderApi* | [**navItems**](docs/HighlanderApi.md#navItems) | **GET** /navItems | 
*LolesportsApi.HighlanderApi* | [**players**](docs/HighlanderApi.md#players) | **GET** /players | 
*LolesportsApi.HighlanderApi* | [**scheduleItems**](docs/HighlanderApi.md#scheduleItems) | **GET** /scheduleItems | 
*LolesportsApi.HighlanderApi* | [**teams**](docs/HighlanderApi.md#teams) | **GET** /teams | 
*LolesportsApi.HighlanderApi* | [**videos**](docs/HighlanderApi.md#videos) | **GET** /videos | 
*LolesportsApi.LeaguesApi* | [**getLeagues**](docs/LeaguesApi.md#getLeagues) | **GET** /getLeagues | 
*LolesportsApi.LeaguesApi* | [**getStandings**](docs/LeaguesApi.md#getStandings) | **GET** /getStandings | 
*LolesportsApi.LeaguesApi* | [**getTournamentsForLeague**](docs/LeaguesApi.md#getTournamentsForLeague) | **GET** /getTournamentsForLeague | 
*LolesportsApi.MatchDetailsApi* | [**getDetails**](docs/MatchDetailsApi.md#getDetails) | **GET** /details/{gameId} | 
*LolesportsApi.MatchDetailsApi* | [**getWindow**](docs/MatchDetailsApi.md#getWindow) | **GET** /window/{gameId} | 
*LolesportsApi.TeamsApi* | [**getTeams**](docs/TeamsApi.md#getTeams) | **GET** /getTeams | 

## Documentation for Models

 - [LolesportsApi.Abilities](docs/Abilities.md)
 - [LolesportsApi.AllOfhighlanderGameInputItems](docs/AllOfhighlanderGameInputItems.md)
 - [LolesportsApi.AllOfhighlanderMatchInputItems](docs/AllOfhighlanderMatchInputItems.md)
 - [LolesportsApi.AllOfhighlanderPlayerForeignIds](docs/AllOfhighlanderPlayerForeignIds.md)
 - [LolesportsApi.AllOfinlineResponse20014PlayersItems](docs/AllOfinlineResponse20014PlayersItems.md)
 - [LolesportsApi.AllOfinlineResponse20015PlayersItems](docs/AllOfinlineResponse20015PlayersItems.md)
 - [LolesportsApi.AllOfinlineResponse2001DataScheduleEventsItems](docs/AllOfinlineResponse2001DataScheduleEventsItems.md)
 - [LolesportsApi.AllOfinlineResponse2002DataScheduleEventsItems](docs/AllOfinlineResponse2002DataScheduleEventsItems.md)
 - [LolesportsApi.AllOfinlineResponse2005DataScheduleEventsItems](docs/AllOfinlineResponse2005DataScheduleEventsItems.md)
 - [LolesportsApi.AllOfinlineResponse2006DataEvent](docs/AllOfinlineResponse2006DataEvent.md)
 - [LolesportsApi.AllOfinlineResponse200DataLeaguesItems](docs/AllOfinlineResponse200DataLeaguesItems.md)
 - [LolesportsApi.AllOfnavItemParentNavItem](docs/AllOfnavItemParentNavItem.md)
 - [LolesportsApi.AllOfrankingTeamsItems](docs/AllOfrankingTeamsItems.md)
 - [LolesportsApi.AllOfsectionMatchesItems](docs/AllOfsectionMatchesItems.md)
 - [LolesportsApi.AllOfsimpleEventMatch](docs/AllOfsimpleEventMatch.md)
 - [LolesportsApi.BaseEvent](docs/BaseEvent.md)
 - [LolesportsApi.BaseFrame](docs/BaseFrame.md)
 - [LolesportsApi.BaseLeague](docs/BaseLeague.md)
 - [LolesportsApi.BaseMatch](docs/BaseMatch.md)
 - [LolesportsApi.BaseParticipantStats](docs/BaseParticipantStats.md)
 - [LolesportsApi.BaseScheduleItem](docs/BaseScheduleItem.md)
 - [LolesportsApi.BaseStrategy](docs/BaseStrategy.md)
 - [LolesportsApi.BracketType](docs/BracketType.md)
 - [LolesportsApi.BracketTypeOptions](docs/BracketTypeOptions.md)
 - [LolesportsApi.Brackets](docs/Brackets.md)
 - [LolesportsApi.Breakpoints](docs/Breakpoints.md)
 - [LolesportsApi.CustomTeam](docs/CustomTeam.md)
 - [LolesportsApi.DetailsFrame](docs/DetailsFrame.md)
 - [LolesportsApi.EventScheduleItem](docs/EventScheduleItem.md)
 - [LolesportsApi.EventType](docs/EventType.md)
 - [LolesportsApi.ExtendedEvent](docs/ExtendedEvent.md)
 - [LolesportsApi.ExtendedGame](docs/ExtendedGame.md)
 - [LolesportsApi.ExtendedLeague](docs/ExtendedLeague.md)
 - [LolesportsApi.ExtendedParticipantStats](docs/ExtendedParticipantStats.md)
 - [LolesportsApi.ExtendedTeam](docs/ExtendedTeam.md)
 - [LolesportsApi.ExtendedVod](docs/ExtendedVod.md)
 - [LolesportsApi.ForeignIds](docs/ForeignIds.md)
 - [LolesportsApi.Game](docs/Game.md)
 - [LolesportsApi.GameId](docs/GameId.md)
 - [LolesportsApi.GameMetadata](docs/GameMetadata.md)
 - [LolesportsApi.GameMode](docs/GameMode.md)
 - [LolesportsApi.HighlanderGame](docs/HighlanderGame.md)
 - [LolesportsApi.HighlanderLeague](docs/HighlanderLeague.md)
 - [LolesportsApi.HighlanderMatch](docs/HighlanderMatch.md)
 - [LolesportsApi.HighlanderPlayer](docs/HighlanderPlayer.md)
 - [LolesportsApi.HighlanderPlayerChampions](docs/HighlanderPlayerChampions.md)
 - [LolesportsApi.HighlanderPlayers](docs/HighlanderPlayers.md)
 - [LolesportsApi.HighlanderRecord](docs/HighlanderRecord.md)
 - [LolesportsApi.HighlanderRecords](docs/HighlanderRecords.md)
 - [LolesportsApi.HighlanderResult](docs/HighlanderResult.md)
 - [LolesportsApi.HighlanderTeam](docs/HighlanderTeam.md)
 - [LolesportsApi.HighlanderTeams](docs/HighlanderTeams.md)
 - [LolesportsApi.HighlanderTournament](docs/HighlanderTournament.md)
 - [LolesportsApi.HighlanderTournamentRosters](docs/HighlanderTournamentRosters.md)
 - [LolesportsApi.HighlanderTournaments](docs/HighlanderTournaments.md)
 - [LolesportsApi.HomeLeague](docs/HomeLeague.md)
 - [LolesportsApi.InlineResponse200](docs/InlineResponse200.md)
 - [LolesportsApi.InlineResponse2001](docs/InlineResponse2001.md)
 - [LolesportsApi.InlineResponse20010](docs/InlineResponse20010.md)
 - [LolesportsApi.InlineResponse20011](docs/InlineResponse20011.md)
 - [LolesportsApi.InlineResponse20012](docs/InlineResponse20012.md)
 - [LolesportsApi.InlineResponse20013](docs/InlineResponse20013.md)
 - [LolesportsApi.InlineResponse20014](docs/InlineResponse20014.md)
 - [LolesportsApi.InlineResponse20014AverageDamageByPosition](docs/InlineResponse20014AverageDamageByPosition.md)
 - [LolesportsApi.InlineResponse20014TeamRosterStats](docs/InlineResponse20014TeamRosterStats.md)
 - [LolesportsApi.InlineResponse20014TeamStatsHistories](docs/InlineResponse20014TeamStatsHistories.md)
 - [LolesportsApi.InlineResponse20014TeamStatsSummaries](docs/InlineResponse20014TeamStatsSummaries.md)
 - [LolesportsApi.InlineResponse20015](docs/InlineResponse20015.md)
 - [LolesportsApi.InlineResponse20015Mostplayedchampions](docs/InlineResponse20015Mostplayedchampions.md)
 - [LolesportsApi.InlineResponse20015PlayerStatsHistories](docs/InlineResponse20015PlayerStatsHistories.md)
 - [LolesportsApi.InlineResponse20015PlayerStatsSummaries](docs/InlineResponse20015PlayerStatsSummaries.md)
 - [LolesportsApi.InlineResponse2001Data](docs/InlineResponse2001Data.md)
 - [LolesportsApi.InlineResponse2001DataSchedule](docs/InlineResponse2001DataSchedule.md)
 - [LolesportsApi.InlineResponse2001DataSchedulePages](docs/InlineResponse2001DataSchedulePages.md)
 - [LolesportsApi.InlineResponse2002](docs/InlineResponse2002.md)
 - [LolesportsApi.InlineResponse2002Data](docs/InlineResponse2002Data.md)
 - [LolesportsApi.InlineResponse2002DataSchedule](docs/InlineResponse2002DataSchedule.md)
 - [LolesportsApi.InlineResponse2003](docs/InlineResponse2003.md)
 - [LolesportsApi.InlineResponse2003Data](docs/InlineResponse2003Data.md)
 - [LolesportsApi.InlineResponse2003DataLeagues](docs/InlineResponse2003DataLeagues.md)
 - [LolesportsApi.InlineResponse2004](docs/InlineResponse2004.md)
 - [LolesportsApi.InlineResponse2004Data](docs/InlineResponse2004Data.md)
 - [LolesportsApi.InlineResponse2004DataStandings](docs/InlineResponse2004DataStandings.md)
 - [LolesportsApi.InlineResponse2005](docs/InlineResponse2005.md)
 - [LolesportsApi.InlineResponse2005Data](docs/InlineResponse2005Data.md)
 - [LolesportsApi.InlineResponse2005DataSchedule](docs/InlineResponse2005DataSchedule.md)
 - [LolesportsApi.InlineResponse2006](docs/InlineResponse2006.md)
 - [LolesportsApi.InlineResponse2006Data](docs/InlineResponse2006Data.md)
 - [LolesportsApi.InlineResponse2007](docs/InlineResponse2007.md)
 - [LolesportsApi.InlineResponse2007Data](docs/InlineResponse2007Data.md)
 - [LolesportsApi.InlineResponse2008](docs/InlineResponse2008.md)
 - [LolesportsApi.InlineResponse2008Data](docs/InlineResponse2008Data.md)
 - [LolesportsApi.InlineResponse2009](docs/InlineResponse2009.md)
 - [LolesportsApi.InlineResponse200Data](docs/InlineResponse200Data.md)
 - [LolesportsApi.InlineResponse404](docs/InlineResponse404.md)
 - [LolesportsApi.InlineResponse4041](docs/InlineResponse4041.md)
 - [LolesportsApi.InlineResponse404Error](docs/InlineResponse404Error.md)
 - [LolesportsApi.Locale](docs/Locale.md)
 - [LolesportsApi.MatchScheduleItem](docs/MatchScheduleItem.md)
 - [LolesportsApi.MatchType](docs/MatchType.md)
 - [LolesportsApi.MatchTypeOptions](docs/MatchTypeOptions.md)
 - [LolesportsApi.NavItem](docs/NavItem.md)
 - [LolesportsApi.OneOfquery](docs/OneOfquery.md)
 - [LolesportsApi.OneOfscheduleItem](docs/OneOfscheduleItem.md)
 - [LolesportsApi.OneOfteamMetadataParticipantMetadataItems](docs/OneOfteamMetadataParticipantMetadataItems.md)
 - [LolesportsApi.Outcome](docs/Outcome.md)
 - [LolesportsApi.PageToken](docs/PageToken.md)
 - [LolesportsApi.ParticipantId](docs/ParticipantId.md)
 - [LolesportsApi.ParticipantMetadata](docs/ParticipantMetadata.md)
 - [LolesportsApi.ParticipantMetadataExtended](docs/ParticipantMetadataExtended.md)
 - [LolesportsApi.ParticipantStats](docs/ParticipantStats.md)
 - [LolesportsApi.PerkMetadata](docs/PerkMetadata.md)
 - [LolesportsApi.Player](docs/Player.md)
 - [LolesportsApi.Query](docs/Query.md)
 - [LolesportsApi.Ranking](docs/Ranking.md)
 - [LolesportsApi.Record](docs/Record.md)
 - [LolesportsApi.Result](docs/Result.md)
 - [LolesportsApi.Role](docs/Role.md)
 - [LolesportsApi.Roles](docs/Roles.md)
 - [LolesportsApi.RosteringStrategy](docs/RosteringStrategy.md)
 - [LolesportsApi.ScheduleItem](docs/ScheduleItem.md)
 - [LolesportsApi.Scores](docs/Scores.md)
 - [LolesportsApi.Scoring](docs/Scoring.md)
 - [LolesportsApi.ScoringOptions](docs/ScoringOptions.md)
 - [LolesportsApi.Section](docs/Section.md)
 - [LolesportsApi.SimpleEvent](docs/SimpleEvent.md)
 - [LolesportsApi.SimpleGame](docs/SimpleGame.md)
 - [LolesportsApi.SimpleLeague](docs/SimpleLeague.md)
 - [LolesportsApi.SimpleMatch](docs/SimpleMatch.md)
 - [LolesportsApi.SimpleRoster](docs/SimpleRoster.md)
 - [LolesportsApi.Stage](docs/Stage.md)
 - [LolesportsApi.Standings](docs/Standings.md)
 - [LolesportsApi.State](docs/State.md)
 - [LolesportsApi.Strategy](docs/Strategy.md)
 - [LolesportsApi.Tags](docs/Tags.md)
 - [LolesportsApi.Team](docs/Team.md)
 - [LolesportsApi.TeamId](docs/TeamId.md)
 - [LolesportsApi.TeamMetadata](docs/TeamMetadata.md)
 - [LolesportsApi.TeamSlug](docs/TeamSlug.md)
 - [LolesportsApi.TeamStats](docs/TeamStats.md)
 - [LolesportsApi.Teams](docs/Teams.md)
 - [LolesportsApi.Tournament](docs/Tournament.md)
 - [LolesportsApi.Video](docs/Video.md)
 - [LolesportsApi.Vod](docs/Vod.md)
 - [LolesportsApi.Window](docs/Window.md)
 - [LolesportsApi.WindowFrame](docs/WindowFrame.md)

## Documentation for Authorization


### apiKeyAuth

- **Type**: API key
- **API key parameter name**: x-api-key
- **Location**: HTTP header

