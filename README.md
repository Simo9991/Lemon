# what is this? 

lemon-scroll is a tiny javascript library and its purpose is to animate elements of the dom in a simple and quick way

# installation 
copy and paste this 

    npm i lemon-scroll --save

then, import the { Lemon } module into your javascript file like this

    
    import { Lemon } from { lemon-scroll }
    new Lemon({
        el: insert your dom Element ex: ".box",
        animation: insert one of Lemon's animations
        duration: specifies the duration of the animation in seconds ex. 0.3
        options:{
            margin: margin of the dom element in view ex. "20px" 
            retartd: a value between 0 and 1
        }
    })
    