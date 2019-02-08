# Convert an Airtable product database to JSON
## BETA VERSION
Use the Airtable API to display product catalogues as JSON format for import into Craft CMS via Feed Me

Requires an Airtable with a similar architecture to https://airtable.com/shrsSE8tZcAUoqOds.

NOTE: the SKUS, Prices and Dimensions columns in "Master Products" are created using rollups of fields from the  "Product Variants" table

## Getting started

1. Clone this repo
2. Run `npm install`
3. Add your Airtable API key and base ID to `index.js`
4. Run `node index.js` to output a JSON feed from your selected Airtable

The terminal output should be something like this...

```
{
"title": "Progress Plus Height Adjustable Desk ",
"brand": "Acme",
"description": "With its clean lines and lightweight design, Progress Plus has been designed to blend into the modern office environment. Its electric height adjustment enables a smooth transition between sitting and standing, allowing users to vary their posture throughout the day. Progress Plus Electric Height Adjustable Sit/Stand Rectangular Desk / Height adjustment via electronic keypad.Height adjustment 650mm-1280mm.Up/down keypad.Includes horizontal cable tray. Anti-collision as standard.Non-sliding top.",
"variants": {
   "variant": [
     {
       "sku":"ELT-PRO-HAD-160-80", "price":"707.2", "h":"650", "w":"1600", "d":"800"
     },
     {
       "sku":"ELT-PRO-HAD-120-80", "price":"678.6", "h":"650", "w":"1200", "d":"800"
     },
     {
       "sku":"ELT-PRO-HAD-140-80", "price":"692.9", "h":"650", "w":"1400", "d":"800"
     },
     {
       "sku":"ELT-PRO-HAD-180-80", "price":"721.5", "h":"650", "w":"1800", "d":"800"
     },
   ]
}
```

## Todo
[ ] Move API creds to .env file
[ ] Store the JSON terminal output in a file that FeedMe can read
