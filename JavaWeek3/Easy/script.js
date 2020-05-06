function excercise(excercise){
    return function(){
      return `Today's exercise: ${excercise}`
    }
}
    var run = excercise("running");
    console.log(run());
    var swim = excercise("swimming");
    console.log(swim());