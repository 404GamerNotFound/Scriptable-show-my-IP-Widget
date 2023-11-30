
// Create a new widget instance
let widget = new ListWidget();

// Add text to the widget
let title = widget.addText("My IP Address:");
title.font = Font.boldSystemFont(16);
title.minimumScaleFactor = 0.5; // Ensures text scales down to fit

// Retrieve the IP address
let ip = await fetchIPAddress();
let ipText = widget.addText(ip);
ipText.font = Font.systemFont(14);
ipText.minimumScaleFactor = 0.5; // Scales down to fit if needed

// Set the widget layout
widget.setPadding(10, 10, 10, 10);
widget.spacing = 5;

// Complete the widget
if (!config.runsInWidget) {
  await widget.presentSmall();
}
Script.setWidget(widget);
Script.complete();

// Function to fetch the IP address
async function fetchIPAddress() {
  let url = "https://api.ipify.org?format=json";
  let req = new Request(url);
  let res = await req.loadJSON();
  return res.ip;
}
