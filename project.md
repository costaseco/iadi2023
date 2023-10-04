# Project Assignment
## Internet Applications Design and Implementation 2023/24

### Change log

- 2022-10-03: Initial version, this is a draft, still up for discussion and receiving feedback.
- 2022-10-04: Removed the role "Cleaner". Improved the text readability and clarified some details. 

## Introduction

The topic for this yeas is an application to manage appartments in a local holiday accommodation company. The functionalities involved include managing the entry, exit, and change of state of appartments in the system as they are booked, cleaned, and delivered to the client. The company manages a series of appartments in different locations and owned by different owners.

The actors in this systems are the following: Client, Manager, and Owner.

Each appartment has a history of periods and states in the system. For each existing period in a calendar, an appartment maybe "available", "under consideration", "booked", "occupied", "awaiting review", or "closed". Each state has a date associated and you should be able to draw a history from them.

The owner of an appartment can add a period to the history of their appartment where the appartment is in the state "available". When a client bids to rent an appartment it adds a state to the history with value "under consideration". When the owner or a manager accepts the bid the latest state becomes "booked", after check-in it becomes "occupied", after checkout it becomes "awaiting review" and after a review is posted by the client it becomes "closed". A bid is placed for a (part of) a period, If accepted, the remaining period becomes one new period (or more than one), in the state "available" for rent.

Some more details about the operations available will be made available in the next weeks. You already have a lot to work with for the first steps.  

## Technical Details

### Server-side application 

Your server-side application should implement a layered architecture to make available a REST API for the resources of the system. The resources that are visible in the API are the following: client, owner, appartment, period, booking and review. Not all operations will have to be implemented in the API, but the ones that are implemented should be fully functional. Nevertheless you should design the full API following the REST architectural style. It should identify resources and sub-resources clearly to support the full life-cycle of the resources. 

Data resources needed to make the application work do not need to be fully managed by the API and can be introduced in the database using SQL scripts or seed data procedures.
 
### Requirements for the Server Application

The application should be implemented using the Spring framework and Kotlin. The API should be documented using OpenAPI 3.0. The application should be developed in a layered architecture with a persistent database (H2 in a file or MySQL).

## Working Teams 

The project assignment should be done by teams of 3. If you cannot make a team of 3, talk to the instructor to authorize other solutions. 

## Deliverables

All deliverables should be submitted by pushing them to the repository of the project in github classroom.

1. Database schema

2. OpenAPI (a pdf file with the specification)

3. Server-side application (a commit in the repository)

4.  Automatic unit and integration tests in a continuous integration style

5. Client-side application (a commit in the repository)

6. Presentation

7. Report

8. Video with Demo

At this point you can already start working on items 1 and 2. The rest of the items will be discussed in the next weeks.

### Submission details

More later.

## Important Dates

First submission: 2022-10-27

Second submission: 2022-12-10

