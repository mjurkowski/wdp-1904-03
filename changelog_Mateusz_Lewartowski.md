# Quantity of tasks: 6

## Quantity of completed tasks: 6

## Quantity of merged tasks with master branch: 6

# Tasks List with points:

## 1. WDP190403-32 --> 3 point

## 2. WDP190403-29 --> 3 point

## 3. WDP190403-6 --> 1 points

## 4. WDP190403-7 --> 1 point

## 5. WDP190403-16 --> 1 points

## 6. WDP190403-17 --> 3 point

## Total points: 12

# Specyfication of my work:

### WDP190403-6

**Recommendation:**: Add box with old price in products container and it must be crossed out. It must be next to actually price. Only some products will be have box with old price.

**Solution:**: I added html code with this same structures like actually price in products. Only I changed value of new price and add some css code with style(crossed) and background-color after hover.

### WPD190403-7

**Recommendation:** : Select of in search menu of products is not propely set: no hover effect and outline is set default.

**Solution** : I deleted outline in css of menu becouse it was set on default line. I added hover effect of category with background color. It's all.

### WDP190403-16

**Recommendation:**: The site is not suitable for responsiveness. Client hasn't any css RWD on site. We need to preapre it alone for footer. The upper part of the footer (gray background, links, payment methods icons) on tablets is located on the tablets, but on smaller screens it wants to be two sections in width, and as in the smallest resolutions will not fit, it's even 1 in width (only in the smallest ). In this lower bar, the client wants the tablet to be left on the tablet, and the social one to the right. There is currently a specially left place on the left, in which there is nothing for now, but the client asked for inclusion that something may be added and then on the tablets this something is to be centered and the entire width (over copyright and socalians).

**Solution:**: I added RWD for footer on tablets and small mobile resolutions. For tablets I set 2 elements per line(category), for mobile 1element per line. Next I changed position for 'copyrights' and social icons like on recomendation on resolution 768px to 992px ( tablets view )

### WDP190403-17

**Recommendation:**: Section "New Furniture" has categories ('bed', 'chair',etc) - client wants them to act as tabs. Ie. For example, if the "Bed" is active and the "Chair" clicks, the entire product list will disappear (with fade animation) (ie all product cards and dots on the right), then a different list of items will appear (also with fade animation). The HTML code has a separate list of products for each category. The dots are to be associated with the list of products, because they will be separate sliders.

**Solution:**: In this task I figured 5 pages of new categories(tab). In every categories I added 3 subpages with 8 products with images. For every furniture i had to add unique images with code in HTML. Then I used bootstrap tabs for changing categories in this section with 'menu tab'. Next to I computed flickty carousel to change subpage in categories. After this I had left CSS the bacground-images and dots to change the subpages. The last step I had to do was to write the javascript code for the carousel to change when you clicked on the given dot. And programming so that each dot changes the proper subpage of the category with the effect of fade.

### WDP190403-29

**Recommendation:**: I need to add new section on site with logos of furnitures companies. Like on markup here: https://uploads.kodilla.com/bootcamp/wdp/group-project-01/section-brands.png. Only HTML and CSS code.

**Solution:** : Firstly I had to look for logotypes to the section, then I added it to my new structures of html. I compressed images to minimum for all like mobile / tables and PC view. Last step was add css for this section for every resulutions.

### WDP190403-32

**Recommendation:**: For this task I had to add new section "Feedback" like this: https://uploads.kodilla.com/bootcamp/wdp/group-project-01/section-feedback.png. I need to add structures of new section in html and code with CSS style.

**Solution:**: Essentially, I added new strucutres of html for new section 'client feedback'. I needed some text looks like a opinion about product and some profile photo of client. Then I added visual of section - some code in css, position of (text, images and headline).
