# Created using Stephen Grider's Redux Simple Starter Pack

- Edit: I think something changed with heroku's API. It's looking for npm run build so I just re-created the project using create-react-app to avoid any additional headaches

###  https://mplibunao-react-youtube.herokuapp.com/

- Deployed using Heroku and includes the following scripts:
  - postinstall : create production build
  - start : runs `server.js` responsible for setting up express inlcuding:
    - Port
    - Directory for serving static files (bundle.js in this case)
    - Route/s (index.js in this case since we're building an SPA)

<hr>

# ReduxSimpleStarter

Interested in learning [Redux](https://www.udemy.com/react-redux/)?

### Getting Started

There are two methods for getting started with this repo.

#### Familiar with Git?
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/StephenGrider/ReduxSimpleStarter.git
> cd ReduxSimpleStarter
> npm install
> npm start
```

#### Not Familiar with Git?
Click [here](https://github.com/StephenGrider/ReactStarter/releases) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
> npm install
> npm start
```
