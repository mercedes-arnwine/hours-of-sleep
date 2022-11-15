var hoursOfSleep = Number(
  prompt("How many hours of sleep did you get? (0-12)")
);

if (hoursOfSleep > 12) {
  console.log("Are you serious??? Probably not :)");
} else if (hoursOfSleep >= 8) {
  console.log("Wow congrats sleeping like a legend!");
} else if (hoursOfSleep > 5) {
  console.log("That's alright, might need a bit more.");
} else {
  console.log("You need more sleep!");
}
