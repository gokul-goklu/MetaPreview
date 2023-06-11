// input - getGreetings("sushmitha")
// output - Hello Sushmitha, Welcome to the team.
// input - getGreetings()
// output - Hello User, Welcome to the team.

const getGreetings = (nam) => {
  if (nam =="")
   console.log( "Hello User, Welcome to the team.");

  else
  {
    nam[0]=nam[0]+26;
   console.log("Hello"{nam}"Welcome to the team.");
  }
};

let nam;
getGreetings(nam);
