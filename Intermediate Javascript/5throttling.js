/**
 * Throttling - Throttling is used to call a function after every millisecond or
 * a particular interval of time only the first click is executed immediately.
 *
 */

//  in situations where a function is called frequently and you want to prevent it from being executed too often, but unlike debouncing where you wait for a certain amount of time after the last call, in throttling you wait a certain amount of time after the first call and execute the function only once during that interval.

// eg -->to check user active on your site
// how many times user click on page to track

// eg :- user press button two three time and database collect two three time record to prevent them

// use case :- user Either perform repetitive action or action then their fix time to perform function
const throttleFunction = (func, delay) => {
  // Previously called time of the function
  let prev = 0;
  return (...args) => {
    // Current called time of the function
    let now = new Date().getTime();

    // Logging the difference between previously
    // called and current called timings
    console.log(now - prev, delay);

    // If difference is greater than delay call
    // the function again.
    if (now - prev > delay) {
      prev = now;

      // "..." is the spread operator here
      // returning the function with the
      // array of arguments
      func.call(this, ...args);
    }
  };
};

const btn = document.querySelector("#throttle");

btn.addEventListener(
  "click",
  throttleFunction(() => {
    console.log("button is clicked");

    // hit backend api
  }, 1500)
);

/**
 * Advantages of throttling function: 

It prevent frequent calling of the function.
It makes the website faster and controls the rate at which a particular function is called.(increase performance)




 */
<body>
  <input type="text" id="search" onchange="" />
  <button id="myid" onclick="newFun()">
    okay
  </button>
</body>;

const mythrottle = (fn, dely) => {
  return function (...args) {
    document.getElementById("myid").disable = true;
    setTimeout(() => {
      fn();
    }, dely);
  };
};

const newFun = mythrottle(() => {
  document.getElementById("myid").disable = false;
  console.log("user clicked !");
});
