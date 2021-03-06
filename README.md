Binfinity Scroll Gem
====================

### Installation

In your Gemfile:

`gem "binfinity-rais"`

In your application.js file

`\\= require binfinity`

### Usage

Binfinity is a javascript plugin that allows infite scroll in either up or down direction.

The format for use is to call window.scroller.initialize(your_callback_here, options_hash).

Downward infinity scroll is a built-in default. To scroll upward, you need to pass `{upwardScroll: your_upscroll_callback}` as an option in the `scroller.initialize` function.

Also, to change the clearance value or "cushion" as we call it, pass `{cushion: your_integer_value}` into initialize.

For example:

```
$(function(){
  var upCallback = function(){ do stuff here };
  var downCallback = function(){ do stuff here };
  scroller.intialize(myDownCallback, {cushion: 500, upwardScroll: upCallback});
})
```

### Contributing
> This project originated as one of twelve 1-day projects of [12 appy days](12days.github.io).
>
> Please feel free to fork and contribute:

1. Fork the repo
2. Clone the fork $`git clone`
3. Create a feature branch `git checkout -b YOUR_BRANCH_NAME`
4. Commit & push
5. Create a pull request

### Authors
* Joshua Wilborn <JoshuaJWilborn@gmail.com>
* David Kim <daviddarden11@gmail.com>
