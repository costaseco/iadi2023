# Project Assignment
## Internet Applications Design and Implementation 2023/24

### Change log

- 2023-10-03: Initial version, this is a draft, still up for discussion and receiving feedback.
- 2023-10-04: Removed the role "Cleaner". Improved the text readability and clarified some details. 
- 2023-10-12: Clarified the terms. Highlighted in *italic* the main changes.
- 2023-10-18: Added some submission details. 
- 2023-11-20: Added the user stories for the development of the front-end application. Relaxed the requirements for the server-side application (database).

## Introduction

The topic for this yeas is an application to manage appartments in a local holiday accommodation company. The functionalities involved include managing the *booking*, entry, exit, and change of state of appartments in the system as they are booked, cleaned, and delivered to the client. The company manages a series of appartments in different locations and owned by different owners.

The actors in this systems are the following: Client, Manager, and Owner.

Each appartment has a *sequence* of periods and states in the system. *Each appartment has a set of reservations included in these periods of availability*. For each existing *reserved period* in *the* calendar, an appartment maybe "available", "under consideration", "booked", "occupied", "awaiting review", or "closed". Each state has a date associated and you should be able to draw a history from them.

The owner of an appartment can add a period to the *sequence of periods of* their appartment. *In these periods the appartment is "available"*. When a client *makes a reservation* to rent an appartment in a given period, the reservation is "under consideration". When the owner accepts the *reservation*, the state becomes "booked", after check-in it becomes "occupied", after checkout it becomes "awaiting review" and after a review is posted by the client it becomes "closed". A *reservation* is placed for a (part of) a period in the sequences of availability of the appartment. If accepted, the remaining period *becomes available*. A manager can act on behalf of the owner to accept or reject a reservation and of the client to check-in or check-out. Reviews can only be posted by the client that made the reservation. *A basic business rule is that a reservation needs to be included in a period of availability of the appartment and that no two reservations can overlap in time.*

The operations that you must implement need to support the workflow above and support a client application where it is possible to list and search for appartments, see a calendar with the available periods for a given appartment, do a reservation and its associated operations. 

Data associated with users includes the username, password, name, email, picture and phone number. Data associated with appartments includes the name, description, location, amenities, pictures, and price per night. Data associated with periods includes the start date and end date. Data associated with reservations includes the start date and end date. Data associated with reviews includes the text and the rating. 

## Technical Details

### Server-side application 

Your server-side application should implement a layered architecture to make available a REST API for the resources of the system. The resources that are visible in the API are the following: client, owner, appartment, period, booking and review. Not all operations will have to be implemented in the API, but the ones that are implemented should be fully functional. Nevertheless you should design the full API following the REST architectural style. It should identify resources and sub-resources clearly to support the full life-cycle of the resources. 

Data resources needed to make the application work do not need to be fully managed by the API and can be introduced in the database using SQL scripts or seed data procedures.

*You do not need to store pictures in blobs in the database, but you should store a URL to the picture in the database instead.*

*Hint1: the data representation at the level of the REST API does not need to map directly to the database schema. You may choose to not show some identifiers in the REST API, do not represent some of the minor resources as full resources, or even to aggregate some resources in a single representation.

Hint2: Although you need to present the design it, you do not need to implement the services that manage users or appartments. That data can be loaded as seed data in the database. Present the API implementation with empty methods.*
 
### Technical Requirements for the Server Application

The application should be implemented using the Spring framework and Kotlin. The API should be documented using OpenAPI 3.0. The application should be developed in a layered architecture with a  database in memory (H2). All the data necessary to run the application should be preloaded into the database.

### Client-side application 

Your client-side single-page (web) application should implement a hierarchical structure of React components directly mapping a specification developed using IFML and implementing the following user-stories:

1. As a client, I want to see the first page of a list of appartments so that I can choose one to rent and see its details.

2. As a client, I want to see the next page in the list of appartments so that I can choose one to rent and see its details.

3. As a client, I want to see the details of an appartment so that I can read its description and amenities and decide if I want to rent it.

4. As a client, I want to see the calendar of an appartment so that I can decide when to rent it.

5. As a client, I want to see the reviews of an appartment so that I can decide if I want to rent it.

6. As a client, I want to select a starting date and an ending date in the calendar of an appartment to start making a reservation.

7. As a client, I want to fill a form with the number of people to finish making a reservation.

8. As a client, I want to see the details of a reservation so that I can see if it was accepted.

9. As a client, I want to see the details of a reservation so that I can cancel it and see the result in the the details of the reservation.

10. As a client, I want to see the details of a reservation so that I can check-in and see the result in the the details of the reservation.

11. As a client, I want to see the details of a reservation so that I can check-out and see the result in the the details of the reservation.

12. As an owner, I want to see the list of my appartments so that I can select one appartment and see its details. 

13. As an owner, I want to see the details of an appartment so that I can add a period of availability and see the result in the calendar.

14. As an owner, I want to see the details of an appartment so that I can see the list of reservations for it.

15. As an owner, I want to see the details of a reservation so that I can accept it and see the result in the list of reservations.

### Technical Requirements for the Client Application

The application should be implemented using the React/Redux framework and TypeScript. The client application should work together with the server-side application to provide a full user experience. The connection to the server-side application should be done using the OpenAPI specification. 

## Working Teams 

The project assignment should be done by teams of 3. If you cannot make a team of 3, talk to the instructor to authorize other solutions. 

## Deliverables

All deliverables should be submitted by pushing them to the repository of the project in github classroom.

1. Database schema

2. OpenAPI (a pdf file with the specification)

3. Server-side application (a commit in the repository - tag SERVER)

4. Automatic unit and integration tests in a continuous integration style

5. Client-side application (a commit in the repository - tag CLIENT)

6. Presentation

7. Report

8. Video with Demo (5 minutes showing all user stories)


### Submission details

The first submission will contain items 1 to 4. The second submission will contain items 5 to 8.

You reveiced the link to the assignment by email, form your team and use that as your work repository, the last submission at the deadline will be considered as the final one for each part of the assignment.

You can refine the server-side application in the second submission. 
## Important Dates

First submission: 2022-10-27

Second submission: 2022-12-10

