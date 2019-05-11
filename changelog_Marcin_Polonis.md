# Quantity of tasks: 8

## Quantity of completed tasks: 8

## Quantity of merged tasks with master branch: 8

# Tasks List with points:

## 1. WDP190403-1 --> 1 point

## 2. WDP190403-4 --> 1 point

## 3. WDP190403-11 --> 3 points

## 4. WDP190403-15 --> 1 point

## 5. WDP190403-19 --> 3 points

## 6. WDP190403-30 --> 1 point

## 7. WDP190403-31 --> 1 point

## 8. WDP190403-33 --> 1 point

## Total points: 12

# Specyfication of my work:

### WDP190403-1

**Recommendation:** Add images of products to product boxes and "last on blog" section

**Solution:** Our project did not have any images of products so that I chose random photos of furniture in suitable sizes and put them into the particular sections of project as a background-image. Moreover, I added required css style.

### WPD190403-4

**Recommendation:** The "Quick Preview" and "Add to Cart" buttons should only be visible on hover of the entire box. Then, the price should change its color.

**Solution** To resolve this problem, I added required css code for these elements in product-box section.

### WDP190403-11

**Recommendation:** A site does not have responsive modes. A customer does not have RWD designs, so you have to do it on your own. This task applies to the main menu (search and "Home", etc.) On tablets, the search should be under the menu. On smaller screens, the search should be placed next to the icon of the mobile menu, which shows dropdown menu on click.

**Solution:** I accomplished this task according to the specification adding different versions of menu for particular screen size, using html nad css. In addition I implemented a javaScript code for dropdown menu for mobile.

### WDP190403-15

**Recommendation:** A site does not have responsive modes. A customer does not have RWD designs, so you have to do it on your own. This task relates to the "latest blog" section. The client would like to have 2 elements in the row on tablets and 1 in a row on mobiles.

**Solution:** I accomplished this task according to the specification. I coded this task using html nad css.

### WDP190403-19

**Recommendation:** You have to write JS code for star-rating system. We do not use any plugin, we write our own script for this.

####Requirements####

- At this moment, on the site all products have 2 black stars which mean "this product is rated on average 2 stars".
- On hover and after clicking, there will not be any black star, only creamy (or the same color as for hover buttons), and they will mean "my rating".
- On hover, if you choose only one star, only this particular star should be filled with proper color.
- The client understands that in this case, if someone chooses their grade, they will not see the average mark.
- The customer would like to see at least one product with creamy stars, immediately after displaying a site.

**Solution:** I accomplished this task according to the specification. I added javaScript code taking advantage of DOM events to find particular elements on the site. Then, I used forEach() method to implement code for each product and each star. Afterwards, I added required addEventListeners (click, mouseover, mouseleave) and created two functions, the first one is responsible for adding or removing a color from stars. The second one is responsible for removing black stars after click event. The next step included adding appropriate functions for particular event listener.

### WDP190403-30

**Recommendation:** Add script in order to create a slider with brands. Buttons should switch as many slides as they are visible according to screen size.

**Solution:** To accomplish this task, I used a javaScript slider library called Flickity. Moreover I added all reuired html code and css style for proper work of this slider.

### WDP190403-31

**Recommendation:** This task reuires to create RWD for the "Brands" section. The customer does not have RWD designs, so you have to do it on your own. The slider should have as many visible elements as possible in particular screen. The slider should also have a swipe functionality.

**Solution:** In order to do this task I set appropriate sizes for carousel cells and images of brands for each size screen. The swipe functionality was added in previous task.

### WDP190403-33

**Recommendation:** Add script in order to create a slider with brands. BThe slider should also have a swipe functionality on mobile.

**Solution:** To accomplish this task, I used a javaScript slider library called Flickity. Moreover I added all reuired html code and css style for the proper work of this slider. A swipe functionality was added according to a flickity documentation.
