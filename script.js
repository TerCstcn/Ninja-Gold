// Initialize variables for count of attempts and gold in variable game
var game = {
  goldCount: 0,
  attemptCount: 20
};

//=======================================================================================
// A function that produces a random value for gold.
function generateGold(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// A function that modifies the attempt count.
function updateAttemptCount() {
  game.attemptCount--;
  $('#att_count').text(game.attemptCount);
}

// A function that modifies the gold count.
function updateGoldCount(value) {
    game.goldCount += value;
    $('#gold_count').text(game.goldCount);
  
    // Verify if the gold count reaches 250 within 20 attempts.
    if (game.goldCount >= 250 && game.attemptCount === 0) {
      displayMessage('You Won!', 'green');
    } else if (game.attemptCount === 0 && game.goldCount < 250) {
      displayMessage('You Lost', 'red');
    }
  }

  function displayMessage(message, color) {
    console.log($('#message-container'));
    $('#message-container').text(message);
    $('#message-container').css('color', color);
}

//=======================================================================================
//A function for appending a record to the log.
function addToLog(date, time, location, gold) {
  let logEntry = `<p>${date} ${time} - ${location}: ${gold} gold</p>`;
  $('#log-container').prepend(logEntry);
}

 //======================================================================================= 
// A function for restarting the game.
function resetGame() {
  game.attemptCount = 20;
  game.goldCount = 0;
  $('#att_count').text(game.attemptCount);
  $('#gold_count').text(game.goldCount);
  $('#log-container').empty();
  $('#message-container').empty();
}

// For resetting the game
$('#reset_button').click(function() {
  resetGame();
});

//=======================================================================================
// The functions associated with the locations (buttons)
$('#house_btn').click(function() {
    if (game.attemptCount > 0) {
      let gold = Math.random() < 0.8 ? 10 : 0;
      updateAttemptCount();
      updateGoldCount(gold);
      addToLog(new Date().toLocaleDateString(), new Date().toLocaleTimeString(), 'House', gold);
      displayMessage(`+ ${gold} gold from the House.`, 'green');
    } else {
      displayMessage('You have no more attempts left.', 'red');
      if (game.goldCount >= 250 && game.attemptCount === 0) {
        displayMessage('You Won!', 'green');
      } else if (game.attemptCount === 0 && game.goldCount < 250) {
        displayMessage('You Lost', 'red');
      }
    }
  });

$('#cave_btn').click(function() {
  if (game.attemptCount > 0) {
    let gold = 5;
    updateAttemptCount();
    updateGoldCount(gold);
    addToLog(new Date().toLocaleDateString(), new Date().toLocaleTimeString(), 'Cave', gold);
    displayMessage(`+ ${gold} gold from the Cave.`, 'green');
  } else {
    displayMessage(`You have no more attempts left.`, 'red');
    if (game.goldCount >= 250 && game.attemptCount === 0) {
        displayMessage('You Won!', 'green');
      } else if (game.attemptCount === 0 && game.goldCount < 250) {
        displayMessage('You Lost', 'red');
      }
  }
});

$('#goldmine_btn').click(function() {
  if (game.attemptCount > 0) {
    let gold = Math.random() < 0.8 ? generateGold(1, 25) : 0;
    updateAttemptCount();
    updateGoldCount(gold);
    addToLog(new Date().toLocaleDateString(), new Date().toLocaleTimeString(), 'Goldmine', gold);
    displayMessage(`+ ${gold} gold from the Goldmine.`, 'green');
  } else {
    displayMessage(`You have no more attempts left.`, 'red');
    if (game.goldCount >= 250 && game.attemptCount === 0) {
        displayMessage('You Won!', 'green');
      } else if (game.attemptCount === 0 && game.goldCount < 250) {
        displayMessage('You Lost', 'red');
      }
  }
});

$('#casino_btn').click(function() {
  if (game.attemptCount > 0) {
    let gold = Math.random() < 0.5 ? generateGold(-50, -40) : generateGold(40, 50);
    updateAttemptCount();
    updateGoldCount(gold);
    if (gold < 0) {
      addToLog(new Date().toLocaleDateString(), new Date().toLocaleTimeString(), 'Casino', gold);
      displayMessage(`- ${Math.abs(gold)} gold at the Casino.`, 'red');
    } else {
      addToLog(new Date().toLocaleDateString(), new Date().toLocaleTimeString(), 'Casino', gold);
      displayMessage(`+ ${gold} gold from the Casino.`, 'green');
    }
  } else {
    displayMessage(`You have no more attempts left.`, 'red');
    if (game.goldCount >= 250 && game.attemptCount === 0) {
        displayMessage('You Won!', 'green');
      } else if (game.attemptCount === 0 && game.goldCount < 250) {
        displayMessage('You Lost', 'red');
      }
  }
});

//=======================================================================================
// Ninja moving in different location
$("#cave_btn").click(function(){
  $("#ninja").animate({marginLeft: "-500px", marginTop: "-100px"}, 300, function(){
    // Reset the position of the image after the animation is complete
    $(this).css({marginLeft: 0, marginTop: 0});
  });
});

$("#goldmine_btn").click(function(){
  $("#ninja").animate({marginRight: "500px", marginTop: "100px"}, 300, function(){
    // Reset the position of the image after the animation is complete
    $(this).css({marginRight: 0, marginTop: 0});
  });
});  

$("#house_btn").click(function(){
  $("#ninja").animate({marginLeft: "500px", marginTop: "-100px"}, 300, function(){
    // Reset the position of the image after the animation is complete
    $(this).css({marginLeft: 0, marginTop: 0});
  });
});  

$("#casino_btn").click(function(){
  $("#ninja").animate({marginLeft: "500px", marginTop: "100px"}, 300, function(){
    // Reset the position of the image after the animation is complete
    $(this).css({marginLeft: 0, marginTop: 0});
  });
});  
    
    
    


 