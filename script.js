function promptFlavors() {
  let input = prompt("Please enter a list of comma-separated froyo flavors:");
  if (input) {
    let flavors = input.split(",").map((flavor) => flavor.trim());
    let flavorCount = {};

    flavors.forEach((flavor) => {
      if (flavor in flavorCount) {
        flavorCount[flavor]++;
      } else {
        flavorCount[flavor] = 1;
      }
    });

    console.table(flavorCount);
  } else {
    console.log("No flavors entered.");
  }
}
