// clean up input

//put input into array

//do a for each loop 

// set time value to * 1000

let alarms = process.argv.slice(2)

for (let alarm of alarms) {
  if (alarm > 0 && alarm % 1 == 0) {
    setTimeout(() => {
      process.stdout.write('\x07')
      console.log(`alarm for ${alarm} seconds is complete`)
    }, alarm * 1500)
  }
}