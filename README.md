# 02 Shared group exercise

As an accountability group, you will be working in this repository to build an API and front-end for a social media app "Chirpie". You can use it as a reference throughout the term.

## Getting started

1. Open this project in your VS Code by cloning the repository

### Server

This is where your server API code lives

2. Open your terminal, go to the `server` folder, `cd server` and install your Node dependencies: `npm install`
3. Start the server: `npm start`

### Client

This is where your front-end code lives

4. Open your terminal, go to the `client` folder, `cd client` and install your Node dependencies: `npm install`
5. Start the server: `npm start`

# Architecture

![architecture-diagram](architecture-diagram.jpg)

# Team Agreement

The purpose of this team agreement is as follows:

* To develop a shared sense of responsibility for our group project.
* To engage team members and concentrate their efforts towards effectively and efficiently meeting the requirements laid out in the excercise brief.
*  As a reminder to all team members of our shared interest in learning and task completion. 
*  To enhance the teams' productivity through solidyfying our purpose and direction as a group.

## Group Mandates

All members of the group hereby agree on the following mandates:

* We will ask for help and give help when and where needed.
* We will be transparent and honest.
* We will assume positive intent from our teamates. 
* To the best of our ability we will join meetings on time and have our cameras on during huddle and meet calls.
* If for any reason we can not attend a meeting we will inform the other group memebers as soon as possible so as to avoid any inconveniances to the wider team. 
* All team members will apply themselves, to the best of their ability, to the group project.
* We will endeavour to deal with potential set-up and technical difficulties **ahead** of time, to reduce time on such issues during team meetings. 
* We will endeavour to **finish** the project on time and to the best of our abilities. 
* We will put measures in place to ensure a fair and equitable workload for all team members. 
* If a workload is not deemed fair or equitable we will revise individual and group tasks to ensure that these premise are met. 

## Task Specific Mandates

All members hereby agree to the following task specific mandates:

* The team member in charge of coding at any given time will not commit directly to the main branch.
* All pull requests require atleast **three** team members' approval.
* We will endeavour to review pull requests within 24 hours of them being made.
* All code is to be produced by way of group collaboration and / or posited to the group in such a way that it can be agreed upon prior to being commited. 
* Code will be peer reviewed by all team members where possbile. 
* Code will be reviewd by atleast 3 team members where two or more team members are unavailable or wiorking on other parts of the project. 
* Relevant documentation is discussed within the group ahead of implementaion and is written, then peer reviewed, and only finalised on consensus within the group. 

## Preliminary Thoughts / Guide on Group Dynamics

All memebers of the team will switch between navigator and driver roles, with no one staying in the driver role for more than 15 minutes at a given time. Work stations will be set up to reflect this dynamic and collaborative format and make use of live share VS Code and / or other mediums that allow for this flexibility of group tasks. 

All members agree that, should we need additional structure within the team at any point, the group structure below may act as our default. 

The team however understands they are not limited to these roles and can adjust and settle on alternatives at any time. 

All team members also undertand that the team agreement binds all insofar as endeavouring to do their best to be fully involved in each and every step of the process.

Kate - Speaker / Navigator 
Jacob - Driver
Jack - Facilitator / Navigator
Janeil - Navigator
Alec - Navigator 
Dylan - Navigator 

Definitions: 

* Driver: experts who navigate in code

* Navigator: experts who navigate in solutions

# Rest API

Add you Rest API design here

## Retrieve a single chirp

### Request Details

|          |               |
| -------- | ------------- |
| Endpoint | /api/chirps/1 |
| Method   | GET           |

### Response Details

|             |        |
| ----------- | ------ |
| Status Code | 200 OK |


#### Example Response Body

```json
{
    "id": 1,
    "username": "Example User",
    "profilePicture": "example.png",
    "date": "28/04/2023",
    "shares": 122,
    "comments": [
        "Example Comment",
        "Example Comment 2",
    ],
    "likes": 12,
    "text": "Example message"
}
```

## Retrieve all the chirps


### Request Details

|          |             |
| -------- | ----------- |
| Endpoint | /api/chirps |
| Method   | GET         |

### Response Details

|             |        |
| ----------- | ------ |
| Status Code | 200 OK |


#### Example Response Body

```json
{
    "data": [
        {
            "id": 1,
            "username": "Example User",
            "profilePicture": "example.png",
            "date": "28/04/2023",
            "shares": 122,
            "comments": [
                "Example Comment",
                "Example Comment 2",
            ],
            "likes": 12,
            "text": "Example message"
        },
        {
            "id": 2,
            "username": "Example User 2",
            "profilePicture": "example.png",
            "date": "28/04/2023",
            "shares": 122,
            "comments": [
                "Example Comment",
                "Example Comment 2",
            ],
            "likes": 12,
            "text": "Example message"
        },
    ]
}
```

## Post a chirp

### Request Details

|          |             |
| -------- | ----------- |
| Endpoint | /api/chirps |
| Method   | POST        |

#### Example Request Body

```json
{
    "username": "Example User 2",
    "profilePicture": "example.png",
    "date": "28/04/2023",
    "shares": 0,
    "comments": [],
    "likes": 0,
    "text": "Example message"
}
```

### Response Details

|             |             |
| ----------- | ----------- |
| Status Code | 201 Created |


#### Example Response Body

```json
{
    "id": 3,
    "username": "Example User 2",
    "profilePicture": "example.png",
    "date": "28/04/2023",
    "shares": 122,
    "comments": [
        "Example Comment",
        "Example Comment 2",
    ],
    "likes": 12,
    "text": "Example message"
}
```