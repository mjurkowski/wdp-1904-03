# Quantity of tasks: 6
## Quantity of completed tasks: 6
## Quantity of merget tasks with master branch: 6
# Tasks List with points:
## 1. WDP190403-2 --> 1 point 
## 2. WDP190403-3 --> 1 point
## 3. WDP190403-12 --> 3 point
## 4. WDP190403-21 --> 3 point
## 5. WDP190403-22 --> 3 point
## 6. WDP190403-23 --> 1 point
## Total points: 12
# Specyfication of my work:
### WDP190403-2
  **recommendation:** When displaying a larger number, e.g. 123, the element behaves badly. Correct it so that it allows displaying numbers in the range 0-99999 (maximum 5 digits).
  **solution:** change in 10_header.html - 1 row (adding id to the div element),
                change in _header.scss - 4 lines (change for: width, justify-content, right; add: padding-left)
### WDP190403-3
  **recommendation:** It's about "Free shipping" items, etc. The first element is rigidly "hover". Each of the benefits should be a link and have a hover.
  **solution:** change in 30_section-features.html - adding a tag for each element of the feature-box class to be a link,
change in _feature-box.scss - change from active to hover and add cursor properties

### WDP190403-12
  **recommendation:** The site is falling in responsive modes. The customer does not have RWD designs, so you have to do it on your own.
This task concerns the top bar (with currency, language, etc.) and a banner with the logo and other elements.
It looks ok on tablets, but you need to improve on mobiles:
*top bar*
dropdown on the left are to remain unchanged
login and register are to be without texts (only icons)
if necessary, you can reduce the margins / paddings of all elements, but only in the modes where it is needed
this menu icon on the right on the topbar is to be, both on mobiles and desktop, the client will decide later what he wants to have there and whether the icon will change
*banner*
on the left is to be a logo
on the right the basket (aligned top of the logo, i.e. a little higher than it is)
there should be a telephone after the basket (icon and number)
the phone number can be reduced to 14px
**solution:** Changes in the file 10_headre.html (in the "top-bar" class adding the "company-claim-mobile" class, which is to be active below 992px)
Changes in the file _header.scss (font-size change for tag
in the "phone-number" class, adding the responsiveness for the "top-bar" class for max-width = 767px)

### WDP190403-21
**recommendation:** As the first section on the page, add the "Promoted" section according to design:
This task only applies to writing HTML and CSS.
Requirements
1. Product card on the left:
The dots next to the "Hot deals" header are to be orange on the hover and when the slide is active (scripting the slider will be part of a different thread, here it is only necessary to predict the active state for the given dot in CSS).
Button "Add to cart" and counter (static, animation will be created by the client on their own) to appear on the hover photos of the product.
The three buttons on the left side of the price are supposed to have the same hover effect as other elements of this type on the page.
2. Featured product on the right:
The translucent bar with the title and the "Shop now" button should always be visible.
The buttons with the right and left arrows under the photo are to become orange for the hover.

**solution:** Adding the 20_section-promoted.html module and building the recommended structure
Adding _section - promoted.scss to the section

### WDP190403-22
**recommendation:** In this task, add scripts to two sliders in the "Promoted" section:
Requirements
Sliders are supposed to work independently of each other, i.e. shifting one should not affect the other.
Slider on the left should have autoplay (3 seconds). Regardless, the navigation should be active (dots above the slider) so that you can switch the slides by hand. The dot with the active slide should be orange.
In the slider on the right there is no autoplay, navigation in it should be possible only with the help of arrows.
**solution:** Construction of two carousels according to the specifications of the loom

### WDP190403-23
**recommendation:** The task is to create a version of the mobile section "Promoted". The customer does not have RWD designs, so you have to do it on your own.
On the widths of the mobile one should hide the left slider ("Hot deals") and show only the right one, the entire width of the container.
On mobile and tablets, it is supposed to work by moving slides using swipe and clicking on the navigation of the slider.
**solution:** Monocling the appearance of two carousels for appropriate resolution ranges,
Changes in the behavior of the right carousel in the version for mobile devices below 992px

