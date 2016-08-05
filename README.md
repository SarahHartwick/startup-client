# StartHub [http://www.starthubapp.com]

I created an application that allows people to create virtual 'slide decks' of their startup ideas to share with others.

## Functionality

-   Users can signup/signin & create ideas
-   Users can then add their answers to a series of slides (problem, solution, market, product etc)
-   Users can add competitors (separate table) with name, description & website iframe
-   Users can add team members (separate table) with name, title, linked in url & photo (uploads to S3)
-   Users can add documents (separate table) which belong to an idea and are uploaded to S3
-   Users can view all other users in a table & click on a user to see their startup ideas, they cannot edit or delete anyone else's ideas
-   Users can edit their own idea slides, and can also delete their startup ideas
-   Users can view a table of all of their startup ideas
-   Users can view a table of all startup ideas & click on one to navigate through all of the idea's slides
-   Users can email a startup idea to a friend (sends path to that startup idea)

## Models

-   Users, Ideas, Competitors, Team Members, Uploads
-   Users have many Ideas
-   Ideas have many Competitors, Team Members, Uploads
-   Competitors, Team Members, Uploads belong to an idea (which belongs to a user) which allows me to protect these items with auth

## Future Updates

-   I would like to add the ability to invite a User who does not have an
account already via sending an email, as well as notifications for Users
-   I would like to combine all of the slides into a printable or email-able version
