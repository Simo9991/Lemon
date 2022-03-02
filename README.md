# what is this? 

a light scroll animation library which using interesection observer api 

# installation 

`npm i lemon-scroll --save`

then... 

```
import { Lemon } from { lemon-scroll }

new Lemon({
    el: insert your dom Element es: ".box",
    animation: isert your own animation es: "fadeIn",
    duration: animtion duration in second --> 0.3,
    options:{
        margin: margin of animation
        retartd: when is visible the animation
    }

})
```