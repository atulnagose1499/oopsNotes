/**
 *  DEBOUNCE - a debounce function makes sure that your code is only triggered once per use case
 *
 * It is used to trigger a costly function with some delay to
 *   prevent unnecessary blockage of resources
 *
 * For example - calling api on user search, on scroll on page, on multiple button clicks
 */

//  in situations where a function is called frequently and you want to prevent it from being executed too often.

// ex. debounce is an input element when user type something then we need to call api and provide search suggestion
// api call (costly function) with some delay to prevent unnecessary blockage (single single event occurs)to make a single batch call at end with some intervals
// its prevents extra api call, network block, js block

//after a while delay to call api

// use case :- when user stop their action then run function after milliseconds

const debounceTime = (func, delay) => {
  let debounceTimer;

  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
};

const input = document.querySelector("searchInput");

input.addEventListener(
  "change",
  debounceTime(() => {
    console.log("input is changed");

    // hit search apis
  }, 100)
);

/**
 * revents your UI code from needing to process every event
 * and also drastically reduces the number of API calls sent to your server.
 */
