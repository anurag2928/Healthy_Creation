var a=Number(document.getElementById("calorie"));
var b=Number(document.getElementById("calorie"));
var c=document.getElementById("calorie");
var d=document.getElementById("calorie");
var xValues = ["Calories", "Carbohydrates", "Proteins", "Fats"];

var yValues = [55, 49, 44, 24];
var barColors = ["red", "green","blue","orange"];

new Chart("myChart", {
  type: "horizontalBar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
        legend: {display: false},
    title: {
      display: true,
      text: "MEAL ANALYSIS"
    }
  }
});