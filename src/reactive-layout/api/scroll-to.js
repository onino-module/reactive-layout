const scrollTo = ( target ) => {
  window.scrollTo( {
    "behavior": "smooth",
    "left": 0,
    "top": target.offsetTop
  } );
};

export default scrollTo