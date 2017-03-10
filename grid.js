var gridSize = 16;
var randomColor = false;

$(document).ready(function() {
  drawGrid(gridSize);
});

function drawGrid(gridSize){
  var side = 960 / gridSize;
  var $row = $("<div />", {
    class: 'row'
  });

  var $square = $("<div />", {
    class: 'square'
  });

  for(var i = 0; i < gridSize; i++){
    $row.append($square.clone());    // Clone = append new copy of existing element (otherwise the existing element would move)
  }
  for(var i = 0; i < gridSize; i++){
    $('#wrapper').append($row.clone());
  }
  $('row').css({
    'height': side + 'px'
  });
  $('.square').css({
    'height': side + 'px',
    'width': side + 'px'
  });
  $('#wrapper').children('div').children('div').mouseover(squareChange);   // Need to chain to get the children of the children (squares in the rows)
  $('#reset').click(reset);
  $('#randomcolor').click(function(){
    randomColor = !randomColor
  });
}

function squareChange(){
  if ( $('#wrapper:active').length ) {
    if(randomColor) {
      $(this).css('background-color', getRandomColor())
    }
    else {
      $(this).css('background-color', 'black');  
    } 
  }
}

function reset(){
  var gridSize = parseInt(prompt("How many squares wide should the new grid be?"));
  if(isNaN(gridSize)) {
    alert("Please enter a number!")
  }
  else {
    $('#wrapper').children().remove(); // just remove everything
    drawGrid(gridSize);
    $(document).stopImmediatePropagation();
  }
}

function getRandomColor(){
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}