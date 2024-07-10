# Libraries page

* Contributed libraries are submitted via [this form](https://docs.google.com/forms/d/e/1FAIpQLSdWWb95cfvosaIFI7msA7XC5zOEVsNruaA5klN1jH95ESJVcw/viewform), and here are the [form responses](https://drive.google.com/drive/u/0/folders/1DNsXp3s35NX_T4Unq4kRvH3i2TSoh44w).
* To add a library:
  * Go to `src/data/libraries/` and add an entry into the `libraries.json` file. Entries are listed alphabetically.
  * Open each of the yml files in `src/data` and add an entry for the library name using the description text provided in the form response. The name of that entry should be the same as the "name" field in the `libraries.json` entry you just made. If you are missing the text for a particular translation, add an entry in English as a placeholder.
  * Download the image linked under "400x118 grayscale preview image" and place it in `src/assets/img/libraries/`. It should be named "LIBRARYNAME.jpg", for example, "p5.xr.jpg" or "mappa.jpg".
  * Run `npm run watch` to build the site, and you should see the new library added to p5js.org/libraries.
  * Gray out the name of the library in the [form responses](https://drive.google.com/drive/u/0/folders/1DNsXp3s35NX_T4Unq4kRvH3i2TSoh44w) sheet, so we know it's been added.
  * (Optional) Post on IG and Twitter that the library has been added, tagging the creator if they provided their username.
* To make changes to the libraries page template, you can edit `libraries.ejs`.
