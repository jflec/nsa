# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

- Ruby version

- System dependencies

- Configuration

- Database creation

- Database initialization

- How to run the test suite

- Services (job queues, cache servers, search engines, etc.)

- Deployment instructions

- ...

Once the parameters of the bracket have been set (number of teams, users per team, bracket name, player names), a bracket will be generated with random starting positions for each team (research me!)

The bracket will exist on two views; one for the TO, and one for everyone else. The TO view will be able to edit the bracket; changing player positions and scores. If the event goes smoothly, however, this shouldn’t ever be used. The bracket view will allow registered users who are participating in the event to log their results.

Say two teams or two players each are playing, team A and team B, and Every team member is a registered user. The result of the match is 3-1 in team A’s favor. Each team member goes to nightshiftarcade.ca to log the scores.
Since all 4 users are registered, the website will check for a score input from each user. In this case, All users input 3-1 as the final score, so team A will be moved further up the bracket, and team B is disqualified.

However, on the other side of the bracket, teams C and D have a problem. The game has ended 2-3 in team D’s favor. However, a user on team C claims that they had a connection issue and couldn’t play properly on the last round. In this case the website would highlight that match and send a notification to the TO and the Judges. (Users listed as judges have the same permissions as regular users, but they have the power to decide the outcome of a problem like this.
