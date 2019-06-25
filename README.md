# Buildingblocksdemo
Buildingblocksdemo is a basic front-end application that displays user data retrieved from a server through HTTP requests. It displays simple data while allowing the user through filter said data on certain parameters. It also displays basic charts which it gathers directly from the data and updates it real-time once filtered.

Through the use of [json-server](https://github.com/typicode/json-server) this app creates a mock backend to simulate a real backend. This is where the front-end gets its data from, through HTTP requests.

## How to use it
First of all clone the repository. Then run `npm install` inside the main directory.

Run `npm run mock-backend` to start the backend. This will create a server running on `http://localhost:3000/`. It uses the data found in [mockdata.json](/mockdata.json).

Run `npm run start` to start the webserver. Navigate to `http://localhost:4200/` to see the website.

## Example

![Example](https://i.imgur.com/x8eufeU.gif)
*Note: ShareX (screen capture tool) does not put the cursor in the correct place.*  

## Improvements

- More interesting charts. There is a lot more data than is shown in the user list.
- A separate user page/popover. There is a lot of user data which would be interesting for the user to see.
- Apparently `_gte` and `_tle` in json-server are for range. Not for comparisons. Which means that the results are not correct. If I were to fix this I would have to make my own backend queries in Express. But because the front-end is more important than the back-end in this assignment I chose to leave it the way it is now.
- Input submitting could be more dynamic, instead of having to press enter it could easily do it on a value change. Or a simple button would work too.
- Registered should be a date format by doing `new Date(user.registered)`.
- The css is not consistent. Some lines dark gray while others are lighter
- Chart text should be white.
- Input "Up/Down" buttons should be hidden in balance inputs.
- Caching of results resulting in less backend-calls (for better scaling).
