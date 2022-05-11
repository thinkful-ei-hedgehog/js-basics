let height = 50;

switch (height) {
    case 50:
      console.log('You cant ride')
      break;

    case 60: {
      console.log('Ride on!')
      console.log('60;')
      break;
    }

    default:
      console.log('Where are you?')
  }

  if(height === 50){
      console.log('You cant ride')
  } else if(height===60){
    console.log('Ride on!')
  } else{
    console.log('Where are you?')
  }