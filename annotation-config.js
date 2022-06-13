/*
* HOW TO USE:
* Create the following classes in OXYGEN: annotate, underline, highlight, box, circle, bracket, strike-through, crossed-off, multiline, no-multiline
* You apply classes to elements you want animated with the Rough-Annotation Library.
* 1. add class 'annotate' will animate the element with default settings.
* 2. adding type classes (underline, highlight, circle, bracket, strike-through or crossed-off) will apply sensible defaults for each type of animation.
*   you can change these defaults below.
* 3. adding the class 'multiline' / 'no-multiline' will force the multiline attribute on or off respectively, overriding the defaults for each type.
*  NOTE: the RoughAnnotation library CANNOT render multiline animations on block-type elements, only inline-type. This is adressed here by wrapping the contents of 
    block elements in a span and applying the animation on that span instead.
* 4. if you want to create an entirely custom animation, just apply the annotate class and use the custom attribute feature within oxygen to set the properties.
* 
*
* Annotation Groups
* annotation Groups are great for when you want to define a specific sequence for the elements to animate in.
* 1. create a class prefixed with the group prefix defined in the annotation.Config.groupPrefix entry below (default: 'grouped-'). example: grouped-showcase-lines
* 2. give this class to elements that also have the 'annotate' class.
* 3. define the order for the elements to appear using custom attributes in oxygen using the data-order attribute. example: data-order: 4
*    note: items with the same order setting will render in the order in which they appear in the html. 
*    exception: any wrapper item will always render last. I don't know why.
* 
*
* CONFIGURATION
* you can set your preferred settings for each type in the getSettings function.
* elements will be decorated if the annotate class is applied.
* You can specify an annotate type by applying an addition type class ( .highlight, .box, .circle, etc...)
* the script will read the element's dataset for options if it *only* finds the 'annotate' class. In oxygen you can add custom data attributes with the settings you want.
*
*/

/* creates the annotation config object and defines the js collection
* we will use to hold the type specific configurations.
*/
const annotationConfig = {
  types: new Map()
}

// the class prefix used to indicate whether an element should be in a group.
annotationConfig.groupPrefix = 'grouped-'

// the annotation type the script should revert to if no type indication was found
annotationConfig.defaultType = 'underline'

// input your brand colors here.
annotationConfig.defaultColor = '#F37D30' // strokes
annotationConfig.altColor1 = '#D2D700' // highlighter
annotationConfig.altColor2 = 'black'

// some default properties set here.
annotationConfig.defaultStrokeWidth = 2
annotationConfig.defaultIterations = 1
annotationConfig.defaultPadding = [5, 5, 5, 5]

// UNDERLINE
annotationConfig.types.set('underline', {
  color: annotationConfig.defaultColor,
  strokeWidth: 3,
  iterations: 2,
  padding: 1,
  multiline: true
})

// HIGHLIGHT
annotationConfig.types.set('highlight', {
  color: annotationConfig.altColor1,
  iterations: 1,
  multiline: true
})

// BOX
annotationConfig.types.set('box', {
  color: annotationConfig.defaultColor,
  strokeWidth: annotationConfig.defaultStrokeWidth,
  multiline: false,
  padding: 3
})

// CIRCLE
annotationConfig.types.set('circle', {
  color: annotationConfig.defaultColor,
  strokeWidth: annotationConfig.defaultStrokeWidth,
  padding: 1,
  multiline: false
})

// BRACKET
annotationConfig.types.set('bracket', {
  color: annotationConfig.defaultColor,
  strokeWidth: annotationConfig.defaultStrokeWidth,
  padding: [2, 5],
  brackets: ['left', 'right'],
  multiline: false
})

// STRIKE-THROUGH
annotationConfig.types.set('strike-through', {
  color: annotationConfig.defaultColor,
  strokeWidth: annotationConfig.defaultStrokeWidth,
  multiline: true
})

// CROSSED-OFF
annotationConfig.types.set('crossed-off', {
  color: annotationConfig.defaultColor,
  strokeWidth: annotationConfig.defaultStrokeWidth,
  multiline: false
})
