# Image Slideshow
- In this I have created images slideshow using html css and javascript. This can be used in websites just by making minor changing
- `First`: creates three file with names of your choice (I have used index.html, style.css, index.js) and create an assets folder for storing the images.
- `Second`: download the images from this repo or from any other source.
- `Third`: Open up your favourite editor and start editing the files created.
- Images: Downloaded from google
# Logic for scrolling
- we will use the `scrollTo(x, y)` method to change the scrollbar position with click event listener.
- since in this we are scrolling in x-direction, y will always be zero.
- use a global variable (say xPos) and pass to method.
- rest is the maths.
# Card creation
- create a `div` element with `class` card then add other `div` such as for image, name, description, button, etc...
- style the card in `<file_name>.css` file
- populate the card for rest of images (`ctrl+c` && `ctrl+v`)
- then make the parent element (`slideContainer`) of card(s) as `display:flex` with `flex-direction:row;`.
- don't forget to add `aling-items:center` and `justify-content:center`.
- rest all is your creativity how to sytle the card.
# Button creation
- make the buttons on left and right side of parent (`slideContainer`) with cursor pointer.
- in this .js file add event listener on them to implement the above logic for scrlling.
- Congratulations you have created your image slider using pure html, css and js.
# Preview
![image](https://user-images.githubusercontent.com/77043443/232021041-236a1563-4ebb-4997-9cfa-843a9e1a7a27.png)
